"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompMint__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class CompMint__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_nft, _pmix, overrides) {
        return super.deploy(_nft, _pmix, overrides || {});
    }
    getDeployTransaction(_nft, _pmix, overrides) {
        return super.getDeployTransaction(_nft, _pmix, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.CompMint__factory = CompMint__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "contract IERC1155",
                name: "_nft",
                type: "address",
            },
            {
                internalType: "contract IFungibleToken",
                name: "_pmix",
                type: "address",
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
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "count",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "count",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "mintWithPermit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "nft",
        outputs: [
            {
                internalType: "contract IERC1155",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
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
        inputs: [],
        name: "pmix",
        outputs: [
            {
                internalType: "contract IFungibleToken",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506040516106e73803806106e783398101604081905261002f916100d1565b61003833610069565b600180546001600160a01b039384166001600160a01b0319918216179091556002805492909316911617905561010b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146100ce57600080fd5b50565b600080604083850312156100e457600080fd5b82516100ef816100b9565b6020840151909250610100816100b9565b809150509250929050565b6105cd8061011a6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80634e55eaed1161005b5780634e55eaed146100d9578063715018a6146100ec5780638da5cb5b146100f4578063f2fde38b1461010557600080fd5b80630a3c4d46146100825780631b2ef1ca146100b157806347ccca02146100c6575b600080fd5b600254610095906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6100c46100bf36600461049d565b610118565b005b600154610095906001600160a01b031681565b6100c46100e73660046104bf565b61025b565b6100c4610317565b6000546001600160a01b0316610095565b6100c4610113366004610518565b610382565b600154604051637921219560e11b8152306004820152336024820152604481018490526064810183905260a06084820152600060a48201526001600160a01b039091169063f242432a9060c401600060405180830381600087803b15801561017f57600080fd5b505af1158015610193573d6000803e3d6000fd5b50506002546001600160a01b031691506323b872dd9050336101bd6000546001600160a01b031690565b6101cf85678ac7230489e80000610548565b6040516001600160e01b031960e086901b1681526001600160a01b0393841660048201529290911660248301526044820152606401602060405180830381600087803b15801561021e57600080fd5b505af1158015610232573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102569190610575565b505050565b6002546001600160a01b031663d505accf333061028089678ac7230489e80000610548565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526064810187905260ff8616608482015260a4810185905260c4810184905260e401600060405180830381600087803b1580156102ed57600080fd5b505af1158015610301573d6000803e3d6000fd5b5050505061030f8686610118565b505050505050565b6000546001600160a01b031633146103765760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b610380600061044d565b565b6000546001600160a01b031633146103dc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161036d565b6001600160a01b0381166104415760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161036d565b61044a8161044d565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156104b057600080fd5b50508035926020909101359150565b60008060008060008060c087890312156104d857600080fd5b863595506020870135945060408701359350606087013560ff811681146104fe57600080fd5b9598949750929560808101359460a0909101359350915050565b60006020828403121561052a57600080fd5b81356001600160a01b038116811461054157600080fd5b9392505050565b600081600019048311821515161561057057634e487b7160e01b600052601160045260246000fd5b500290565b60006020828403121561058757600080fd5b8151801515811461054157600080fdfea264697066735822122081e5a94ba5d6fa8631f0451067536557df53a45e510dcedf7e3613765b4e3be464736f6c63430008090033";
//# sourceMappingURL=CompMint__factory.js.map