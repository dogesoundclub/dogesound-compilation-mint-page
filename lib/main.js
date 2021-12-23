"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const CommonUtil_1 = __importDefault(require("./CommonUtil"));
const Item_1 = __importDefault(require("./component/Item"));
const CompV2MintContract_1 = __importDefault(require("./contracts/CompV2MintContract"));
const PolygonWallet_1 = __importDefault(require("./polygon/PolygonWallet"));
(async () => {
    let selectedId;
    let disk;
    let bar;
    let walletAddress;
    skynode_1.BodyNode.append((0, skynode_1.el)(".layout", (0, skynode_1.el)(".items", new Item_1.default(3, "", "#A93DA2", () => {
        disk.empty().append((0, skynode_1.el)("img", { src: "/images/LP4.png" }));
        selectedId = 3;
        bar.style({
            left: 996,
            top: 35,
            transform: "rotate(30deg)",
        });
    })), disk = (0, skynode_1.el)(".disk"), bar = (0, skynode_1.el)(".bar-container", (0, skynode_1.el)("img.bar", { src: "/images/bar.png", height: "400" }), (0, skynode_1.el)("img.slot", { src: "/images/slot.png", height: "70" })), (0, skynode_1.el)(".mint-form", (0, skynode_1.el)("h4", "Wallet Address"), walletAddress = (0, skynode_1.el)(".wallet-address"), (0, skynode_1.el)("a.mint-button", "Mint", {
        click: () => {
            if (selectedId !== undefined) {
                CompV2MintContract_1.default.mint(selectedId);
            }
        },
    }))));
    if (window.innerWidth > 1280) {
        skynode_1.BodyNode.style({
            zoom: window.innerWidth / 1280,
        });
    }
    if (await PolygonWallet_1.default.connected() !== true) {
        await PolygonWallet_1.default.connect();
    }
    const address = await PolygonWallet_1.default.loadAddress();
    if (address !== undefined) {
        walletAddress.empty().appendText(CommonUtil_1.default.shortenAddress(address));
    }
})();
//# sourceMappingURL=main.js.map