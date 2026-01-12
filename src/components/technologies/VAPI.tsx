export default function VAPI({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      fill="currentColor"
    >
      <path d="M64 8c-31 0-56 25-56 56s25 56 56 56 56-25 56-56S95 8 64 8zm0 16c22 0 40 18 40 40s-18 40-40 40S24 86 24 64 42 24 64 24z" />
      <circle cx="64" cy="64" r="20" />
    </svg>
  );
}
