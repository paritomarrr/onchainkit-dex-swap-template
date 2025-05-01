import { TOKENS, Token } from "@/constants/tokens";

type Props = {
  selected: Token;
  onChange: (token: Token) => void;
};

export default function TokenSelector({ selected, onChange }: Props) {
  return (
    <div className="relative">
      <select
        value={selected.address}
        onChange={(e) => {
          const token = TOKENS.find((t) => t.address === e.target.value);
          if (token) onChange(token);
        }}
        className="appearance-none bg-[#2c2d33] text-white text-sm font-medium rounded-xl pl-10 pr-6 py-2 border border-white/10 focus:outline-none w-32 cursor-pointer"
      >
        {TOKENS.map((token) => (
          <option key={token.address} value={token.address}>
            {token.symbol}
          </option>
        ))}
      </select>

      {/* Token logo */}
      <img
        src={selected.logoURI}
        alt={selected.symbol}
        className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 rounded-full"
      />

      {/* Down arrow */}
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
        ▼
      </span>
    </div>
  );
}
