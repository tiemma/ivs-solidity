pragma solidity ^0.4.17;
pragma experimental ABIEncoderV2;

contract Details {

    address public owner;

    struct User{
        string  name;
        string _address;
        string  age;
        string email;
        string sex;
        string[] files;
    }

    mapping(address => User) public users;

    string email;
    string age;


    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "You must be the owner of the account");
        _;
    }

    function getEmail() constant returns (string){

        return users[owner].email;
    }

    function getAge() constant returns (string){
        return users[owner].age;
    }

    function setAddress(string _address) public onlyOwner returns (bool){
        users[owner]._address = _address;
        return true;
    }

    function setName(string name) public onlyOwner returns (bool){
        users[owner].name = name;
        return true;
    }

    function setAge(string age) public onlyOwner returns (bool){
        users[owner].age = age;
        return true;
    }

    function setEmail(string email) public onlyOwner returns (bool){
        users[owner].email = email;
        return true;
    }

    function setSex(string sex) public onlyOwner returns (bool){
        users[owner].sex = sex;
        return true;
    }

    function pushFiles(string hash) public onlyOwner returns (bool){
        users[owner].files.push(hash);
        return true;
    }


    function set(string name, string _address, string age, string email, string sex) public onlyOwner returns (bool) {
//        string[] results;

        //Set Methods
        setName(name);
        setAddress(_address);
        setAge(age);
        setEmail(email);
        setSex(sex);

        //Push inputs to results array
//        results.push(name);
//        results.push(_address);
//        results.push(age);
//        results.push(email);
//        results.push(sex);
//        results.push(users[owner].files);

        //return owner;
        return true;
    }
}