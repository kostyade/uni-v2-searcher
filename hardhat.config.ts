import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import dotenv from "dotenv";
dotenv.config();

const RPC = `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`;

const config: HardhatUserConfig = {
  solidity: { version: "0.7.6" },
  networks: {
    hardhat: {
      // loggingEnabled: true,
      chainId: 1,
      forking: {
        url: RPC,
        blockNumber: 16775792,
      },
      accounts: {
        accountsBalance: "1000000000000000000000000", // 1 mil ether
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
};

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = config;
