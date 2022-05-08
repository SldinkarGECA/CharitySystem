// contract test code will go here
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const { abi, evm } = require("../compile");

// const provider = ganache.provider();
const provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);

let accounts;
let charitySystem;
beforeEach(async () => {
  // get all accounts
  accounts = await web3.eth.getAccounts();
  // use one account to deploy
  charitySystem = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object })
    .send({ from: accounts[0], gas: "6000000" });
});

describe("Testing charitySystem contract", () => {
  it("Compiled charitySystem contract", () => {
    assert.ok(charitySystem.options.address);
  });
});

describe(" add donator", () => {
  it("Compiled charitySystem contract", () => {
    assert.ok(
      charitySystem.methods
        .create_donator("Suresh", "Hii")
        .send({ from: accounts[0], gas: "6721975" })
    );
  });
});
