import CompV2MintStarterArtifact from "./abi/compmint/artifacts/contracts/CompV2MintStarter.sol/CompV2MintStarter.json";
import { CompV2MintStarter } from "./abi/compmint/typechain";
import PolygonContract from "./PolygonContract";

class CompV2MintStarterContract extends PolygonContract<CompV2MintStarter> {

    constructor() {
        super("0x46f982F78b9Be822FCf0e9aCD6DB42bdc6D7760D", CompV2MintStarterArtifact.abi, []);
    }

    public async started(): Promise<boolean> {
        return await this.contract.started();
    }

    public async start() {
        const contract = await this.connectAndGetWalletContract();
        await contract?.start();
    }
}

export default new CompV2MintStarterContract();
