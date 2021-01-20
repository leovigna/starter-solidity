const Example = artifacts.require('Example');

//async function (deployer, network, accounts) {}
module.exports = async function(deployer) {
    await deployer.deploy(Example);
    const example = await Example.deployed();
    const c = await example.sum(1, 2);
    console.debug(`1+2=${c}`);
} as Truffle.Migration;

// because of https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {};
