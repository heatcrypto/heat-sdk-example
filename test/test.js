const { generateMnemonic,
  mnemonicToHeatPrivateKey,
  getPublicKeyFromPrivateKey,
  getAccountIdFromPublicKey } = require('../index')

var assert = require('assert');
describe('Seed, private key, public key, address', function() {
  it('should work', function() {
    const mnemonic = generateMnemonic()
    assert.equal(mnemonic.split(' ').length, 12)
    console.log('Mnemonic: ' + mnemonic)

    const privateKey = mnemonicToHeatPrivateKey(mnemonic)
    assert.equal(privateKey.length, 64)
    console.log('Private key: ' + privateKey)

    const publicKey = getPublicKeyFromPrivateKey(privateKey)
    assert.equal(publicKey.length, 64)
    console.log('Public key: ' + publicKey)

    const address = getAccountIdFromPublicKey(publicKey)
    assert(address.length > 1)
    console.log('Address: ' + address)
  });
});