import React from "react";

function FirstPositionSVG({
  imageSrc,
  position,
}: {
  imageSrc: string;
  position: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 336 70"
      preserveAspectRatio="none"
      className="absolute top-0 left-0 w-full h-[110%] object-cover"
    >
      <defs>
        <clipPath id={`clipPath-${position}`}>
          <path d="M1 4.04661C1 2.36401 2.36401 1 4.04661 1H331.601C333.383 1 334.785 2.52411 334.637 4.30073L329.895 60.9533C329.762 62.5318 328.443 63.7458 326.859 63.7458H4.0466C2.36401 63.7458 1 62.3817 1 60.6992V4.04661Z" />
        </clipPath>
        <pattern
          id={`imagePattern-${position}`}
          patternUnits="userSpaceOnUse"
          width="100%"
          height="100%"
        >
          <image
            href={imageSrc}
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            className="opacity-50"
          />
        </pattern>
      </defs>

      {/* Background rectangle with clip-path */}
      <rect
        width="100%"
        height="100%"
        fill={`url(#imagePattern-${position})`}
        clipPath={`url(#clipPath-${position})`}
      />

      {/* Overlay path for additional styling */}
      <path
        d="M1 4.04661C1 2.36401 2.36401 1 4.04661 1H331.601C333.383 1 334.785 2.52411 334.637 4.30073L329.895 60.9533C329.762 62.5318 328.443 63.7458 326.859 63.7458H4.0466C2.36401 63.7458 1 62.3817 1 60.6992V4.04661Z"
        fill="url(#paint0_linear_492_2324)"
        fillOpacity="0.3"
        stroke="url(#paint1_linear_492_2324)"
        strokeWidth="2"
      />
      <defs>
        <pattern
          id="pattern0_492_2324"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="matrix(0.00266667 0 0 0.0128 0 -1.452)" />
        </pattern>
        <linearGradient
          id="paint0_linear_492_2324"
          x1="39.6953"
          y1="34.8966"
          x2="336"
          y2="34.9964"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#190A46" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_492_2324"
          x1="191.034"
          y1="57.123"
          x2="186.92"
          y2="-0.453434"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EBB514" />
          <stop offset="1" stopColor="#FFDE77" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default FirstPositionSVG;
