// constants/tokens.ts

export type Token = {
    symbol: string;
    address: string;
    decimals: number;
    logoURI: string;
  };
  
  export const TOKENS: Token[] = [
    {
      symbol: "USDC",
      address: "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca", // Base USDC
      decimals: 6,
      logoURI: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=026",
    },
    {
      symbol: "DAI",
      address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
      decimals: 18,
      logoURI: "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=026",
    },
    {
      symbol: "WETH",
      address: "0x4200000000000000000000000000000000000006",
      decimals: 18,
      logoURI: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=026",
    },
  ];
  