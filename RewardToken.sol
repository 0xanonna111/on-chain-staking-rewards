// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract RewardToken is ERC20 {
    constructor() ERC20("Reward Token", "RWD") {
        _mint(msg.sender, 1000000 * 10**18);
    }
}
