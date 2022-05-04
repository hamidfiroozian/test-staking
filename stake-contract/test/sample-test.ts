import { expect } from "chai";
import { ethers } from "hardhat";

describe("Staking", function () {
  const unStakeTimeInDays = 30;

  it("Should Test", async function () {
    let unStakeTime = Math.round(new Date().getTime() / 1000);
    unStakeTime = unStakeTime + 86400 * unStakeTimeInDays;
    unStakeTime = unStakeTime * 1000;

    const [owner, user1] = await ethers.getSigners();

    const transferAmountToStakeContract = ethers.utils.parseUnits("7", "ether");
    const transferAmount = ethers.utils.parseUnits("4", "ether");
    const stakeAmount = ethers.utils.parseUnits("0.00000001", "ether");
    const approveAmount = ethers.utils.parseUnits("1", "ether");

    // We get the contract to deploy
    const WToken = await ethers.getContractFactory("WToken");
    const wToken = await WToken.deploy();

    const token = await wToken.deployed();

    console.log("WToken deployed to:", wToken.address);

    const StakeContract = await ethers.getContractFactory("StakeContract");
    const stakeContract = await StakeContract.deploy(wToken.address);
    await stakeContract.deployed();

    await token.transfer(user1.address, transferAmount);
    await token.transfer(stakeContract.address, transferAmountToStakeContract);
    const b = await token.balanceOf(user1.address);
    console.log("balanceOf  user1:", b);

    console.log("stakeContract deployed to:", stakeContract.address);
    await token.connect(user1).approve(stakeContract.address, approveAmount);
    const allowance = await token
      .connect(user1)
      .allowance(user1.address, stakeContract.address);
    console.log("allowance user1 token is", allowance);

    const stake = await stakeContract
      .connect(user1)
      .stakeTokens(wToken.address, stakeAmount, 1);
    const res = await stake.wait();

    const balanceAftrStake = await token.balanceOf(user1.address);

    console.log("balanceAftrStake:", balanceAftrStake);

    await ethers.provider.send("evm_increaseTime", [unStakeTime]);
    await ethers.provider.send("evm_mine", []);
    const unstake = await stakeContract.connect(user1).unstakeTokens(0);
    const un = await unstake.wait();

    const balanceAftrunStake = await token.balanceOf(user1.address);

    console.log("balanceAftrunStake:", balanceAftrunStake);
  });
});
