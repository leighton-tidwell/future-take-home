export function Button({
  children,
  onClick,
  color = "blue",
  size = "sm",
  className = "",
}: {
  children: React.ReactNode;
  onClick: () => void;
  color?: "blue" | "red";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClass =
    size === "sm"
      ? "p-1 text-sm"
      : size === "md"
      ? "p-2 text-base"
      : "p-3 text-lg";

  const colorClass =
    color === "blue"
      ? "bg-blue-500"
      : color === "red"
      ? "bg-red-500"
      : "bg-gray-500";

  return (
    <button
      className={`${colorClass} text-white ${sizeClass} rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
