'use client';

import { useState } from "react";
import { useAccount, useWalletClient } from "wagmi";
import { ethers } from "ethers";
import { Token } from "@/constants/tokens";

// Uniswap V2 router on Base
const UNISWAP_V2_ROUTER = "0x327Df1E6de05895d2ab08513aaDD9313Fe505d86";

const ROUTER_ABI = [
  "function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)",
];

type Props = {
    tokenIn: Token;
    tokenOut: Token;
    amount: string;
    slippage: string;  
  };
  
  
export default function SwapButton({ tokenIn, tokenOut, amount }: Props) {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const [loading, setLoading] = useState(false);

  const swap = async () => {
    if (!walletClient || !address || !amount) return;

    try {
      setLoading(true);

      const provider = new ethers.providers.Web3Provider(walletClient.transport);
      const signer = provider.getSigner();

      const router = new ethers.Contract(UNISWAP_V2_ROUTER, ROUTER_ABI, signer);

      const path = [tokenIn.address, tokenOut.address];
      const deadline = Math.floor(Date.now() / 1000) + 60 * 10; // 10 mins from now

      const amountIn = ethers.utils.parseUnits(amount, tokenIn.decimals);

      const tx = await router.swapExactTokensForTokens(
        amountIn,
        0, // WARNING: real apps must use slippage tolerance
        path,
        address,
        deadline
      );

      await tx.wait();
      alert("Swap successful!");
    } catch (err) {
      console.error(err);
      alert("Swap failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={swap}
      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded disabled:opacity-50"
      disabled={!address || !amount || loading}
    >
      {loading ? "Swapping..." : "Swap"}
    </button>
  );
}
