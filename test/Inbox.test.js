// contract test code will go here
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const { abi, evm } = require("../compile");

const provider = ganache.provider();
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
