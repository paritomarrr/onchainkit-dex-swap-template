import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Base DEX Swap</title>
        <meta name="description" content="DEX Swap on Base using OnchainKit" />
      </Head>

      <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Base DEX Swap</h1>
        <p className="text-gray-400">Coming soon...</p>
      </main>
    </>
  );
}