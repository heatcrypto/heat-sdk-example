const { generateMnemonic,
  mnemonicToPrivateKey,
  stringToHexString,
  getPublicKeyFromPrivateKey,
  getAccountIdFromPublicKey } = require('../index')

var assert = require('assert');
describe('Seed, private key, public key, address', function() {

  it('Generate unique mnemonic + privatekey + publickey + address', function() {
    const mnemonic = generateMnemonic()
    assert.equal(mnemonic.split(' ').length, 12)
    console.log('Mnemonic: ' + mnemonic)

    const privateKey = mnemonicToPrivateKey(mnemonic, /* 726683 */)
    assert.equal(privateKey.length, 64)
    console.log('Private key: ' + privateKey)

    const privateKeyHex = stringToHexString(privateKey)
    const publicKey = getPublicKeyFromPrivateKey(privateKeyHex)
    assert.equal(publicKey.length, 64)
    console.log('Public key: ' + publicKey)

    const address = getAccountIdFromPublicKey(publicKey)
    assert(address.length > 1)
    console.log('Address: ' + address)
  });

  it('does Harmony test', function() {
    const mnemonic = 'blame case champion horror airport absurd evoke vessel like rough gift slight';
    assert.equal(mnemonic.split(' ').length, 12)
    console.log('Mnemonic: ' + mnemonic)

    const privateKey = mnemonicToPrivateKey(mnemonic, 726683)
    assert.equal(privateKey.length, 64)
    assert.equal(privateKey, '9d3738fe074fcdfed1d3a1891340172ca670c3860af2666570fff0cb88497aed')
    console.log('Private key: ' + privateKey)

    const privateKeyHex = stringToHexString(privateKey)
    const publicKey = getPublicKeyFromPrivateKey(privateKeyHex)
    assert.equal(publicKey.length, 64)
    assert.equal(publicKey, 'b7d8a0212130ec519dea029d7a6fbbc180205a9cdb1c3743e6659d3258bd7a0f')
    console.log('Public key: ' + publicKey)

    const address = getAccountIdFromPublicKey(publicKey)
    assert(address.length > 1)
    assert.equal(address, '8448398312458207917')
    console.log('Address: ' + address)
  });  
});