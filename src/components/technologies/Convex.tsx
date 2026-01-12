export default function Convex({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      fill="currentColor"
    >
      <path d="M64 8L16 48v32l48 40 48-40V48L64 8zm0 12.5l36 30v24l-36 30-36-30v-24l36-30z" />
      <path d="M64 28.5L32 52v24l32 23.5L96 76V52L64 28.5z" />
    </svg>
  );
}
