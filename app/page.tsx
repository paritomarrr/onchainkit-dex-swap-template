'use client';

import { Wallet } from "@coinbase/onchainkit/wallet";
import SwapForm from "@/components/SwapForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">Base DEX Swap</h1>
      <Wallet />
      <div className="mt-10 w-full max-w-md">
        <SwapForm />
      </div>
    </main>
  );
}
