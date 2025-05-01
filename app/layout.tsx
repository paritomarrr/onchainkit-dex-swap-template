import '@coinbase/onchainkit/styles.css';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Base DEX Swap',
  description: 'DEX using OnchainKit + Base',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Toaster position="top-right" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
