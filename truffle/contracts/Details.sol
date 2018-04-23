pragma solidity ^0.4.17;
pragma experimental ABIEncoderV2;

contract Details {

    address public owner;

    struct User{
        string name;
        string _address;
        uint age;
        string[] files;
    }

    mapping(address => User) public users;


    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "You must be the owner of the account");
        _;

    }

    function returnOwner() view public returns (string){
        return users[owner].name;
    }

    function setName(string name, string _address, uint age, string hash) public onlyOwner returns (address) {
        users[owner].name = name;
        users[owner]._address = _address;
        users[owner].age = age;
        users[owner].files.push(hash);
        return owner;
    }
}