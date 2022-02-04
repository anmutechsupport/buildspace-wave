// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0; // compiler version should match hardhat config

import "hardhat/console.sol";

contract WavePortal { 
    uint256 totalWaves; // variable types are defined even before constructor -> this is a state variable which is stored permanently in contract storage

    constructor() { // runs on initialization of contract
        console.log("Yo yo, I am a contract and I am smart");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("Total waves: %s", totalWaves);
        return totalWaves;
    }
}