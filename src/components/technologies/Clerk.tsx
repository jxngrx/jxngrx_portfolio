export default function Clerk({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      fill="currentColor"
    >
      <path d="M64 16l-40 24v48l40 24 40-24V40L64 16zm0 12.8l28 16.8v33.6L64 96 36 79.2V45.6L64 28.8z" />
      <circle cx="64" cy="64" r="16" />
    </svg>
  );
}
