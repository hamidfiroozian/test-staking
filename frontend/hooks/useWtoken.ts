import { BigNumberish } from "ethers";
import { tokenAddress } from "../config";
import { stakingAddress } from "../config";

import type { WToken } from "../typechain/WToken";

import { ethers } from "ethers";

export const approve = async (
  contract: WToken,
  approveAmount: BigNumberish
) => {
  try {
    const amount = ethers.utils.parseUnits(approveAmount.toString(), "ether");

    const req = await contract.approve(stakingAddress, amount);
    const res = await req.wait();
    return res;
  } catch (e) {}
};
export const balanceOf = async (contract: WToken, account: string) => {
  try {
    const req = await contract.balanceOf(account);
    const amountInUnit = ethers.utils.formatUnits(
      req,
      process.env.REACT_APP_UNIT
    );
    return amountInUnit;
  } catch (e) {}
};
