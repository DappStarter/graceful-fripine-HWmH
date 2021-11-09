require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remain soft harvest local fortune slam'; 
let testAccounts = [
"0x86cd9f3140fe39bddf5e7660cbd6f20b93b6d2c37b9d82e558e511ad2eb53a72",
"0x8483025ae46fd23770a73f9722b878eb73aa1697ac855d1990d46cef3823c12f",
"0xd393029ee07231c88f2a95f9eaabd4475a448c81af0868a694ab3ea69fcbc0dd",
"0x99194d5e2fe4181aa3c039bc6fe8c62bc2bae0b1101bbd6d6f27dd2bcd6eac97",
"0x12e9424b6f9f1ea2db10ba438b874ce4deb1e56b06b02dc5d343e7796f6cfcb8",
"0x04052126ef14712cba683df41c7b66ff53784f34a7e5ca4af183b51d30dc1206",
"0x719d0862dedb3677781feb1a16b360ad4726aeae38b98ab50aa4dab20e611f55",
"0xd94f25b0eaa83ab0a7ed90f85ca7128c3f9c53de985fc4db6f3fac71295d44c3",
"0xa1f2c59f4c9af3983394bed5f2dc3b0636cae7c546c78f5f0538fce13c57cdb2",
"0x8844237e593aa2f26f38142b5b76c54d844f2e61500b0bedf999b1849286fa56"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

