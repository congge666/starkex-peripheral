import { ethers, waffle } from 'hardhat'
import hre from 'hardhat';
import '@nomiclabs/hardhat-ethers';
import chaiAsPromised from 'chai-as-promised';


import chai from "chai";
import { solidity } from "ethereum-waffle";
import CurrencyConvertorArtifact from '../artifacts/contracts/proxies/CurrencyConvertor.sol/CurrencyConvertor.json';
import {
  axiosRequest,
  generateQueryPath,
  starkKeyToUint256,
} from './helpers';
import { erc20Abi } from './erc20';

import { CurrencyConvertor, ERC20 } from '../src/types';
import _ from 'underscore';
import { BigNumber } from 'ethers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import {
  impersonatedAccount,
  starkwareContractAddress,
  usdcAddress,
  usdtTokenAddress,
  swapUrl,
} from './constants';

const { deployContract } = waffle
const { expect } = chai;
chai.use(chaiAsPromised)

chai.use(solidity);

describe("CurrencyConvertor", () => {
  let currencyConvertor: CurrencyConvertor;
  let usdcTokenContract: ERC20;
  let usdtTokenContract: ERC20;
  let signer: SignerWithAddress;

  before(async () => {
    // setup account
    await hre.network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [impersonatedAccount],
    });
    await hre.network.provider.request({
      method: "hardhat_setBalance",
      params: [
        impersonatedAccount,
        "0x1000000000000000000",
      ],
    });
    signer = await ethers.getSigner(impersonatedAccount);

    currencyConvertor = await deployContract(
      signer,
      CurrencyConvertorArtifact,
      [
        starkwareContractAddress,
        usdcAddress,
        '0x02893294412a4c8f915f75892b395ebbf6859ec246ec365c3b1f56f47c3a0a5d',
      ],
    ) as CurrencyConvertor;

    // get ERC20 contracts
    usdtTokenContract = new ethers.Contract(
      usdtTokenAddress,
      erc20Abi,
      signer,
    ) as ERC20;
    usdcTokenContract = new ethers.Contract(
      usdcAddress,
      erc20Abi,
      signer,
    ) as ERC20;

    // approve ERC20 contracts
    await usdtTokenContract.approve(
      currencyConvertor.address,
      100000000000,
    );
  });

  after(async () => {
    await hre.network.provider.request({
      method: "hardhat_stopImpersonatingAccount",
      params: [impersonatedAccount],
    });
  })

  describe("deposit", async () => {
    it("deposit USDT as USDC to Starkware", async () => {
      const zeroExTransaction = await zeroExRequest('100');

      // get old balances
      const userUsdtBalance: BigNumber = await usdtTokenContract.balanceOf(signer.address);
      const starkwareUsdcBalance: BigNumber = await usdcTokenContract.balanceOf(
        starkwareContractAddress,
      )

      await currencyConvertor.approveSwap(zeroExTransaction.to, usdtTokenAddress);
      const tx = await currencyConvertor.deposit(
        usdtTokenAddress,
        '100000',
        '1',
        starkKeyToUint256('050e0343dc2c0c00aa13f584a31db64524e98b7ff11cd2e07c2f074440821f99'),
        '22', // positionId
        ethers.utils.getAddress(zeroExTransaction.to),
        zeroExTransaction.data,
      );

      const blocks = await tx.wait();
      const events = _.chain(blocks.events!)
      .filter((e) => e.event === 'LogConvertedDeposit')
      .value();

      const event = events[0];
      expect(event.args?.tokenFromAmount.toString()).to.equal('100000');
      expect(event.args?.tokenFrom.toLowerCase()).to.equal(usdtTokenAddress);

      // get new balances
      const newUserUsdtBalance: BigNumber = await usdtTokenContract.balanceOf(signer.address);
      const newStarkwareUsdcBalance: BigNumber = await usdcTokenContract.balanceOf(
        starkwareContractAddress,
      );

      expect(newUserUsdtBalance.lt(userUsdtBalance)).to.be.true;
      expect(newStarkwareUsdcBalance.gt(starkwareUsdcBalance)).to.be.true;

      // deposit with approvals
      const zeroExTransaction2 = await zeroExRequest('100');
      await currencyConvertor.deposit(
        usdtTokenAddress,
        '100000',
        '1',
        starkKeyToUint256('050e0343dc2c0c00aa13f584a31db64524e98b7ff11cd2e07c2f074440821f99'),
        '22', // positionId
        ethers.utils.getAddress(zeroExTransaction.to),
        zeroExTransaction2.data,
      );
    });

    it("deposit USDT to USDC without enough funds", async () => {
      const zeroExTransaction = await zeroExRequest('1000000');

      await currencyConvertor.approveSwap(zeroExTransaction.to, usdtTokenAddress);
      await expect(currencyConvertor.deposit(
        usdtTokenAddress,
        '1',
        '1',
        starkKeyToUint256('050e0343dc2c0c00aa13f584a31db64524e98b7ff11cd2e07c2f074440821f99'),
        '22', // positionId
        ethers.utils.getAddress(zeroExTransaction.to),
        zeroExTransaction.data,
      )).to.be.reverted;
    });

    it("deposit USDT to USDC with too small of swap", async () => {
      const zeroExTransaction = await zeroExRequest('1000000');

      await currencyConvertor.approveSwap(zeroExTransaction.to, usdtTokenAddress);
      await expect(currencyConvertor.deposit(
        usdtTokenAddress,
        '100000',
        '1',
        starkKeyToUint256('050e0343dc2c0c00aa13f584a31db64524e98b7ff11cd2e07c2f074440821f99'),
        '22', // positionId
        ethers.utils.getAddress(zeroExTransaction.to),
        zeroExTransaction.data,
      )).to.be.reverted; //  �y� % UniswapV2: INSUFFICIENT_OUTPUT_AMOUNT
    });

    it("deposit USDT as USDC to Starkware but starkKey is invalid", async () => {
      const zeroExTransaction = await zeroExRequest('100');

      await currencyConvertor.approveSwap(zeroExTransaction.to, usdtTokenAddress);
      await expect(currencyConvertor.deposit(
        usdtTokenAddress,
        '100000',
        '1',
        starkKeyToUint256('050e0343dc2c0c00aa13f584a31db64524e98b7ff11cd2e07c2f074440821f90'),
        '22', // positionId
        ethers.utils.getAddress(zeroExTransaction.to),
        zeroExTransaction.data,
      )).to.be.revertedWith('INVALID_STARK_KEY');
    });

    it("deposit USDT as USDC to Starkware but swap is less than limit amount", async () => {
      const zeroExTransaction = await zeroExRequest('100');

      await currencyConvertor.approveSwap(zeroExTransaction.to, usdtTokenAddress);
      await expect(currencyConvertor.deposit(
        usdtTokenAddress,
        '100000',
        '100000',
        starkKeyToUint256('050e0343dc2c0c00aa13f584a31db64524e98b7ff11cd2e07c2f074440821f99'),
        '22', // positionId
        ethers.utils.getAddress(zeroExTransaction.to),
        zeroExTransaction.data,
      )).to.be.revertedWith('Would swap less than limin token to amount');
    });
  });
});

async function zeroExRequest(sellAmount: string): Promise<{ to: string, data: string }> {
  return axiosRequest({
    method: 'GET',
    url: generateQueryPath(
      swapUrl,
      {
        sellAmount,
        sellToken: usdtTokenAddress,
        buyToken: usdcAddress,
        slippagePercentage: 1.0,
      },
    ),
  }) as Promise<{ to: string, data: string }>;
}
