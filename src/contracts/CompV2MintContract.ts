import { BigNumberish } from "@ethersproject/bignumber";
import { utils } from "ethers";
import PolygonNetworkProvider from "../polygon/PolygonNetworkProvider";
import PolygonWallet from "../polygon/PolygonWallet";
import CompV2MintArtifact from "./abi/compmint/artifacts/contracts/CompV2Mint.sol/CompV2Mint.json";
import { CompV2Mint } from "./abi/compmint/typechain";
import CompContract from "./CompContract";
import PolygonContract from "./PolygonContract";

class CompV2MintContract extends PolygonContract<CompV2Mint> {

    constructor() {
        super("0x49749fb6D2293ef9c0C638cD1C5eF54A70990b6A", CompV2MintArtifact.abi, []);
    }

    public async mint(id: BigNumberish) {

        const contract = await this.connectAndGetWalletContract();
        const owner = await PolygonWallet.loadAddress();
        if (contract !== undefined && owner !== undefined) {

            const price = utils.parseEther("20");

            if ((await CompContract.balanceOf(this.address, id)).eq(0)) {
                alert("민팅이 종료되었습니다.");
            } else if ((await PolygonNetworkProvider.getBalance(owner)).lt(price)) {
                alert("Polygon이 부족합니다");
            } else {
                await contract.mint(id, { value: price });
            }
        }
    }
}

export default new CompV2MintContract();
