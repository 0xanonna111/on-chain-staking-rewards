# On-Chain Staking Rewards

A secure and efficient staking mechanism based on the industry-standard reward distribution algorithm. This repository is ideal for DeFi projects looking to incentivize liquidity providers or token holders.

## Features
- **Proportional Rewards**: Rewards are distributed based on the percentage of the total pool held by each user.
- **Time-Weighted**: Uses a "Reward Per Token" calculation to ensure fairness regardless of when a user joins or leaves the pool.
- **Gas Efficient**: Updates state only when necessary using a modified `updateReward` modifier.
- **Flat Structure**: All contracts and scripts are in the root for easy access.



## Getting Started
1. Deploy your Staking Token and Reward Token.
2. Deploy `StakingRewards.sol` with the addresses of both tokens.
3. Fund the contract with Reward Tokens and call `notifyRewardAmount`.

## License
MIT
