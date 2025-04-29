'use client';

import { Wallet } from "@coinbase/onchainkit/wallet";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10 bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">Base DEX Swap</h1>
      <Wallet />
    </main>
  );
}
