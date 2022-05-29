// deploy code will go here
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const {abi, evm} = require("./compile");


const provider = new HDWalletProvider(
    "grunt scan gravity boring cruise exhaust demise smile zone easily denial forest",
    // "second license daughter nasty west life mandate laugh neutral mother assume case",
    "wss://rinkeby.infura.io/ws/v3/51b2c9997e7a407a98ed41bd6ff16ba8"
);


const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    console.log("Attempting to deploy from accounts", accounts[0]);

    const result = await new web3.eth.Contract(abi)
        .deploy({data: evm.bytecode.object})
        .send({from: accounts[0], gas: "10000000"});

    console.log("Contract deployed to ", result.options.address);
    console.log(JSON.stringify(abi));
    provider.engine.stop();
};

deploy();
