const { ethers } = require("ethers");
const { abi } = require("../artifacts/contracts/RetrieveTokenBalances.sol/RetrieveTokenBalances.json");

const PROXY_TOKEN_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";   // your contract address
const ABI = abi // your contract ABI

const ADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
 '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'
];

const providerUrl = 'http://localhost:8545';

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = new ethers.providers.JsonRpcProvider(providerUrl);
// const provider = ethers.providers.getDefaultProvider();

const test = async () => {
	const contract = new ethers.Contract(PROXY_TOKEN_ADDRESS, ABI, provider);

    const balances = await contract.getBalances(ADDRESS, TOKENS);
	let result = [];
	balances.map(([token, bal]) => {
		result.push({
			token: token,
			balance: bal.toString()
		});
    });
	
	return result;
};

test().then(console.log);