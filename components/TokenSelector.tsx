// components/TokenSelector.tsx

import { TOKENS, Token } from "@/constants/tokens";

type Props = {
  selected: Token;
  onChange: (token: Token) => void;
  label: string;
};

export default function TokenSelector({ selected, onChange, label }: Props) {
  return (
    <div className="mb-4">
      <label className="block text-sm mb-1">{label}</label>
      <select
        value={selected.address}
        onChange={(e) => {
          const token = TOKENS.find((t) => t.address === e.target.value);
          if (token) onChange(token);
        }}
        className="w-full p-2 bg-gray-800 rounded border border-gray-600 text-white"
      >
        {TOKENS.map((token) => (
          <option key={token.address} value={token.address}>
            {token.symbol}
          </option>
        ))}
      </select>
    </div>
  );
}
