let Details = artifacts.require('./Details.sol');

module.exports = function(deployer, network, accounts) {

    console.log("Deploying to \n Network: " + network + " \n Account: " + accounts);

    deployer.deploy(Details);

};
