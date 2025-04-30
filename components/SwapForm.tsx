'use client';

import { useState } from "react";
import TokenSelector from "./TokenSelector";
import AmountInput from "./AmountInput";
import { TOKENS, Token } from "@/constants/tokens";
import ApproveButton from "./ApproveButton";
import SwapButton from "./SwapButton";
import SlippageInput from "./SlippageInput";

export default function SwapForm() {
  const [tokenIn, setTokenIn] = useState<Token>(TOKENS[0]);
  const [tokenOut, setTokenOut] = useState<Token>(TOKENS[1]);
  const [amount, setAmount] = useState<string>("");
  const [slippage, setSlippage] = useState<string>("1"); // default 1%

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-4 text-center">Swap Tokens</h2>

      <TokenSelector
        label="From"
        selected={tokenIn}
        onChange={(token) => setTokenIn(token)}
      />

      <TokenSelector
        label="To"
        selected={tokenOut}
        onChange={(token) => setTokenOut(token)}
      />

      <AmountInput
        label={`Amount (${tokenIn.symbol})`}
        value={amount}
        onChange={setAmount}
      />

      {/* Slippage input separately */}
      <SlippageInput value={slippage} onChange={setSlippage} />

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <ApproveButton token={tokenIn} amount={amount} />
        <SwapButton tokenIn={tokenIn} tokenOut={tokenOut} amount={amount} slippage={slippage} />
      </div>
    </div>
  );
}
