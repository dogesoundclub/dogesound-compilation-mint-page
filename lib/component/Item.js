"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const CompContract_1 = __importDefault(require("../contracts/CompContract"));
const CompV2MintContract_1 = __importDefault(require("../contracts/CompV2MintContract"));
class Item extends skynode_1.DomNode {
    constructor(id, name, color, callback) {
        super("a.item");
        this.id = id;
        this.color = color;
        this.append((0, skynode_1.el)("img", { src: `/images/${id}@2x.png` }), (0, skynode_1.el)(".info", (0, skynode_1.el)("h2", "DOGESOUNDCLUB\nCOMPILATION Vol.2"), (0, skynode_1.el)("h3", name, { style: { color } }), this.progress = (0, skynode_1.el)(".progress", "mint progress")));
        this.onDom("click", () => callback());
        this.load();
    }
    async load() {
        const balance = await CompContract_1.default.balanceOf(CompV2MintContract_1.default.address, this.id);
        this.progress.append((0, skynode_1.el)(".bar", {
            style: {
                backgroundColor: this.color,
                width: `${(360 - balance.toNumber()) / 360 * 100}%`,
            },
        }));
    }
}
exports.default = Item;
//# sourceMappingURL=Item.js.map