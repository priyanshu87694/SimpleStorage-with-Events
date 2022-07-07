// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract SimpleStorage {
    uint256 number;

    event Stored (
        uint256 indexed oldNumber,
        uint256 indexed newNumber,
        uint256 addedNumber,
        address sender
    );

    function store (uint256 _number) public {
        emit Stored (
            number,
            _number,
            number + _number,
            msg.sender
        );
        number = _number;
    }

    function getNumber () public view returns (uint256) {
        return number;
    }
}