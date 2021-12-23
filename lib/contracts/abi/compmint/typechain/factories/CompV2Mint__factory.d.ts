import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { CompV2Mint } from "../CompV2Mint";
export declare class CompV2Mint__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_nft: string, overrides?: Overrides): Promise<CompV2Mint>;
    getDeployTransaction(_nft: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): CompV2Mint;
    connect(signer: Signer): CompV2Mint__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CompV2Mint;
}
//# sourceMappingURL=CompV2Mint__factory.d.ts.map