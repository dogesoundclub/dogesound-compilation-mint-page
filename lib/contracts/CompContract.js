"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IERC1155_json_1 = __importDefault(require("./abi/compmint/artifacts/@openzeppelin/contracts/token/ERC1155/IERC1155.sol/IERC1155.json"));
const ERC1155Contract_1 = __importDefault(require("./polygon-standard/ERC1155Contract"));
class CompContract extends ERC1155Contract_1.default {
    constructor() {
        super("0xf8915acc665a62e5cfb3188c8fc1f86ff3984eb5", IERC1155_json_1.default.abi, []);
    }
}
exports.default = new CompContract();
//# sourceMappingURL=CompContract.js.map