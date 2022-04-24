// deploy code will go here
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { abi, evm } = require("../charitySystem_infura/compile");

const provider = new HDWalletProvider(
  "grunt scan gravity boring cruise exhaust demise smile zone easily denial forest",
  "https://rinkeby.infura.io/v3/dd3d6cdd436d4a42892d62c808f35b61"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
  console.log("Attempting to deploy from accounts", accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object })
    .send({ from: accounts[0], gas: "10000000" });

  console.log("Contract deployed to ", result.options.address);
  console.log(JSON.stringify(abi));
  provider.engine.stop();
};

deploy();
