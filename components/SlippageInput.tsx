type Props = {
    value: string;
    onChange: (val: string) => void;
  };
  
  export default function SlippageInput({ value, onChange }: Props) {
    return (
      <div className="mb-4">
        <label className="block text-sm mb-1">Slippage Tolerance (%)</label>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded border border-gray-600 text-white"
          placeholder="1"
          min="0"
          step="0.1"
        />
      </div>
    );
  }
  