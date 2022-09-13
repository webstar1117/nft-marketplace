require('dotenv').config();

const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
const privateKeys = process.env.PRIVATE_KEYS || "";

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" //match any network id
    },
    rinkeby: {
      networkCheckTimeout: 999999,
      provider: function() {
        return new HDWalletProvider(
          ['cb4e8f8caafe8aa47dbb17e772a2593faf43cd192c229c77b923fe57c2e80e55'], // array of private keys
          `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}` // Url to an Ethereum node
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 4
    },
    live: {
      network_id: 1,
      host: "127.0.0.1",
      port: 8546   // Different than the default below
    }
  },
  contracts_directory: './src/contracts',
  contracts_build_directory: './src/abis',

  // Configure your compilers
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      version: "^0.8.0" 
    }
  }
};