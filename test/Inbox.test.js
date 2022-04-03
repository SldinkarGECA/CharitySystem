// contract test code will go here
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const { interface, bytecode } = require("../compile");

const provider = ganache.provider();
const web3 = new Web3(provider);

let accounts;
let inbox;
beforeEach(async () => {
  // get all accounts
  accounts = await web3.eth.getAccounts();
  // use one account to deploy
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi Sandesh"] })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Testing Inbox contract", () => {
  it("deployed Inbox contract", () => {
    // console.log("Printing all the fetched accounts");
    // console.log(accounts);
    // console.log(inbox);
    // checking if contract deployed
    assert.ok(inbox.options.address);
  });

  it("Has a default message", async () => {
    const iniMsg = await inbox.methods.message().call();
    // console.log(iniMsg);
    assert.equal(iniMsg, "Hi Sandesh");
  });

  it("Message is getting updated", async () => {
    await inbox.methods
      .setMessage("Bye Sandesh")
      .send({ from: accounts[0], gas: "1000000" });
    const iniMsg = await inbox.methods.message().call();
    // console.log(iniMsg);
    assert.equal(iniMsg, "Bye Sandesh");
  });
});
