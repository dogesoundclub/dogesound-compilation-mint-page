"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const CommonUtil_1 = __importDefault(require("./CommonUtil"));
const Item_1 = __importDefault(require("./component/Item"));
const CompMintContract_1 = __importDefault(require("./contracts/CompMintContract"));
const PolygonWallet_1 = __importDefault(require("./polygon/PolygonWallet"));
(async () => {
    let selectedId;
    let disk;
    let walletAddress;
    skynode_1.BodyNode.append((0, skynode_1.el)(".layout", (0, skynode_1.el)(".items", new Item_1.default(0, "JADE KEY ver.", "#A93DA2", () => {
        disk.empty().append((0, skynode_1.el)("img", { src: "/images/LP1.png" }));
        selectedId = 0;
    }), new Item_1.default(1, "Graynym ver.", "#4D61F0", () => {
        disk.empty().append((0, skynode_1.el)("img", { src: "/images/LP2.png" }));
        selectedId = 1;
    }), new Item_1.default(2, "beat.k ver.", "#FCFC0B", () => {
        disk.empty().append((0, skynode_1.el)("img", { src: "/images/LP3.png" }));
        selectedId = 2;
    })), disk = (0, skynode_1.el)(".disk"), (0, skynode_1.el)(".mint-form", (0, skynode_1.el)("h4", "Wallet Address"), walletAddress = (0, skynode_1.el)(".wallet-address"), (0, skynode_1.el)("a.mint-button", "Mint", {
        click: () => {
            if (selectedId !== undefined) {
                CompMintContract_1.default.mint(selectedId);
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