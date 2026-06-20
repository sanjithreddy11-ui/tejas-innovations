export default function CostHeroIllustration() {
  return (
    <div className="relative aspect-[16/8] w-full overflow-hidden rounded-3xl border border-neutral-200 bg-[#F7F5F1] sm:aspect-[16/7]">
      <svg
        viewBox="0 0 800 350"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* connecting trace lines */}
        <path
          d="M150 260 L150 190 L300 190 L300 110"
          fill="none"
          stroke="#E2DCD0"
          strokeWidth="2"
          strokeDasharray="1 7"
          strokeLinecap="round"
        />
        <path
          d="M300 110 L470 110 L470 70 L600 70"
          fill="none"
          stroke="#E2DCD0"
          strokeWidth="2"
          strokeDasharray="1 7"
          strokeLinecap="round"
        />
        <path
          d="M300 190 L470 190 L470 250 L640 250"
          fill="none"
          stroke="#E2DCD0"
          strokeWidth="2"
          strokeDasharray="1 7"
          strokeLinecap="round"
        />

        {/* browser / website card */}
        <rect x="230" y="60" width="220" height="150" rx="10" fill="#FFFFFF" stroke="#E2DCD0" strokeWidth="2" />
        <rect x="230" y="60" width="220" height="28" rx="10" fill="#FCFBF8" stroke="#E2DCD0" strokeWidth="2" />
        <circle cx="248" cy="74" r="4" fill="#E2832C" />
        <circle cx="262" cy="74" r="4" fill="#EFC9A6" />
        <circle cx="276" cy="74" r="4" fill="#EFC9A6" />
        <rect x="250" y="104" width="140" height="10" rx="3" fill="#E8E4DC" />
        <rect x="250" y="124" width="170" height="8" rx="3" fill="#EFEBE3" />
        <rect x="250" y="140" width="160" height="8" rx="3" fill="#EFEBE3" />
        <rect x="250" y="166" width="64" height="22" rx="11" fill="#E8590C" />

        {/* invoice / receipt card */}
        <g>
          <path
            d="M560 150 h160 v110 l-10 -8 -10 8 -10 -8 -10 8 -10 -8 -10 8 -10 -8 -10 8 -10 -8 -10 8 -10 -8 -10 8 -10 -8 -10 8 z"
            fill="#FFFFFF"
            stroke="#E2DCD0"
            strokeWidth="2"
          />
          <rect x="578" y="168" width="90" height="7" rx="2" fill="#E8E4DC" />
          <rect x="578" y="184" width="124" height="6" rx="2" fill="#EFEBE3" />
          <rect x="578" y="198" width="100" height="6" rx="2" fill="#EFEBE3" />
          <rect x="578" y="212" width="110" height="6" rx="2" fill="#EFEBE3" />
          <line x1="578" y1="230" x2="702" y2="230" stroke="#E2DCD0" strokeWidth="1.5" strokeDasharray="2 3" />
          <rect x="578" y="240" width="60" height="9" rx="2" fill="#E8590C" opacity="0.85" />
        </g>

        {/* rupee coin */}
        <circle cx="150" cy="260" r="26" fill="#FFFFFF" stroke="#E8590C" strokeWidth="2.5" />
        <text
          x="150"
          y="270"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="26"
          fontWeight="700"
          fill="#E8590C"
        >
          ₹
        </text>

        {/* node dots */}
        <circle cx="150" cy="190" r="3.5" fill="#C9C2B4" />
        <circle cx="300" cy="110" r="3.5" fill="#C9C2B4" />
        <circle cx="470" cy="70" r="3.5" fill="#C9C2B4" />
        <circle cx="470" cy="250" r="3.5" fill="#C9C2B4" />
        <circle cx="600" cy="70" r="4" fill="#E8590C" />
        <circle cx="640" cy="250" r="4" fill="#E8590C" />
      </svg>
    </div>
  );
}