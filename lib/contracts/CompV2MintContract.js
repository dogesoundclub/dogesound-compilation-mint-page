"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const PolygonNetworkProvider_1 = __importDefault(require("../polygon/PolygonNetworkProvider"));
const PolygonWallet_1 = __importDefault(require("../polygon/PolygonWallet"));
const CompV2Mint_json_1 = __importDefault(require("./abi/compmint/artifacts/contracts/CompV2Mint.sol/CompV2Mint.json"));
const CompContract_1 = __importDefault(require("./CompContract"));
const PolygonContract_1 = __importDefault(require("./PolygonContract"));
class CompV2MintContract extends PolygonContract_1.default {
    constructor() {
        super("0x49749fb6D2293ef9c0C638cD1C5eF54A70990b6A", CompV2Mint_json_1.default.abi, []);
    }
    async mint(id) {
        const contract = await this.connectAndGetWalletContract();
        const owner = await PolygonWallet_1.default.loadAddress();
        if (contract !== undefined && owner !== undefined) {
            const price = ethers_1.utils.parseEther("20");
            if ((await CompContract_1.default.balanceOf(this.address, id)).eq(0)) {
                alert("민팅이 종료되었습니다.");
            }
            else if ((await PolygonNetworkProvider_1.default.getBalance(owner)).lt(price)) {
                alert("Polygon이 부족합니다");
            }
            else {
                await contract.mint(id, { value: price });
            }
        }
    }
}
exports.default = new CompV2MintContract();
//# sourceMappingURL=CompV2MintContract.js.map