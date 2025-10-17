//SPDX-License-Identifier: MIT
pragma solidity 0.8.28;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract Victor is ERC20 {
    uint constant initialSupply = 1000 * (10 ** 18);
    constructor() ERC20('Victor', 'VKT') {
        _mint(msg.sender, initialSupply);
    }
}