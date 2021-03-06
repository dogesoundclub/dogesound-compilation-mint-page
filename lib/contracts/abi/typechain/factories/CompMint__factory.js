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
const _bytecode = "0x608060405234801561001057600080fd5b5060405161067e38038061067e83398101604081905261002f916100d1565b61003833610069565b600180546001600160a01b039384166001600160a01b0319918216179091556002805492909316911617905561010b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146100ce57600080fd5b50565b600080604083850312156100e457600080fd5b82516100ef816100b9565b6020840151909250610100816100b9565b809150509250929050565b6105648061011a6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100ce578063a0712d68146100df578063d0248fb4146100f2578063f2fde38b1461010557600080fd5b80630a3c4d461461008257806347ccca02146100b1578063715018a6146100c4575b600080fd5b600254610095906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b600154610095906001600160a01b031681565b6100cc610118565b005b6000546001600160a01b0316610095565b6100cc6100ed366004610474565b610183565b6100cc61010036600461048d565b6102ba565b6100cc6101133660046104dc565b610359565b6000546001600160a01b031633146101775760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6101816000610424565b565b60018054604051637921219560e11b815230600482015233602482015260448101849052606481019290925260a06084830152600060a48301526001600160a01b03169063f242432a9060c401600060405180830381600087803b1580156101ea57600080fd5b505af11580156101fe573d6000803e3d6000fd5b50506002546001600160a01b031691506323b872dd9050336102286000546001600160a01b031690565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152678ac7230489e800006044820152606401602060405180830381600087803b15801561027e57600080fd5b505af1158015610292573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b6919061050c565b5050565b60025460405163d505accf60e01b8152336004820152306024820152678ac7230489e8000060448201526064810186905260ff8516608482015260a4810184905260c481018390526001600160a01b039091169063d505accf9060e401600060405180830381600087803b15801561033157600080fd5b505af1158015610345573d6000803e3d6000fd5b5050505061035285610183565b5050505050565b6000546001600160a01b031633146103b35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161016e565b6001600160a01b0381166104185760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161016e565b61042181610424565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561048657600080fd5b5035919050565b600080600080600060a086880312156104a557600080fd5b8535945060208601359350604086013560ff811681146104c457600080fd5b94979396509394606081013594506080013592915050565b6000602082840312156104ee57600080fd5b81356001600160a01b038116811461050557600080fd5b9392505050565b60006020828403121561051e57600080fd5b8151801515811461050557600080fdfea2646970667358221220fbdc6b560427f38fe5b318d0fb68c4d2a96fd9390f09a3e3646be918b18885a964736f6c63430008090033";
//# sourceMappingURL=CompMint__factory.js.map