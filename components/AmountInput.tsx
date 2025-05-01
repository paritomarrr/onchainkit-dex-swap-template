type Props = {
    value: string;
    onChange: (val: string) => void;
    label: string;
    maxAmount?: string;
    onMaxClick?: () => void;
  };
  
  export default function AmountInput({ value, onChange, label, maxAmount, onMaxClick }: Props) {
    return (
      <div className="w-full bg-white/5 backdrop-blur rounded-xl border border-white/10 p-4 space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm text-gray-300">{label}</label>
          {maxAmount && onMaxClick && (
            <button
              type="button"
              onClick={onMaxClick}
              className="text-xs text-purple-400 hover:underline"
            >
              MAX
            </button>
          )}
        </div>
        <input
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-2xl font-semibold text-white placeholder-gray-500 outline-none"
          placeholder="0.0"
          min="0"
        />
      </div>
    );
  }
  