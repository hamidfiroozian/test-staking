/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MWStaking, MWStakingInterface } from "../MWStaking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "weaponAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "multiSig",
        type: "address",
      },
      {
        internalType: "address",
        name: "epochRobot",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "firstAdd",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numToAdd",
        type: "uint256",
      },
    ],
    name: "addEpochs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "becomePlayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "epochs",
        type: "uint256[]",
      },
    ],
    name: "claim",
    outputs: [],
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
        internalType: "uint256[]",
        name: "epochs",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "claimPlayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentEpoch",
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
    name: "failsafeETHtransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "getEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "epochStartDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "epochPool",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "epochEth",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPlayerContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "hasClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "isPlayer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "playersAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pContract",
        type: "address",
      },
    ],
    name: "setPlayerContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "poolSize",
        type: "uint256",
      },
    ],
    name: "setPoolSize",
    outputs: [],
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
      {
        internalType: "uint256",
        name: "unstakeTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "adjustedStake",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
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
        name: "adjustedStake",
        type: "uint256",
      },
    ],
    name: "sync",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "togglePlayersAllowed",
    outputs: [],
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
        name: "unstakeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "adjustedStake",
        type: "uint256",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200354f3803806200354f83398181016040528101906200003791906200023f565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015620000a25750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b8015620000dc5750600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b6200011e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200011590620002bc565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508273ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b8152505082600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555063621de2e26000808081526020019081526020016000208190555050505062000366565b60008151905062000239816200034c565b92915050565b6000806000606084860312156200025557600080fd5b6000620002658682870162000228565b9350506020620002788682870162000228565b92505060406200028b8682870162000228565b9150509250925092565b6000620002a4601683620002de565b9150620002b18262000323565b602082019050919050565b60006020820190508181036000830152620002d78162000295565b9050919050565b600082825260208201905092915050565b6000620002fc8262000303565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b7f63616e6e6f74206265207a65726f206164647265737300000000000000000000600082015250565b6200035781620002ef565b81146200036357600080fd5b50565b60805160601c60a05160601c60c05160601c61319e620003b16000396000610a12015260005050600081816105a4015281816106ef015281816116380152611720015261319e6000f3fe6080604052600436106101185760003560e01c80636a6c6fca116100a0578063a2bc66be11610064578063a2bc66be1461037b578063b2931096146103a4578063bc0bc6ba146103e1578063ef4fcafa14610420578063f93d4f8a1461044957610153565b80636a6c6fca146102be5780636ba4c138146102e757806376671808146103105780639136ed041461033b57806391df6c701461035257610153565b8063218c0da2116100e7578063218c0da2146101ff578063345fb5ea1461022857806354fd4d501461025357806356075a981461027e5780635b7be18a1461029557610153565b806306fdde0314610155578063072c6cda1461018057806309c95e10146101ab5780631023231c146101e857610153565b3661015357610125610472565b34600260006003548152602001908152602001600020600082825461014a9190612b4c565b92505081905550005b005b34801561016157600080fd5b5061016a6104e5565b6040516101779190612851565b60405180910390f35b34801561018c57600080fd5b50610195610522565b6040516101a291906126c2565b60405180910390f35b3480156101b757600080fd5b506101d260048036038101906101cd91906120e3565b61054c565b6040516101df9190612836565b60405180910390f35b3480156101f457600080fd5b506101fd6105a2565b005b34801561020b57600080fd5b50610226600480360381019061022191906122f1565b6106ed565b005b34801561023457600080fd5b5061023d610910565b60405161024a9190612836565b60405180910390f35b34801561025f57600080fd5b50610268610923565b6040516102759190612851565b60405180910390f35b34801561028a57600080fd5b50610293610960565b005b3480156102a157600080fd5b506102bc60048036038101906102b791906122c8565b610a10565b005b3480156102ca57600080fd5b506102e560048036038101906102e0919061210c565b610ac2565b005b3480156102f357600080fd5b5061030e60048036038101906103099190612283565b610ee4565b005b34801561031c57600080fd5b50610325611630565b6040516103329190612ad3565b60405180910390f35b34801561034757600080fd5b50610350611636565b005b34801561035e57600080fd5b50610379600480360381019061037491906120e3565b61171e565b005b34801561038757600080fd5b506103a2600480360381019061039d91906121d1565b6117f7565b005b3480156103b057600080fd5b506103cb60048036038101906103c69190612195565b611a90565b6040516103d89190612836565b60405180910390f35b3480156103ed57600080fd5b50610408600480360381019061040391906122c8565b611af8565b60405161041793929190612aee565b60405180910390f35b34801561042c57600080fd5b5061044760048036038101906104429190612195565b611b45565b005b34801561045557600080fd5b50610470600480360381019061046b9190612220565b611d03565b005b60008060016003546104849190612b4c565b81526020019081526020016000205442101580156104c35750600080600060016003546104b19190612b4c565b81526020019081526020016000205414155b156104e3576001600360008282546104db9190612b4c565b925050819055505b565b60606040518060400160405280601281526020017f4d454741574541504f4e205374616b696e670000000000000000000000000000815250905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166105e1611fa1565b73ffffffffffffffffffffffffffffffffffffffff1614610637576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062e906129d3565b60405180910390fd5b6000610641611fa1565b73ffffffffffffffffffffffffffffffffffffffff1647604051610664906126ad565b60006040518083038185875af1925050503d80600081146106a1576040519150601f19603f3d011682016040523d82523d6000602084013e6106a6565b606091505b50509050806106ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e1906128d3565b60405180910390fd5b50565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661072c611fa1565b73ffffffffffffffffffffffffffffffffffffffff1614610782576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610779906129d3565b60405180910390fd5b60148111156107c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107bd90612a53565b60405180910390fd5b6000806000848152602001908152602001600020541461081b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610812906128f3565b60405180910390fd5b60005b818160ff16101561090b57600080600060018460ff168761083f9190612b4c565b6108499190612c2d565b8152602001908152602001600020541415610899576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089090612933565b60405180910390fd5b62093a8060008060018460ff16876108b19190612b4c565b6108bb9190612c2d565b8152602001908152602001600020546108d49190612b4c565b6000808360ff16866108e69190612b4c565b815260200190815260200160002081905550808061090390612cfb565b91505061081e565b505050565b600560009054906101000a900460ff1681565b60606040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250905090565b600560009054906101000a900460ff166109af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a6906128b3565b60405180910390fd5b6001600460006109bd611fa1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610a4f611fa1565b73ffffffffffffffffffffffffffffffffffffffff1614610aa5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9c906129d3565b60405180910390fd5b806001600060035481526020019081526020016000208190555050565b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610b4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4590612993565b60405180910390fd5b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610b8f611fa1565b73ffffffffffffffffffffffffffffffffffffffff1614610be5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdc90612a93565b60405180910390fd5b60148484905011158015610bfe57508383905082829050145b610c3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c34906129f3565b60405180910390fd5b610c45610472565b60008085859050905060005b818360ff161015610ed05786868460ff16818110610c98577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002013560035411610ce2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd990612a33565b60405180910390fd5b600660008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600088888660ff16818110610d5f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135815260200190815260200160002060009054906101000a900460ff1615610dc2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610db990612893565b60405180910390fd5b84848460ff16818110610dfe577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002013581610e109190612b4c565b90506001600660008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600089898760ff16818110610e91577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135815260200190815260200160002060006101000a81548160ff0219169083151502179055508280610ec890612cfb565b935050610c51565b610eda8189611fa9565b5050505050505050565b60046000610ef0611fa1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610f78576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6f90612973565b60405180910390fd5b6014828290501115610fbf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb690612a13565b60405180910390fd5b610fc7610472565b600080838390509050600080806000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637a76646061101c611fa1565b6040518263ffffffff1660e01b815260040161103891906126c2565b60606040518083038186803b15801561105057600080fd5b505afa158015611064573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611088919061232d565b925092509250600083116110d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c8906129b3565b60405180910390fd5b5b848660ff1610156116155787878760ff16818110611119577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002013560035411611163576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115a90612a33565b60405180910390fd5b620151806000808a8a8a60ff168181106111a6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b905060200201358152602001908152602001600020546111c69190612b4c565b8211158015611235575060008060018a8a8a60ff16818110611211577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b905060200201356112229190612b4c565b8152602001908152602001600020548110155b611274576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126b90612ab3565b60405180910390fd5b60008089898960ff168181106112b3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135815260200190815260200160002054821015801561133a5750620151806000808a8a8a60ff16818110611316577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b905060200201358152602001908152602001600020546113369190612b4c565b8110155b611379576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161137090612913565b60405180910390fd5b60066000611385611fa1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600089898960ff168181106113fd577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135815260200190815260200160002060009054906101000a900460ff1615611460576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161145790612893565b60405180910390fd5b6000600160008a8a8a60ff168181106114a2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135815260200190815260200160002054620f4240856114c79190612bd3565b6114d19190612ba2565b9050620f4240600260008b8b8b60ff16818110611517577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135815260200190815260200160002054826115389190612bd3565b6115429190612ba2565b8561154d9190612b4c565b945060016006600061155d611fa1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008b8b8b60ff168181106115d5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135815260200190815260200160002060006101000a81548160ff021916908315150217905550868061160c90612cfb565b975050506110d2565b61162684611621611fa1565b611fa9565b5050505050505050565b60035481565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16611675611fa1565b73ffffffffffffffffffffffffffffffffffffffff16146116cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116c2906129d3565b60405180910390fd5b600560009054906101000a900460ff1615611700576000600560006101000a81548160ff02191690831515021790555061171c565b6001600560006101000a81548160ff0219169083151502179055505b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661175d611fa1565b73ffffffffffffffffffffffffffffffffffffffff16146117b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117aa906129d3565b60405180910390fd5b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6117ff610472565b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561198157600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611892611fa1565b73ffffffffffffffffffffffffffffffffffffffff16146118e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118df90612a93565b60405180910390fd5b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb11c62784846001856040518563ffffffff1660e01b815260040161194a949392919061274b565b600060405180830381600087803b15801561196457600080fd5b505af1158015611978573d6000803e3d6000fd5b50505050611a8b565b611989611fa1565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146119f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119ed90612873565b60405180910390fd5b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb11c62784846000806040518563ffffffff1660e01b8152600401611a589493929190612706565b600060405180830381600087803b158015611a7257600080fd5b505af1158015611a86573d6000803e3d6000fd5b505050505b505050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff16905092915050565b600080600080600085815260200190815260200160002054600160008681526020019081526020016000205460026000878152602001908152602001600020549250925092509193909250565b611b4d610472565b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611bd9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bd090612993565b60405180910390fd5b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611c1a611fa1565b73ffffffffffffffffffffffffffffffffffffffff1614611c70576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c6790612a73565b60405180910390fd5b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ef4fcafa83836040518363ffffffff1660e01b8152600401611ccd9291906126dd565b600060405180830381600087803b158015611ce757600080fd5b505af1158015611cfb573d6000803e3d6000fd5b505050505050565b611d0b610472565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615611e8f57600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611d9e611fa1565b73ffffffffffffffffffffffffffffffffffffffff1614611df4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611deb90612953565b60405180910390fd5b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a2bad6928585856001866040518663ffffffff1660e01b8152600401611e589594939291906127e3565b600060405180830381600087803b158015611e7257600080fd5b505af1158015611e86573d6000803e3d6000fd5b50505050611f9b565b611e97611fa1565b73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614611f04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611efb90612873565b60405180910390fd5b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a2bad6928585856000806040518663ffffffff1660e01b8152600401611f68959493929190612790565b600060405180830381600087803b158015611f8257600080fd5b505af1158015611f96573d6000803e3d6000fd5b505050505b50505050565b600033905090565b60008173ffffffffffffffffffffffffffffffffffffffff1683604051611fcf906126ad565b60006040518083038185875af1925050503d806000811461200c576040519150601f19603f3d011682016040523d82523d6000602084013e612011565b606091505b5050905080612055576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161204c906128d3565b60405180910390fd5b505050565b6000813590506120698161313a565b92915050565b60008083601f84011261208157600080fd5b8235905067ffffffffffffffff81111561209a57600080fd5b6020830191508360208202830111156120b257600080fd5b9250929050565b6000813590506120c881613151565b92915050565b6000815190506120dd81613151565b92915050565b6000602082840312156120f557600080fd5b60006121038482850161205a565b91505092915050565b60008060008060006060868803121561212457600080fd5b60006121328882890161205a565b955050602086013567ffffffffffffffff81111561214f57600080fd5b61215b8882890161206f565b9450945050604086013567ffffffffffffffff81111561217a57600080fd5b6121868882890161206f565b92509250509295509295909350565b600080604083850312156121a857600080fd5b60006121b68582860161205a565b92505060206121c7858286016120b9565b9150509250929050565b6000806000606084860312156121e657600080fd5b60006121f48682870161205a565b9350506020612205868287016120b9565b9250506040612216868287016120b9565b9150509250925092565b6000806000806080858703121561223657600080fd5b60006122448782880161205a565b9450506020612255878288016120b9565b9350506040612266878288016120b9565b9250506060612277878288016120b9565b91505092959194509250565b6000806020838503121561229657600080fd5b600083013567ffffffffffffffff8111156122b057600080fd5b6122bc8582860161206f565b92509250509250929050565b6000602082840312156122da57600080fd5b60006122e8848285016120b9565b91505092915050565b6000806040838503121561230457600080fd5b6000612312858286016120b9565b9250506020612323858286016120b9565b9150509250929050565b60008060006060848603121561234257600080fd5b6000612350868287016120ce565b9350506020612361868287016120ce565b9250506040612372868287016120ce565b9150509250925092565b61238581612c61565b82525050565b61239481612c73565b82525050565b6123a381612cb6565b82525050565b60006123b482612b25565b6123be8185612b3b565b93506123ce818560208601612cc8565b6123d781612d83565b840191505092915050565b60006123ef601583612b3b565b91506123fa82612d94565b602082019050919050565b6000612412600f83612b3b565b915061241d82612dbd565b602082019050919050565b6000612435601483612b3b565b915061244082612de6565b602082019050919050565b6000612458601483612b3b565b915061246382612e0f565b602082019050919050565b600061247b601183612b3b565b915061248682612e38565b602082019050919050565b600061249e600b83612b3b565b91506124a982612e61565b602082019050919050565b60006124c1601683612b3b565b91506124cc82612e8a565b602082019050919050565b60006124e4602283612b3b565b91506124ef82612eb3565b604082019050919050565b6000612507601083612b3b565b915061251282612f02565b602082019050919050565b600061252a600c83612b3b565b915061253582612f2b565b602082019050919050565b600061254d602383612b3b565b915061255882612f54565b604082019050919050565b6000612570600c83612b3b565b915061257b82612fa3565b602082019050919050565b6000612593600e83612b3b565b915061259e82612fcc565b602082019050919050565b60006125b6600083612b30565b91506125c182612ff5565b600082019050919050565b60006125d9600d83612b3b565b91506125e482612ff8565b602082019050919050565b60006125fc601083612b3b565b915061260782613021565b602082019050919050565b600061261f600f83612b3b565b915061262a8261304a565b602082019050919050565b6000612642602183612b3b565b915061264d82613073565b604082019050919050565b6000612665602483612b3b565b9150612670826130c2565b604082019050919050565b6000612688601b83612b3b565b915061269382613111565b602082019050919050565b6126a781612c9f565b82525050565b60006126b8826125a9565b9150819050919050565b60006020820190506126d7600083018461237c565b92915050565b60006040820190506126f2600083018561237c565b6126ff602083018461269e565b9392505050565b600060808201905061271b600083018761237c565b612728602083018661269e565b612735604083018561238b565b612742606083018461239a565b95945050505050565b6000608082019050612760600083018761237c565b61276d602083018661269e565b61277a604083018561238b565b612787606083018461269e565b95945050505050565b600060a0820190506127a5600083018861237c565b6127b2602083018761269e565b6127bf604083018661269e565b6127cc606083018561238b565b6127d9608083018461239a565b9695505050505050565b600060a0820190506127f8600083018861237c565b612805602083018761269e565b612812604083018661269e565b61281f606083018561238b565b61282c608083018461269e565b9695505050505050565b600060208201905061284b600083018461238b565b92915050565b6000602082019050818103600083015261286b81846123a9565b905092915050565b6000602082019050818103600083015261288c816123e2565b9050919050565b600060208201905081810360008301526128ac81612405565b9050919050565b600060208201905081810360008301526128cc81612428565b9050919050565b600060208201905081810360008301526128ec8161244b565b9050919050565b6000602082019050818103600083015261290c8161246e565b9050919050565b6000602082019050818103600083015261292c81612491565b9050919050565b6000602082019050818103600083015261294c816124b4565b9050919050565b6000602082019050818103600083015261296c816124d7565b9050919050565b6000602082019050818103600083015261298c816124fa565b9050919050565b600060208201905081810360008301526129ac8161251d565b9050919050565b600060208201905081810360008301526129cc81612540565b9050919050565b600060208201905081810360008301526129ec81612563565b9050919050565b60006020820190508181036000830152612a0c81612586565b9050919050565b60006020820190508181036000830152612a2c816125cc565b9050919050565b60006020820190508181036000830152612a4c816125ef565b9050919050565b60006020820190508181036000830152612a6c81612612565b9050919050565b60006020820190508181036000830152612a8c81612635565b9050919050565b60006020820190508181036000830152612aac81612658565b9050919050565b60006020820190508181036000830152612acc8161267b565b9050919050565b6000602082019050612ae8600083018461269e565b92915050565b6000606082019050612b03600083018661269e565b612b10602083018561269e565b612b1d604083018461269e565b949350505050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000612b5782612c9f565b9150612b6283612c9f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612b9757612b96612d25565b5b828201905092915050565b6000612bad82612c9f565b9150612bb883612c9f565b925082612bc857612bc7612d54565b5b828204905092915050565b6000612bde82612c9f565b9150612be983612c9f565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612c2257612c21612d25565b5b828202905092915050565b6000612c3882612c9f565b9150612c4383612c9f565b925082821015612c5657612c55612d25565b5b828203905092915050565b6000612c6c82612c7f565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b6000612cc182612c9f565b9050919050565b60005b83811015612ce6578082015181840152602081019050612ccb565b83811115612cf5576000848401525b50505050565b6000612d0682612ca9565b915060ff821415612d1a57612d19612d25565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f6d757374206265206163636f756e74206f776e65720000000000000000000000600082015250565b7f616c726561647920636c61696d65640000000000000000000000000000000000600082015250565b7f67616d65706c6179206e6f7420656e61626c6564000000000000000000000000600082015250565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b7f65706f636820616c726561647920736574000000000000000000000000000000600082015250565b7f4545455252524f4f4f5252000000000000000000000000000000000000000000600082015250565b7f70726576696f75732065706f6368206e6f742073657400000000000000000000600082015250565b7f6d757374207374616b65207468726f75676820706c6179657220636f6e74726160008201527f6374000000000000000000000000000000000000000000000000000000000000602082015250565b7f63616e6e6f7420626520706c6179657200000000000000000000000000000000600082015250565b7f6e6f74206120706c617965720000000000000000000000000000000000000000600082015250565b7f63616e6e6f7420636c61696d20776974686f7574207374616b65642062616c6160008201527f6e63650000000000000000000000000000000000000000000000000000000000602082015250565b7f756e617574686f72697a65640000000000000000000000000000000000000000600082015250565b7f65706f6368206d69736d61746368000000000000000000000000000000000000600082015250565b50565b7f6d61782032302065706f63687300000000000000000000000000000000000000600082015250565b7f65706f6368206e6f7420636c6f73656400000000000000000000000000000000600082015250565b7f6c696d69742032302065706f6368730000000000000000000000000000000000600082015250565b7f6d7573742073796e63207468726f75676820706c6179657220636f6e7472616360008201527f7400000000000000000000000000000000000000000000000000000000000000602082015250565b7f6d75737420756e7374616b65207468726f75676820706c6179657220636f6e7460008201527f7261637400000000000000000000000000000000000000000000000000000000602082015250565b7f6e6f7420656c696769626c6520666f7220746869732065706f63680000000000600082015250565b61314381612c61565b811461314e57600080fd5b50565b61315a81612c9f565b811461316557600080fd5b5056fea26469706673582212206810e971a41491dc6fd84fe6f4f8f36ed1d4622b14f135525c88f5f8a09bb6a564736f6c63430008040033";

type MWStakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MWStakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MWStaking__factory extends ContractFactory {
  constructor(...args: MWStakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MWStaking";
  }

  deploy(
    weaponAddress: string,
    multiSig: string,
    epochRobot: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MWStaking> {
    return super.deploy(
      weaponAddress,
      multiSig,
      epochRobot,
      overrides || {}
    ) as Promise<MWStaking>;
  }
  getDeployTransaction(
    weaponAddress: string,
    multiSig: string,
    epochRobot: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      weaponAddress,
      multiSig,
      epochRobot,
      overrides || {}
    );
  }
  attach(address: string): MWStaking {
    return super.attach(address) as MWStaking;
  }
  connect(signer: Signer): MWStaking__factory {
    return super.connect(signer) as MWStaking__factory;
  }
  static readonly contractName: "MWStaking";
  public readonly contractName: "MWStaking";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MWStakingInterface {
    return new utils.Interface(_abi) as MWStakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MWStaking {
    return new Contract(address, _abi, signerOrProvider) as MWStaking;
  }
}