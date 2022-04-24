const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const provider = new HDWalletProvider(
  "grunt scan gravity boring cruise exhaust demise smile zone easily denial forest",
  "https://rinkeby.infura.io/v3/dd3d6cdd436d4a42892d62c808f35b61"
);

const web3 = new Web3(provider);

export default web3;
