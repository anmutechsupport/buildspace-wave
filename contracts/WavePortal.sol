// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    constructor () {
        console.log("wasssguuud"); //runs on init
    }

    function wave() public { // Public functions be used externally and internally
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) { // Promise not to modify the state.
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}