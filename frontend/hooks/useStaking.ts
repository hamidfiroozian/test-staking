import { BigNumberish } from "@ethersproject/bignumber";
import { StakeContract } from "../typechain/StakeContract";
import { tokenAddress } from "../config";
import { ethers } from "ethers";

export const stakeTokens = async (
  mwStaking: StakeContract,
  stakeAmount: BigNumberish,
  option: BigNumberish
) => {
  try {
    stakeAmount = ethers.utils.parseUnits(
      stakeAmount.toString(),
      process.env.NEXT_PUBLIC_APP_UNIT
    );

    const req = await mwStaking.stakeTokens(tokenAddress, stakeAmount, option);
    const res = await req.wait();
  } catch (e) {}
};

export const unstakeTokens = async (
  mwStaking: StakeContract,
  _stakeId: BigNumberish
) => {
  try {
    const req = await mwStaking.unstakeTokens(tokenAddress);
    const res = await req.wait();
  } catch (e) {}
};
