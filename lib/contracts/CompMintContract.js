"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const PolygonWallet_1 = __importDefault(require("../polygon/PolygonWallet"));
const CompMint_json_1 = __importDefault(require("./abi/compmint/artifacts/contracts/CompMint.sol/CompMint.json"));
const PolygonContract_1 = __importDefault(require("./PolygonContract"));
const PolygonMixContract_1 = __importDefault(require("./PolygonMixContract"));
class CompMintContract extends PolygonContract_1.default {
    constructor() {
        super("0x40EC6F393163B5eB5fD76AE10860644e0f11411c", CompMint_json_1.default.abi, []);
    }
    async mint(id) {
        const contract = await this.connectAndGetWalletContract();
        const owner = await PolygonWallet_1.default.loadAddress();
        if (contract !== undefined && owner !== undefined) {
            const price = ethers_1.utils.parseEther("10");
            if ((await PolygonMixContract_1.default.balanceOf(owner)).lt(price)) {
                if (confirm("Polygon Mix가 부족합니다. Mix를 Polygon Mix로 스왑하시겠습니까?")) {
                    open("https://mix.chainhorizon.org/");
                }
            }
            else if ((await PolygonMixContract_1.default.allowance(owner, this.address)).lt(price)) {
                const deadline = Math.ceil(Date.now() / 1000) + 1000000;
                const signed = await PolygonWallet_1.default.signERC20Permit(await PolygonMixContract_1.default.getName(), "1", PolygonMixContract_1.default.address, this.address, price, await PolygonMixContract_1.default.getNonce(owner), deadline);
                await contract.mintWithPermit(id, deadline, signed.v, signed.r, signed.s);
            }
            else {
                await contract.mint(id);
            }
        }
    }
}
exports.default = new CompMintContract();
//# sourceMappingURL=CompMintContract.js.map