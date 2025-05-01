import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Token } from "@/constants/tokens";
import { useWalletClient } from "wagmi";

// Uniswap V2 router on Base
const ROUTER = "0x327Df1E6de05895d2ab08513aaDD9313Fe505d86";

export function useEstimateOut(tokenIn: Token, tokenOut: Token, amountIn: string) {
  const { data: walletClient } = useWalletClient();
  const [estimatedOut, setEstimatedOut] = useState<string>("");

  useEffect(() => {
    if (!walletClient || !amountIn || isNaN(Number(amountIn))) return;

    const getEstimate = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(walletClient.transport);
        const router = new ethers.Contract(
          ROUTER,
          [
            "function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts)",
          ],
          provider
        );

        const path = [tokenIn.address, tokenOut.address];
        const parsedAmountIn = ethers.utils.parseUnits(amountIn, tokenIn.decimals);

        const amountsOut = await router.getAmountsOut(parsedAmountIn, path);
        const rawOut = amountsOut[1];

        const formatted = ethers.utils.formatUnits(rawOut, tokenOut.decimals);
        setEstimatedOut(parseFloat(formatted).toFixed(4));
      } catch (err) {
        console.error("Failed to estimate amountOut:", err);
        setEstimatedOut("");
      }
    };

    getEstimate();
  }, [walletClient, tokenIn, tokenOut, amountIn]);

  return estimatedOut;
}
