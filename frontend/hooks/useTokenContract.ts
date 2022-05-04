import token from "../artifacts/contracts/WToken.sol/WToken.json";
import { tokenAddress } from "../config";
import type { WToken } from "../typechain/WToken";
import useContract from "./useContract";

export default function useTokenContract() {
  return useContract<WToken>(tokenAddress, token.abi);
}
