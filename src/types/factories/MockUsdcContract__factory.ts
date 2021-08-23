/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockUsdcContract,
  MockUsdcContractInterface,
} from "../MockUsdcContract";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040805180820182526004808252635553444360e01b60208084018281528551808701909652928552840152815191929161004e9160039161006a565b50805161006290600490602084019061006a565b50505061013e565b82805461007690610103565b90600052602060002090601f01602090048101928261009857600085556100de565b82601f106100b157805160ff19168380011785556100de565b828001600101855582156100de579182015b828111156100de5782518255916020019190600101906100c3565b506100ea9291506100ee565b5090565b5b808211156100ea57600081556001016100ef565b60028104600182168061011757607f821691505b6020821081141561013857634e487b7160e01b600052602260045260246000fd5b50919050565b610ae68061014d6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806340c10f191161007157806340c10f191461014757806370a082311461015c57806395d89b411461016f578063a457c2d714610177578063a9059cbb1461018a578063dd62ed3e1461019d576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100f757806323b872dd1461010c578063313ce5671461011f5780633950935114610134575b600080fd5b6100c16101b0565b6040516100ce91906107cf565b60405180910390f35b6100ea6100e536600461079b565b610242565b6040516100ce91906107c4565b6100ff61025f565b6040516100ce9190610a3a565b6100ea61011a366004610760565b610265565b6101276102fe565b6040516100ce9190610a43565b6100ea61014236600461079b565b610303565b61015a61015536600461079b565b610357565b005b6100ff61016a36600461070d565b610365565b6100c1610384565b6100ea61018536600461079b565b610393565b6100ea61019836600461079b565b61040c565b6100ff6101ab36600461072e565b610420565b6060600380546101bf90610a75565b80601f01602080910402602001604051908101604052809291908181526020018280546101eb90610a75565b80156102385780601f1061020d57610100808354040283529160200191610238565b820191906000526020600020905b81548152906001019060200180831161021b57829003601f168201915b5050505050905090565b600061025661024f61044b565b848461044f565b50600192915050565b60025490565b6000610272848484610503565b6001600160a01b03841660009081526001602052604081208161029361044b565b6001600160a01b03166001600160a01b03168152602001908152602001600020549050828110156102df5760405162461bcd60e51b81526004016102d6906108ed565b60405180910390fd5b6102f3856102eb61044b565b85840361044f565b506001949350505050565b601290565b600061025661031061044b565b84846001600061031e61044b565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546103529190610a51565b61044f565b610361828261062d565b5050565b6001600160a01b0381166000908152602081905260409020545b919050565b6060600480546101bf90610a75565b600080600160006103a261044b565b6001600160a01b03908116825260208083019390935260409182016000908120918816815292529020549050828110156103ee5760405162461bcd60e51b81526004016102d6906109be565b6104026103f961044b565b8585840361044f565b5060019392505050565b600061025661041961044b565b8484610503565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166104755760405162461bcd60e51b81526004016102d69061097a565b6001600160a01b03821661049b5760405162461bcd60e51b81526004016102d690610865565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906104f6908590610a3a565b60405180910390a3505050565b6001600160a01b0383166105295760405162461bcd60e51b81526004016102d690610935565b6001600160a01b03821661054f5760405162461bcd60e51b81526004016102d690610822565b61055a8383836106f1565b6001600160a01b038316600090815260208190526040902054818110156105935760405162461bcd60e51b81526004016102d6906108a7565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906105ca908490610a51565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106149190610a3a565b60405180910390a36106278484846106f1565b50505050565b6001600160a01b0382166106535760405162461bcd60e51b81526004016102d690610a03565b61065f600083836106f1565b80600260008282546106719190610a51565b90915550506001600160a01b0382166000908152602081905260408120805483929061069e908490610a51565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906106e1908590610a3a565b60405180910390a3610361600083835b505050565b80356001600160a01b038116811461037f57600080fd5b60006020828403121561071e578081fd5b610727826106f6565b9392505050565b60008060408385031215610740578081fd5b610749836106f6565b9150610757602084016106f6565b90509250929050565b600080600060608486031215610774578081fd5b61077d846106f6565b925061078b602085016106f6565b9150604084013590509250925092565b600080604083850312156107ad578182fd5b6107b6836106f6565b946020939093013593505050565b901515815260200190565b6000602080835283518082850152825b818110156107fb578581018301518582016040015282016107df565b8181111561080c5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616040820152676c6c6f77616e636560c01b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b60ff91909116815260200190565b60008219821115610a7057634e487b7160e01b81526011600452602481fd5b500190565b600281046001821680610a8957607f821691505b60208210811415610aaa57634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220d2387ddcd9264a759d99cd021a47d96e255a5de0fc0a83a07650f055eaf8473064736f6c63430008000033";

export class MockUsdcContract__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockUsdcContract> {
    return super.deploy(overrides || {}) as Promise<MockUsdcContract>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockUsdcContract {
    return super.attach(address) as MockUsdcContract;
  }
  connect(signer: Signer): MockUsdcContract__factory {
    return super.connect(signer) as MockUsdcContract__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockUsdcContractInterface {
    return new utils.Interface(_abi) as MockUsdcContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockUsdcContract {
    return new Contract(address, _abi, signerOrProvider) as MockUsdcContract;
  }
}
