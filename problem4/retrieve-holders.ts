import { ethers } from "ethers";

const SWTH_ADDRESS = '0xc0ecb8499d8da2771abcbf4091db7f65158f1468';
const addresses = [
    "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"
];

async function main(){
    const provider = new ethers.JsonRpcProvider("https://bsc-dataseed1.binance.org/");
    const swth_contract = new ethers.Contract(SWTH_ADDRESS, [
        "function balanceOf(address) external view returns (uint256)",
        "function decimals() external view returns (uint8)"
    ], provider);

    for(const address of addresses){
        const bal = await swth_contract.balanceOf(address);
        const decimals = await swth_contract.decimals();
        let formatted_bal = ethers.formatUnits(bal, decimals);
        formatted_bal = parseFloat(formatted_bal).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 18});
        console.log(`${address} ${formatted_bal}`);
    }
}

main();