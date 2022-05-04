// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
// const hre = require("hardhat");
import { ethers } from "hardhat";

async function main() {
  const transferAmountToStakeContract = ethers.utils.parseUnits("7", "ether");

  // We get the contract to deploy
  const WToken = await ethers.getContractFactory("WToken");
  const wToken = await WToken.deploy();

  await wToken.deployed();

  console.log("WToken deployed to:", wToken.address);

  const StakeContract = await ethers.getContractFactory("StakeContract");
  const stakeContract = await StakeContract.deploy(wToken.address);

  await stakeContract.deployed();

  await wToken.transfer(stakeContract.address, transferAmountToStakeContract);

  console.log("stakeContract deployed to:", stakeContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
