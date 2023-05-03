# Utility Contract project with hardhat

### Install dependency
```shell
npm install
```

### Compile contract
```shell
npx hardhat compile
```

### Run Local Test Network
```shell
npx hardhat node
```

### Deploy contract
```shell
npx hardhat run --network localhost scripts/deploy.js
npx hardhat run --network localhost scripts/deployToken.js
``` 

Note down the contract addresses and edit the test.js contract address and tokens accordingly.

### Run test

```shell
cd test
node test.js
``` 