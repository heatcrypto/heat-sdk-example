const { mnemonicToSeedSync, generateMnemonic, validateMnemonic } = require('bip39')
const { fromSeed, } = require('bip32')
const { getPublicKeyFromPrivateKey, getAccountIdFromPublicKey } = require('heat-sdk-v2/dist/crypto')

/**
 * Notice how we use 286 here for private key derivation.
 * For Harmony I suggest this should become a unique value of your own,
 * as you can see Heat has 286 registered here https://github.com/satoshilabs/slips/blob/master/slip-0044.md
 * See that document for options to register your own bip44 coin code.
 */
function mnemonicToHeatPrivateKey(mnemonic) {
  if (!validateMnemonic(mnemonic))
    throw new Error('Invalid mnemonic')
  const seed = mnemonicToSeedSync(mnemonic)
  const root = fromSeed(seed)
  const node = root.derivePath("m/44'/286'/0'/0/0")
  return node.privateKey.toString('hex')
}

module.exports = {
  generateMnemonic,
  mnemonicToHeatPrivateKey,
  getPublicKeyFromPrivateKey,
  getAccountIdFromPublicKey
}