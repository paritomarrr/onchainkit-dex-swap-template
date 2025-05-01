'use client';

import { Wallet } from "@coinbase/onchainkit/wallet";
import SwapForm from "@/components/SwapForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0b0d] text-white flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Swap anytime,<br />anywhere.</h1>

      <div className="mb-6">
        <Wallet />
      </div>

      <SwapForm />
    </main>
  );
}
