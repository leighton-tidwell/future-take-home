export function ChevronDownIcon({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      height={size === "sm" ? 16 : size === "md" ? 20 : 24}
      width={size === "sm" ? 16 : size === "md" ? 20 : 24}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
