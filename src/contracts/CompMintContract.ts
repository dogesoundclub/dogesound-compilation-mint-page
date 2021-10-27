import { BigNumberish } from "@ethersproject/bignumber";
import { utils } from "ethers";
import PolygonWallet from "../polygon/PolygonWallet";
import CompMintArtifact from "./abi/compmint/artifacts/contracts/CompMint.sol/CompMint.json";
import { CompMint } from "./abi/compmint/typechain";
import PolygonContract from "./PolygonContract";
import PolygonMixContract from "./PolygonMixContract";

class CompMintContract extends PolygonContract<CompMint> {

    constructor() {
        super("0x40EC6F393163B5eB5fD76AE10860644e0f11411c", CompMintArtifact.abi, []);
    }

    public async mint(id: BigNumberish) {

        const contract = await this.connectAndGetWalletContract();
        const owner = await PolygonWallet.loadAddress();
        if (contract !== undefined && owner !== undefined) {

            const price = utils.parseEther("10");

            if ((await PolygonMixContract.balanceOf(owner)).lt(price)) {
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

export default new CompMintContract();
