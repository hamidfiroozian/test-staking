import staking from "../artifacts/contracts/StakeContract.sol/StakeContract.json";
import { stakingAddress } from "../config";
import type { StakeContract } from "../typechain/StakeContract";
import useContract from "./useContract";

export default function useStakingContract() {
  return useContract<StakeContract>(stakingAddress, staking.abi);
}
