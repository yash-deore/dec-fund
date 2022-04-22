require("@nomiclabs/hardhat-waffle");

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // mumbai: {
    //   url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.REACT_APP_POLYGON_ALCHEMY_API_KEY}`,
    //   accounts: [`0x${process.env.REACT_APP_ACCOUNT_KEY}`],
    // },
  },
  solidity: {
    version: "0.4.17",
  },
  paths: {
    artifacts: "./src/artifacts",
  },
};
