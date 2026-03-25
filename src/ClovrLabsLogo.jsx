export default function ClovrLabsLogo({ height = 16, color = "#6b7280" }) {
  // Four-petal clover mark based on the Clovr Labs brand
  const petalSize = height;
  const totalWidth = height * 4.8; // approximate aspect ratio for mark + text

  return (
    <svg
      height={height}
      viewBox="0 0 120 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Clover mark */}
      <g transform="translate(0, 0)">
        <g transform="translate(12, 12) rotate(45)">
          {/* Top petal */}
          <ellipse cx="0" cy="-5.2" rx="3.8" ry="5" fill={color} />
          {/* Right petal */}
          <ellipse cx="5.2" cy="0" rx="5" ry="3.8" fill={color} />
          {/* Bottom petal */}
          <ellipse cx="0" cy="5.2" rx="3.8" ry="5" fill={color} />
          {/* Left petal */}
          <ellipse cx="-5.2" cy="0" rx="5" ry="3.8" fill={color} />
        </g>
      </g>
      {/* "CLOVR LABS" text */}
      <text
        x="27"
        y="16.5"
        fill={color}
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="12"
        fontWeight="700"
        letterSpacing="1.5"
      >
        CLOVR LABS
      </text>
    </svg>
  );
}
