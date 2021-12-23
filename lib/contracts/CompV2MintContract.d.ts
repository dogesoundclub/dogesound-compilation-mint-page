import { BigNumberish } from "@ethersproject/bignumber";
import { CompV2Mint } from "./abi/compmint/typechain";
import PolygonContract from "./PolygonContract";
declare class CompV2MintContract extends PolygonContract<CompV2Mint> {
    constructor();
    mint(id: BigNumberish): Promise<void>;
}
declare const _default: CompV2MintContract;
export default _default;
//# sourceMappingURL=CompV2MintContract.d.ts.map