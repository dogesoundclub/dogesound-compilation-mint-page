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
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "ids",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "onERC1155BatchReceived",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "onERC1155Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
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
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
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
const _bytecode = "0x608060405234801561001057600080fd5b5060405161098038038061098083398101604081905261002f916100d1565b61003833610069565b600180546001600160a01b039384166001600160a01b0319918216179091556002805492909316911617905561010b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146100ce57600080fd5b50565b600080604083850312156100e457600080fd5b82516100ef816100b9565b6020840151909250610100816100b9565b809150509250929050565b6108668061011a6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a0712d6811610066578063a0712d6814610124578063bc197c8114610137578063d0248fb41461018b578063f23a6e611461019e578063f2fde38b146101d757600080fd5b806301ffc9a7146100a35780630a3c4d46146100cb57806347ccca02146100f6578063715018a6146101095780638da5cb5b14610113575b600080fd5b6100b66100b136600461057d565b6101ea565b60405190151581526020015b60405180910390f35b6002546100de906001600160a01b031681565b6040516001600160a01b0390911681526020016100c2565b6001546100de906001600160a01b031681565b610111610221565b005b6000546001600160a01b03166100de565b6101116101323660046105ae565b61028c565b610172610145366004610671565b7fbc197c819b3e337a6f9652dd10becd7eef83032af3b9d958d3d42f669414662198975050505050505050565b6040516001600160e01b031990911681526020016100c2565b61011161019936600461072c565b6103c3565b6101726101ac36600461077b565b7ff23a6e612e1ff4830e658fe43f4e3cb4a5f8170bd5d9e69fb5d7a7fa9e4fdf979695505050505050565b6101116101e53660046107f3565b610462565b60006001600160e01b03198216636cdb3d1360e11b148061021b57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6000546001600160a01b031633146102805760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b61028a600061052d565b565b60018054604051637921219560e11b815230600482015233602482015260448101849052606481019290925260a06084830152600060a48301526001600160a01b03169063f242432a9060c401600060405180830381600087803b1580156102f357600080fd5b505af1158015610307573d6000803e3d6000fd5b50506002546001600160a01b031691506323b872dd9050336103316000546001600160a01b031690565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152678ac7230489e800006044820152606401602060405180830381600087803b15801561038757600080fd5b505af115801561039b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103bf919061080e565b5050565b60025460405163d505accf60e01b8152336004820152306024820152678ac7230489e8000060448201526064810186905260ff8516608482015260a4810184905260c481018390526001600160a01b039091169063d505accf9060e401600060405180830381600087803b15801561043a57600080fd5b505af115801561044e573d6000803e3d6000fd5b5050505061045b8561028c565b5050505050565b6000546001600160a01b031633146104bc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610277565b6001600160a01b0381166105215760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610277565b61052a8161052d565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561058f57600080fd5b81356001600160e01b0319811681146105a757600080fd5b9392505050565b6000602082840312156105c057600080fd5b5035919050565b80356001600160a01b03811681146105de57600080fd5b919050565b60008083601f8401126105f557600080fd5b50813567ffffffffffffffff81111561060d57600080fd5b6020830191508360208260051b850101111561062857600080fd5b9250929050565b60008083601f84011261064157600080fd5b50813567ffffffffffffffff81111561065957600080fd5b60208301915083602082850101111561062857600080fd5b60008060008060008060008060a0898b03121561068d57600080fd5b610696896105c7565b97506106a460208a016105c7565b9650604089013567ffffffffffffffff808211156106c157600080fd5b6106cd8c838d016105e3565b909850965060608b01359150808211156106e657600080fd5b6106f28c838d016105e3565b909650945060808b013591508082111561070b57600080fd5b506107188b828c0161062f565b999c989b5096995094979396929594505050565b600080600080600060a0868803121561074457600080fd5b8535945060208601359350604086013560ff8116811461076357600080fd5b94979396509394606081013594506080013592915050565b60008060008060008060a0878903121561079457600080fd5b61079d876105c7565b95506107ab602088016105c7565b94506040870135935060608701359250608087013567ffffffffffffffff8111156107d557600080fd5b6107e189828a0161062f565b979a9699509497509295939492505050565b60006020828403121561080557600080fd5b6105a7826105c7565b60006020828403121561082057600080fd5b815180151581146105a757600080fdfea264697066735822122053b1d36aa1295a09c4e3d2477e8a20a51260b2490711a445ea0647c7f73673a464736f6c63430008090033";
//# sourceMappingURL=CompMint__factory.js.map