//SPDX-License-Identifier: MIT 
pragma solidity ^0.8.18;

interface ERC20Interface {
    function balanceOf(address account) external view returns (uint);
}

contract RetrieveTokenBalances{
    struct Balance{
        address token;
        uint256 balance;
    }

    function getBalances(address walletAddress, address[] calldata tokenAddresses) public view returns  (Balance[] memory){
        
        Balance[] memory balances = new Balance[](tokenAddresses.length);

        for(uint256 i=0; i<tokenAddresses.length; i++){
            uint balance = ERC20Interface(tokenAddresses[i]).balanceOf(walletAddress);
            balances[i] = Balance(tokenAddresses[i], balance);
        }

        return balances;

    }
}

