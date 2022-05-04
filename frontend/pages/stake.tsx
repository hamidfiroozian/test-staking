import { Card } from "../components/Card";

import { Fragment, useEffect, useState } from "react";
import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { BigNumberish } from "ethers";
import useStakingContract from "../hooks/useStakingContract";
import useTokenContract from "../hooks/useTokenContract";
import { stakeTokens,unstakeTokens } from "./../hooks/useStaking";
import { approve as approveToken } from "./../hooks/useWtoken";

export default function stake() {
  const { account } = useWeb3React<Web3Provider>();
  const [stakeAmount, setStakeAmount] = useState<BigNumberish>(0);
  const [option, setOption] = useState<BigNumberish>(0);
  const [unstakeId, setUnstakeId] = useState<BigNumberish>(0);
  const stakingContract = useStakingContract();
  const tokenContract = useTokenContract();

  useEffect(() => {}, [account]);

  const handleButtonClick = () => {
    stakeTokens(stakingContract, stakeAmount, option);
  };


  const handleApproveButtonClick = () => {
    approveToken(tokenContract, stakeAmount);
  };

  

  const handleunStakeButtonClick = ()=>{
    unstakeTokens(stakingContract,unstakeId);
  }
  return (
    <Fragment>
      <Card>
        <div className="flex-1">
          <input
            type="number"
            id="stake"
            className=" text-center p-1 block w-full h-10 border-2 border-black dark:bg-white"
            placeholder="stake amount"
            min={0}
            // max={parseBalance(data ?? 0)}
            onChange={(e) => {
              e.preventDefault();

              setStakeAmount(e.target.value as BigNumberish);
            }}
            required
          />

          <input
            type="number"
            id="stake"
            className=" text-center p-1 block w-full h-10 border-2 border-black dark:bg-white"
            placeholder="Option"
            min={0}
            // max={parseBalance(data ?? 0)}
            onChange={(e) => {
              e.preventDefault();

              setOption(e.target.value as BigNumberish);
            }}
            required
          />
          <button
            type="button"
            className="pa2  button-reset ba border-2 border-black  pr-1 pl-1"
            aria-label="Pick a date"
            onClick={handleApproveButtonClick}
          >
            Approve
          </button>
          
          <button
            type="button"
            className="pa2  button-reset ba border-2 border-black  pr-1 pl-1"
            aria-label="Pick a date"
            onClick={handleButtonClick}
          >
            Stake
          </button>

        </div>
      </Card>

      <Card>
        <div className="flex-1">
          <input
            type="number"
            id="stake"
            className=" text-center p-1 block w-full h-10 border-2 border-black dark:bg-white"
            placeholder="unstake"
            min={0}
            // max={parseBalance(data ?? 0)}
            onChange={(e) => {
              e.preventDefault();

              setUnstakeId(e.target.value as BigNumberish);
            }}
            required
          />

    
          <button
            type="button"
            className="pa2  button-reset ba border-2 border-black  pr-1 pl-1"
            aria-label="Pick a date"
            onClick={handleunStakeButtonClick}
          >
            unStake
          </button>
        </div>
      </Card>
      
    </Fragment>
  );
}
