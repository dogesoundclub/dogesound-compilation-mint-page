import { DomNode, el } from "@hanul/skynode";
import CompContract from "../contracts/CompContract";
import CompMintContract from "../contracts/CompMintContract";

export default class Item extends DomNode {

    private progress: DomNode;

    constructor(private id: number, name: string, private color: string, callback: () => void) {
        super("a.item");
        this.append(
            el("img", { src: `/images/${id}@2x.png` }),
            el(".info",
                el("h2", "DOGESOUNDCLUB\nCOMPILATION Vol.1"),
                el("h3", name, { style: { color } }),
                this.progress = el(".progress", "mint progress"),
            ),
        );
        this.onDom("click", () => callback());
        this.load();
    }

    private async load() {
        const balance = await CompContract.balanceOf(CompMintContract.address, this.id);
        this.progress.append(el(".bar", {
            style: {
                backgroundColor: this.color,
                width: `${100 - balance.toNumber()}%`,
            },
        }));
    }
}
