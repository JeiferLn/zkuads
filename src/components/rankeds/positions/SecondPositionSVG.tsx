import React from "react";

function SVGWithImageClipPath({
  imageSrc,
  position,
}: {
  imageSrc: string;
  position: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 336 65"
      preserveAspectRatio="none"
      className="absolute top-0 left-0 w-full h-full"
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
        fill="url(#paint0_linear_492_2331)"
        fillOpacity="0.3"
        stroke="url(#paint1_linear_492_2331)"
        strokeWidth="2"
      />

      <defs>
        <linearGradient
          id="paint0_linear_492_2331"
          x1="51.6923"
          y1="32"
          x2="336"
          y2="32.3685"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#190A46" />
          <stop offset="0.98" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_492_2331"
          x1="176.45"
          y1="65"
          x2="183.49"
          y2="8.5102"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8F8F8F" />
          <stop offset="1" stopColor="#D3D3D3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SVGWithImageClipPath;
