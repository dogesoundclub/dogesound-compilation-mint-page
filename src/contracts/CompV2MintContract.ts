import { BigNumberish } from "@ethersproject/bignumber";
import { utils } from "ethers";
import PolygonWallet from "../polygon/PolygonWallet";
import CompMintArtifact from "./abi/compmint/artifacts/contracts/CompMint.sol/CompMint.json";
import { CompMint } from "./abi/compmint/typechain";
import CompContract from "./CompContract";
import PolygonContract from "./PolygonContract";
import PolygonMixContract from "./PolygonMixContract";

class CompV2MintContract extends PolygonContract<CompMint> {

    constructor() {
        super("0x7fA7e3c45aa6AAB81FA4693f0c4eb5c80D971EDf", CompMintArtifact.abi, []);
    }

    public async mint(id: BigNumberish) {

        const contract = await this.connectAndGetWalletContract();
        const owner = await PolygonWallet.loadAddress();
        if (contract !== undefined && owner !== undefined) {

            const price = utils.parseEther("20");

            if ((await CompContract.balanceOf(this.address, id)).eq(0)) {
                alert("민팅이 종료되었습니다.");
            }

            else if ((await PolygonMixContract.balanceOf(owner)).lt(price)) {
                if (confirm("Polygon Mix가 부족합니다. Mix를 Polygon Mix로 스왑하시겠습니까?")) {
                    open("https://mix.chainhorizon.org/");
                }
            }

            else if ((await PolygonMixContract.allowance(owner, this.address)).lt(price)) {

                const deadline = Math.ceil(Date.now() / 1000) + 1000000;
                const signed = await PolygonWallet.signERC20Permit(

                    await PolygonMixContract.getName(),
                    "1",
                    PolygonMixContract.address,

                    this.address,
                    price,
                    await PolygonMixContract.getNonce(owner),
                    deadline,
                );

                await contract.mintWithPermit(id, deadline, signed.v, signed.r, signed.s);
            } else {
                await contract.mint(id);
            }
        }
    }
}

export default new CompV2MintContract();
