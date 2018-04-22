pragma solidity ^0.4.17;
pragma experimental ABIEncoderV2;

contract Details {

    address public owner;

    struct User{
        bytes32 name;
        bytes32 _address;
        uint age;
    }

    mapping(address => User) public users;


    constructor() public {
        owner = msg.sender;
    }

    function returnOwner() view public returns (bytes32){
        return users[owner].name;
    }

    function setName(bytes32 name, ) public returns (bool){
        require(msg.sender == owner, "You must be the owner of the account");
        users[owner].name = name;
        return true;
    }
}