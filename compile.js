// compile code will go here
const path = require("path");
const fs = require("fs");
const solc = require("solc");

const charitySystemPath = "./contracts/CharitySystem.sol";

source = fs.readFileSync(charitySystemPath, "utf-8");

const input = {
  language: "Solidity",
  sources: {
    "CharitySystem.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

var output = JSON.parse(solc.compile(JSON.stringify(input))).contracts;
// console.log(output);
module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  "CharitySystem.sol"
].CharitySystem;
