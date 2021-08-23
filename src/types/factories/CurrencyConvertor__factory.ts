/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CurrencyConvertor,
  CurrencyConvertorInterface,
} from "../CurrencyConvertor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "starkwareContractAddress",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "usdcAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "usdcAssetType",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "exchangeWrapper",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract ERC20",
        name: "tokenFrom",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenFromAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenToAmount",
        type: "uint256",
      },
    ],
    name: "LogConvertedDeposit",
    type: "event",
  },
  {
    inputs: [],
    name: "STARKWARE_CONTRACT",
    outputs: [
      {
        internalType: "contract I_StarkwareContract",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "approveMaximumOnL2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ERC20",
        name: "tokenFrom",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenFromAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "exchangeWrapper",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e060405234801561001057600080fd5b50604051610a24380380610a2483398101604081905261002f91610052565b6001600160601b0319606093841b811660c0529190921b1660805260a0526100ac565b600080600060608486031215610066578283fd5b835161007181610094565b602085015190935061008281610094565b80925050604084015190509250925092565b6001600160a01b03811681146100a957600080fd5b50565b60805160601c60a05160c05160601c6109356100ef600039600081816101430152818161022e0152610295015260006101720152600061025201526109356000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806309e73b30146100465780636d98ebe31461006f578063aec4486014610084575b600080fd5b6100596100543660046105b7565b61008e565b604051610066919061089a565b60405180910390f35b61007761022c565b6040516100669190610736565b61008c610250565b005b6000306100a66001600160a01b038a1633838b6102c1565b6100be6001600160a01b038a1688633b9aca0061031f565b600080886001600160a01b031686866040516100db92919061067f565b6000604051808303816000865af19150503d8060008114610118576040519150601f19603f3d011682016040523d82523d6000602084013e61011d565b606091505b50915091508161012c57600080fd5b6040516327b45c2160e21b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690639ed170849061019f908b907f0000000000000000000000000000000000000000000000000000000000000000908c906032906004016108a3565b600060405180830381600087803b1580156101b957600080fd5b505af11580156101cd573d6000803e3d6000fd5b50505050826001600160a01b03167f41efccb843a4b2f46ec9bf622d318390fa2efcf89da7a816f37336d2ba994d15338b8e8e60326040516102139594939291906106c5565b60405180910390a25060329a9950505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f00000000000000000000000000000000000000000000000000000000000000006102866001600160a01b03821630600061031f565b6102be6001600160a01b0382167f0000000000000000000000000000000000000000000000000000000000000000633b9aca0061031f565b50565b610319846323b872dd60e01b8585856040516024016102e2939291906106f9565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526103f0565b50505050565b8015806103a75750604051636eb1769f60e11b81526001600160a01b0384169063dd62ed3e9061035590309086906004016106ab565b60206040518083038186803b15801561036d57600080fd5b505afa158015610381573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a59190610667565b155b6103cc5760405162461bcd60e51b81526004016103c390610844565b60405180910390fd5b6103eb8363095ea7b360e01b84846040516024016102e292919061071d565b505050565b6000610445826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661047f9092919063ffffffff16565b8051909150156103eb57808060200190518101906104639190610597565b6103eb5760405162461bcd60e51b81526004016103c3906107fa565b606061048e8484600085610498565b90505b9392505050565b6060824710156104ba5760405162461bcd60e51b81526004016103c39061077d565b6104c385610558565b6104df5760405162461bcd60e51b81526004016103c3906107c3565b600080866001600160a01b031685876040516104fb919061068f565b60006040518083038185875af1925050503d8060008114610538576040519150601f19603f3d011682016040523d82523d6000602084013e61053d565b606091505b509150915061054d82828661055e565b979650505050505050565b3b151590565b6060831561056d575081610491565b82511561057d5782518084602001fd5b8160405162461bcd60e51b81526004016103c3919061074a565b6000602082840312156105a8578081fd5b81518015158114610491578182fd5b600080600080600080600060c0888a0312156105d1578283fd5b87356105dc816108ea565b96506020880135955060408801356105f3816108ea565b9450606088013593506080880135925060a088013567ffffffffffffffff8082111561061d578384fd5b818a0191508a601f830112610630578384fd5b81358181111561063e578485fd5b8b602082850101111561064f578485fd5b60208301945080935050505092959891949750929550565b600060208284031215610678578081fd5b5051919050565b6000828483379101908152919050565b600082516106a18184602087016108be565b9190910192915050565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b03958616815293851660208501529190931660408301526060820192909252608081019190915260a00190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0391909116815260200190565b60006020825282518060208401526107698160408501602087016108be565b601f01601f19169190910160400192915050565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b60208082526036908201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60408201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b606082015260800190565b90815260200190565b93845260208401929092526040830152606082015260800190565b60005b838110156108d95781810151838201526020016108c1565b838111156103195750506000910152565b6001600160a01b03811681146102be57600080fdfea2646970667358221220d9b68c4ffedc6ae096101865309c40437ffd56909a416faff5891199d17cee6164736f6c63430008000033";

export class CurrencyConvertor__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    starkwareContractAddress: string,
    usdcAddress: string,
    usdcAssetType: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CurrencyConvertor> {
    return super.deploy(
      starkwareContractAddress,
      usdcAddress,
      usdcAssetType,
      overrides || {}
    ) as Promise<CurrencyConvertor>;
  }
  getDeployTransaction(
    starkwareContractAddress: string,
    usdcAddress: string,
    usdcAssetType: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      starkwareContractAddress,
      usdcAddress,
      usdcAssetType,
      overrides || {}
    );
  }
  attach(address: string): CurrencyConvertor {
    return super.attach(address) as CurrencyConvertor;
  }
  connect(signer: Signer): CurrencyConvertor__factory {
    return super.connect(signer) as CurrencyConvertor__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurrencyConvertorInterface {
    return new utils.Interface(_abi) as CurrencyConvertorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurrencyConvertor {
    return new Contract(address, _abi, signerOrProvider) as CurrencyConvertor;
  }
}
