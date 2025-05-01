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
      address: "0xd9AAEC86B65d86F6a7b5B1b0c42FFA531710b6CA",
      decimals: 6,
      logoURI: "../../public/tokens/usdc.png",
    },
    {
      symbol: "DAI",
      address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
      decimals: 18,
      logoURI: "../../public/tokens/dai.png",
    },
    {
      symbol: "WETH",
      address: "0x4200000000000000000000000000000000000006",
      decimals: 18,
      logoURI: "../../public/tokens/weth.png",
    },
  ];
  