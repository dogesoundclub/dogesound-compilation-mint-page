import PolygonMixArtifact from "./abi/pmix/artifacts/contracts/PolygonMix.sol/PolygonMix.json";
import { PolygonMix } from "./abi/pmix/typechain";
import ERC20Contract from "./polygon-standard/ERC20Contract";

class PolygonMixContract extends ERC20Contract<PolygonMix>{

    constructor() {
        super("0x5085a6879Af6767732c51CA0fc7422d41d9aAEf6", PolygonMixArtifact.abi, []);
    }
}

export default new PolygonMixContract();
