/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ICompMintInterface extends ethers.utils.Interface {
  functions: {
    "mint(uint256)": FunctionFragment;
    "mintWithPermit(uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "mintWithPermit",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintWithPermit",
    data: BytesLike
  ): Result;

  events: {};
}

export class ICompMint extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ICompMintInterface;

  functions: {
    mint(id: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

    "mint(uint256)"(
      id: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    mintWithPermit(
      id: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mintWithPermit(uint256,uint256,uint8,bytes32,bytes32)"(
      id: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  mint(id: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  "mint(uint256)"(
    id: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  mintWithPermit(
    id: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mintWithPermit(uint256,uint256,uint8,bytes32,bytes32)"(
    id: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    mint(id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "mint(uint256)"(id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    mintWithPermit(
      id: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "mintWithPermit(uint256,uint256,uint8,bytes32,bytes32)"(
      id: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    mint(id: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "mint(uint256)"(
      id: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    mintWithPermit(
      id: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mintWithPermit(uint256,uint256,uint8,bytes32,bytes32)"(
      id: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    mint(
      id: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mint(uint256)"(
      id: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    mintWithPermit(
      id: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mintWithPermit(uint256,uint256,uint8,bytes32,bytes32)"(
      id: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
