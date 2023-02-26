import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",

  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/7KPCNan56WStQo-fHWWtuuX9qIXxRGio",
      }
    }
  },
  etherscan:{
    apiKey: "B2P64WZUS5W5EQV93XWUDH9RYA9UMA2B1Knpc",
  }
};

export default config;
