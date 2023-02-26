import {ethers} from "hardhat";

// import{ Web3 } from "web3"
const Web3 = require("web3");

const web3 = new Web3(new Web3.providers.HttpProvider("https://eth-mainnet.g.alchemy.com/v2/7KPCNan56WStQo-fHWWtuuX9qIXxRGio"))



// var Web3 = require('web3')
async function main() {

    const contents = await web3.eth.getStorageAt("0xdAC17F958D2ee523a2206206994597C13D831ec7", 4);
    console.log(contents);
    console.log(await web3.utils.toString(contents))
    

    
    const BinanceStorage = await web3.eth.getStorageAt("0xB8c77482e45F1F44dE1745F52C74426C631bDD52", 2);
    console.log(BinanceStorage);
    console.log(await web3.utils.toDecimal(BinanceStorage))
    
    const USDCStorage = await web3.eth.getStorageAt("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", 2);
    console.log(USDCStorage);
    console.log(await web3.utils.toString(USDCStorage))

    const OkbStorage = await web3.eth.getStorageAt("0x75231F58b43240C9718Dd58B4967c5114342a86c", 0);
    console.log(OkbStorage);
    console.log(await web3.utils.toString(OkbStorage))

    const matic = await web3.eth.getStorageAt("0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0", 6);
    console.log(matic);
    console.log(await web3.utils.toAscii(matic))

   

}main().catch((error)=>{
    console.error(error);
    process.exitCode=1;
})