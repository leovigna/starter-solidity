// const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 8545,
            network_id: '*', // eslint-disable-line @typescript-eslint/camelcase
            gas: 8500000, // pump pump the gas
            websockets: true,
        },
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: '0.6.12', // Fetch exact version from solc-bin (default: truffle's version)
            settings: {
                // See the solidity docs for advice about optimization and evmVersion
                parser: 'solcjs',
                optimizer: {
                    enabled: true,
                    runs: 200,
                },
                evmVersion: 'istanbul', //chainId()
            },
        },
    },
};
