import { DomNode, el } from "@hanul/skynode";
import CompContract from "../contracts/CompContract";
import CompV2MintContract from "../contracts/CompV2MintContract";

export default class Item extends DomNode {

    private progress: DomNode;

    constructor(private id: number, name: string, private color: string, callback: () => void) {
        super("a.item");
        this.append(
            el("img", { src: `/images/${id}@2x.png` }),
            el(".info",
                el("h2", "DOGESOUNDCLUB\nCOMPILATION Vol.2"),
                el("h3", name, { style: { color } }),
                this.progress = el(".progress", "mint progress"),
            ),
        );
        this.onDom("click", () => callback());
        this.load();
    }

    private async load() {
        const balance = await CompContract.balanceOf(CompV2MintContract.address, this.id);
        this.progress.append(el(".bar", {
            style: {
                backgroundColor: this.color,
                width: `${100 - balance.toNumber()}%`,
            },
        }));
    }
}
