// deploy code will go here
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { abi, evm } = require("../charitySystem_infura/compile");

const provider = new Web3.providers.HttpProvider("http://localhost:8545");
// RUN ganache-cli in terminal
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
  console.log("Attempting to deploy from accounts", accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object })
    .send({ from: accounts[0], gas: "6721975" });

  console.log("Contract deployed to ", result.options.address);
  console.log(JSON.stringify(abi));
//   provider.engine.stop();
};

deploy();
