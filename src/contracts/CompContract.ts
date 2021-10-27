import IERC1155Artifact from "./abi/compmint/artifacts/@openzeppelin/contracts/token/ERC1155/IERC1155.sol/IERC1155.json";
import { IERC1155 } from "./abi/compmint/typechain";
import ERC1155Contract from "./polygon-standard/ERC1155Contract";

class CompContract extends ERC1155Contract<IERC1155>{

    constructor() {
        super("0xf8915acc665a62e5cfb3188c8fc1f86ff3984eb5", IERC1155Artifact.abi, []);
    }
}

export default new CompContract();
