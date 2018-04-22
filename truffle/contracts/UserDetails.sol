pragma solidity ^0.4.17;

contract Details {
    address public owner;

    function Details() public{
        owner = msg.sender;
    }
}