export default function thunder({ className }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 380 729"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="100%" stopColor="#0E100F">
            <animate
              attributeName="offset"
              values="1;0"
              begin="3.1s"
              dur="2s"
              repeatCount="1"
              fill="freeze"
            />
          </stop>
          <stop offset="0%" stopColor="#0AB0C2">
            <animate
              attributeName="offset"
              values="1;0"
              begin="3.1s"
              dur="2s"
              repeatCount="1"
              fill="freeze"
            />
          </stop>
        </linearGradient>
      </defs>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M242.5 279H370.657L85.0486 707.413L127.45 409.204L128.261 403.5H122.5H5.74611L61.3508 5H335.353L237.803 272.286L235.353 279H242.5Z"
        stroke="#0AB0C2"
        strokeWidth="10"
        fill="url(#fill)"
      />
    </svg>
  );
}
