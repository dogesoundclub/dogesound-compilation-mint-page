import { BodyNode, DomNode, el } from "@hanul/skynode";
import CommonUtil from "./CommonUtil";
import Item from "./component/Item";
import CompMintContract from "./contracts/CompMintContract";
import PolygonWallet from "./polygon/PolygonWallet";

(async () => {

    let selectedId: number | undefined;

    let disk: DomNode;
    let bar: DomNode;
    let walletAddress;

    BodyNode.append(el(".layout",
        el(".items",
            new Item(0, "JADE KEY ver.", "#A93DA2", () => {
                disk.empty().append(el("img", { src: "/images/LP1.png" }));
                selectedId = 0;
                bar.style({
                    left: 996,
                    top: 35,
                    transform: "rotate(30deg)",
                });
            }),
            new Item(1, "beat.k ver.", "#4D61F0", () => {
                disk.empty().append(el("img", { src: "/images/LP2.png" }));
                selectedId = 1;
            }),
            new Item(2, "Graynym ver.", "#FCFC0B", () => {
                disk.empty().append(el("img", { src: "/images/LP3.png" }));
                selectedId = 2;
            }),
        ),
        disk = el(".disk"),
        bar = el(".bar-container",
            el("img.bar", { src: "/images/bar.png", height: "400" }),
            el("img.slot", { src: "/images/slot.png", height: "70" }),
        ),
        el(".mint-form",
            el("h4", "Wallet Address"),
            walletAddress = el(".wallet-address"),
            el("a.mint-button", "Mint", {
                click: () => {
                    if (selectedId !== undefined) {
                        CompMintContract.mint(selectedId);
                    }
                },
            }),
        ),
    ));

    if (window.innerWidth > 1280) {
        BodyNode.style({
            zoom: window.innerWidth / 1280,
        });
    }

    if (await PolygonWallet.connected() !== true) {
        await PolygonWallet.connect();
    }
    const address = await PolygonWallet.loadAddress();
    if (address !== undefined) {
        walletAddress.empty().appendText(CommonUtil.shortenAddress(address));
    }
})();