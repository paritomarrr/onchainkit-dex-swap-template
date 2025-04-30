'use client';

import { useState } from "react";
import { useAccount, useWalletClient } from "wagmi";
import { Token } from "@/constants/tokens";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";

// Uniswap V2 router on Base mainnet
const UNISWAP_V2_ROUTER = "0x327Df1E6de05895d2ab08513aaDD9313Fe505d86";

type Props = {
  token: Token;
  amount: string;
  onSuccess?: () => void;
};

export default function ApproveButton({ token, amount, onSuccess }: Props) {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const [loading, setLoading] = useState(false);

  const approve = async () => {
    if (!walletClient || !address || !amount) return;

    try {
      setLoading(true);

      const provider = new Web3Provider(walletClient.transport as any);
      const signer = provider.getSigner();

      const erc20 = new ethers.Contract(
        token.address,
        [
          "function approve(address spender, uint256 amount) public returns (bool)",
          "function decimals() view returns (uint8)",
        ],
        signer
      );

      const decimals = await erc20.decimals();
      const parsedAmount = ethers.utils.parseUnits(amount, decimals);

      const tx = await erc20.approve(UNISWAP_V2_ROUTER, parsedAmount);
      await tx.wait();

      if (onSuccess) onSuccess();
      alert("Approved successfully");
    } catch (err) {
      console.error(err);
      alert("Approval failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={approve}
      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded disabled:opacity-50"
      disabled={!address || !amount || loading}
    >
      {loading ? "Approving..." : "Approve"}
    </button>
  );
}
