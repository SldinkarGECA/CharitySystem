const Web3 = require("web3");
window.ethereum.request({ method: "eth_requestAccounts" });

const web3 = new Web3(window.ethereum);
// const web3 = new Web3();
export default web3;
