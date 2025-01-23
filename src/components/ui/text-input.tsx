export function TextInput({
  value,
  onChange,
  placeholder,
  size = "md",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass =
    size === "sm"
      ? "p-1 text-sm"
      : size === "md"
      ? "p-2 text-base"
      : "p-3 text-lg";

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`border border-gray-300 rounded-md ${sizeClass} w-full`}
      placeholder={placeholder}
    />
  );
}
