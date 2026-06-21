export default function CostHeroIllustration() {
  return (
    <div className="relative aspect-[16/8] w-full overflow-hidden rounded-3xl border border-[#2A332D] bg-[#161D19] sm:aspect-[16/7]">
      <svg
        viewBox="0 0 800 350"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* flat color-blocked background shapes */}
        <circle cx="660" cy="60" r="170" fill="#a2fa8e" opacity="0.08" />
        <circle cx="80" cy="320" r="140" fill="#FFC83D" opacity="0.06" />

        {/* browser / website card — bold flat block */}
        <rect x="220" y="55" width="240" height="170" rx="16" fill="#0E1310" stroke="#2A332D" strokeWidth="2" />
        <rect x="220" y="55" width="240" height="34" rx="16" fill="#1B231D" />
        <rect x="220" y="73" width="240" height="16" fill="#1B231D" />
        <circle cx="242" cy="72" r="5" fill="#a2fa8e" />
        <circle cx="259" cy="72" r="5" fill="#FFC83D" />
        <circle cx="276" cy="72" r="5" fill="#3A463D" />
        <rect x="242" y="112" width="150" height="14" rx="4" fill="#a2fa8e" />
        <rect x="242" y="136" width="180" height="9" rx="3" fill="#3A463D" />
        <rect x="242" y="154" width="160" height="9" rx="3" fill="#3A463D" />
        <rect x="242" y="182" width="84" height="28" rx="14" fill="#FFC83D" />

        {/* rupee coin — solid flat block */}
        <circle cx="130" cy="255" r="42" fill="#a2fa8e" />
        <text
          x="130"
          y="270"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="38"
          fontWeight="800"
          fill="#0E1310"
        >
          ₹
        </text>

        {/* invoice card — bold block, flat */}
        <g>
          <path
            d="M580 130 h150 v110 l-9 -7 -9 7 -9 -7 -9 7 -9 -7 -9 7 -9 -7 -9 7 -9 -7 -9 7 -9 -7 -9 7 z"
            fill="#FFC83D"
          />
          <rect x="598" y="150" width="85" height="8" rx="2" fill="#0E1310" opacity="0.65" />
          <rect x="598" y="168" width="110" height="6" rx="2" fill="#0E1310" opacity="0.4" />
          <rect x="598" y="182" width="95" height="6" rx="2" fill="#0E1310" opacity="0.4" />
          <rect x="598" y="206" width="55" height="10" rx="3" fill="#0E1310" />
        </g>

        {/* connecting dashed traces */}
        <path
          d="M130 213 L130 160 L260 160"
          fill="none"
          stroke="#3A463D"
          strokeWidth="2"
          strokeDasharray="1 7"
          strokeLinecap="round"
        />
        <path
          d="M460 120 L520 120 L520 160 L580 160"
          fill="none"
          stroke="#3A463D"
          strokeWidth="2"
          strokeDasharray="1 7"
          strokeLinecap="round"
        />

        <circle cx="260" cy="160" r="4" fill="#a2fa8e" />
        <circle cx="520" cy="160" r="4" fill="#FFC83D" />
      </svg>
    </div>
  );
}