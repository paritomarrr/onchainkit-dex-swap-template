import { useEffect, useState, useCallback } from "react";
import { useAccount, useWalletClient } from "wagmi";
import { Token } from "@/constants/tokens";
import { ethers } from "ethers";

export function useTokenBalance(token: Token) {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const [balance, setBalance] = useState<string>("0");

  const fetchBalance = useCallback(async () => {
    if (!walletClient || !address) return;

    try {
      const provider = new ethers.providers.Web3Provider(walletClient.transport);
      const erc20 = new ethers.Contract(
        token.address,
        ["function balanceOf(address) view returns (uint)", "function decimals() view returns (uint8)"],
        provider
      );
      const rawBalance = await erc20.balanceOf(address);
      const decimals = await erc20.decimals();
      const formatted = ethers.utils.formatUnits(rawBalance, decimals);
      setBalance(parseFloat(formatted).toFixed(4));
    } catch (err) {
      console.error("Failed to fetch balance:", err);
      setBalance("0");
    }
  }, [walletClient, address, token]);

  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

  return { balance, refresh: fetchBalance };
}
