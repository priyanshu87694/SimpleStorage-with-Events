# SimpleStorage with events

## Introduction
This contract stores a `uint256` and `emit` an event when `store()` function is executed, it adds the provied values into the logs which is not accessible to the smart contract so ends up saving gas and being efficient.

## Getting Started

Clone this directory
```
yarn
```

## Usage

Deploy *smart contract*
```
yarn hardhat run scripts/deploy.js
```

## Conclusion
The initial value in `number` will by defaut be 0 and we store 1 in it, then we log the `oldNumber` which will 0, `nuwNumber` which will be 1, `addedNumber` which will be 1 (`0 + 1`), `sender` which will be sender's address.


## Reference
[Chainlink](https://blog.chain.link/events-and-logging-in-solidity/)