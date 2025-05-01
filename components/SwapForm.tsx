'use client';

import { useState } from "react";
import { TOKENS, Token } from "@/constants/tokens";
import TokenSelector from "./TokenSelector";
import AmountInput from "./AmountInput";
import { useTokenBalance } from "@/hooks/useTokenBalance";
import { useEstimateOut } from "@/hooks/useEstimateOut";
import SwapButton from "./SwapButton";

export default function SwapForm() {
  const [tokenIn, setTokenIn] = useState<Token>(TOKENS[0]);
  const [tokenOut, setTokenOut] = useState<Token>(TOKENS[1]);
  const [amount, setAmount] = useState<string>("");

  const { balance: balanceIn, refresh: refreshIn } = useTokenBalance(tokenIn);
  const { balance: balanceOut, refresh: refreshOut } = useTokenBalance(tokenOut);
  const estimatedOut = useEstimateOut(tokenIn, tokenOut, amount);

  const flipTokens = () => {
    const temp = tokenIn;
    setTokenIn(tokenOut);
    setTokenOut(temp);
    setAmount("");
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#1a1b1f] p-6 shadow-2xl space-y-4">
      {/* Sell Section */}
      <div className="space-y-1">
        <p className="text-sm text-gray-400">Sell</p>
        <div className="flex items-center justify-between bg-[#0e0f12] rounded-xl px-4 py-3 border border-white/10">
          <AmountInput
            value={amount}
            onChange={setAmount}
            label=""
            maxAmount={balanceIn}
            onMaxClick={() => setAmount(balanceIn)}
          />
          <TokenSelector selected={tokenIn} onChange={setTokenIn} label={""} />
        </div>
        <p className="text-xs text-gray-500 text-right">
          Balance: {balanceIn} {tokenIn.symbol}
        </p>
      </div>

      {/* Flip Button */}
      <div className="flex justify-center">
        <button
          onClick={flipTokens}
          className="bg-[#222] hover:bg-[#333] border border-white/10 p-2 rounded-full"
        >
          ↓
        </button>
      </div>

      {/* Buy Section */}
      <div className="space-y-1">
        <p className="text-sm text-gray-400">Buy</p>
        <div className="flex items-center justify-between bg-[#0e0f12] rounded-xl px-4 py-3 border border-white/10">
          <div className="text-2xl text-white font-medium">{estimatedOut || "0.00"}</div>
          <TokenSelector selected={tokenOut} onChange={setTokenOut} label={""} />
        </div>
        <p className="text-xs text-gray-500 text-right">
          Balance: {balanceOut} {tokenOut.symbol}
        </p>
      </div>

      {/* Button */}
      <div className="pt-4">
        <SwapButton
          tokenIn={tokenIn}
          tokenOut={tokenOut}
          amount={amount}
          slippage="1"
          onSuccess={() => {
            refreshIn();
            refreshOut();
            setAmount("");
          }}
        />
      </div>
    </div>
  );
}
