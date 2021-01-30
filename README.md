# HEAT sdk and key/address instructions

Please find explained how to 

1. Generate a bip44 12 word seed
2. How to derive a HEAT private from this seed
3. How to create a public key from this private key
4. How to create a HEAT numeric address from the public key

## Instructions

Clone this repo to your local computer

Install dependencies

`npm install`

To run the tests do

`npm run test`

## Nodejs vs Browser

The sdk can be used both in a nodejs environment as well as in the browser.

For nodejs usage please use the following in package.json

```json
{
  "dependencies": {
    "heat-sdk-v2": "heatcrypto/heat-sdk-v2#master"
  }
}
```

For browser usage please use the following in package.json

```json
{
  "dependencies": {
    "heat-sdk": "heat-sdk"
  }
}
```