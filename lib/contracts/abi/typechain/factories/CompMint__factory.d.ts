import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { CompMint } from "../CompMint";
export declare class CompMint__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_nft: string, _pmix: string, overrides?: Overrides): Promise<CompMint>;
    getDeployTransaction(_nft: string, _pmix: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): CompMint;
    connect(signer: Signer): CompMint__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CompMint;
}
//# sourceMappingURL=CompMint__factory.d.ts.map