export default function Expo() {
  return (
    <svg viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="64" fill="#000020"></circle>
      <path
        fill="url(#expo-gradient-a)"
        d="M45.33 38.4c-7.47 0-13.53 6.06-13.53 13.53v24.13c0 7.47 6.06 13.53 13.53 13.53h37.33c7.47 0 13.53-6.06 13.53-13.53V51.93c0-7.47-6.06-13.53-13.53-13.53H45.33z"
      ></path>
      <path
        fill="#fff"
        d="M50.67 45.87h18.13v6.4H50.67v-6.4zm0 14.93h18.13v6.4H50.67v-6.4zm0 14.93h27.73v6.4H50.67v-6.4z"
      ></path>
      <path
        fill="url(#expo-gradient-b)"
        d="M82.67 45.87v32h6.4v-32h-6.4z"
      ></path>
      <defs>
        <linearGradient
          id="expo-gradient-a"
          x1="31.8"
          x2="96.19"
          y1="38.4"
          y2="89.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0.1"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.05"></stop>
        </linearGradient>
        <linearGradient
          id="expo-gradient-b"
          x1="82.67"
          x2="89.07"
          y1="45.87"
          y2="77.87"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.7"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
