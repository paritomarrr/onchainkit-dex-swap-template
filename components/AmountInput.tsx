// components/AmountInput.tsx

type Props = {
    value: string;
    onChange: (val: string) => void;
    label: string;
  };
  
  export default function AmountInput({ value, onChange, label }: Props) {
    return (
      <div className="mb-4">
        <label className="block text-sm mb-1">{label}</label>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded border border-gray-600 text-white"
          placeholder="0.0"
          min="0"
        />
      </div>
    );
  }
  