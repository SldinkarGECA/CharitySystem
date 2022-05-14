const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const provider = new HDWalletProvider(
  "second license daughter nasty west life mandate laugh neutral mother assume case",
  "wss://rinkeby.infura.io/ws/v3/51b2c9997e7a407a98ed41bd6ff16ba8"
);

// const provider = new Web3.providers.HttpProvider("http://localhost:8545");

const web3 = new Web3(provider);

export default web3;
