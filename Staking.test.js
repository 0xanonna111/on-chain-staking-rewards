const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StakingRewards", function () {
  it("Should allow staking and distribute rewards", async function () {
    const [owner, user] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("RewardToken");
    const stakingToken = await Token.deploy();
    const rewardToken = await Token.deploy();

    const Staking = await ethers.getContractFactory("StakingRewards");
    const staking = await Staking.deploy(stakingToken.target, rewardToken.target);

    await rewardToken.transfer(staking.target, ethers.parseEther("1000"));
    await staking.notifyRewardAmount(ethers.parseEther("1000"), 3600);

    await stakingToken.transfer(user.address, ethers.parseEther("100"));
    await stakingToken.connect(user).approve(staking.target, ethers.parseEther("100"));
    await staking.connect(user).stake(ethers.parseEther("100"));

    expect(await staking.balanceOf(user.address)).to.equal(ethers.parseEther("100"));
  });
});
