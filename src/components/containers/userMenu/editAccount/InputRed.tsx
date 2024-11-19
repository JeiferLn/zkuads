import React from "react";

function InputRed() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 309 51"
      fill="none"
      className="w-full h-full absolute top-0 left-0"
      preserveAspectRatio="none"
    >
      <g filter="url(#filter0_dd_1941_3770)">
        <path
          d="M4 6H290.136L305 26.6667L290.136 46H4L3.99994 28.5L4 6Z"
          fill="#D02F32"
        />
        <path
          d="M4.5 6.5H289.88L304.377 26.6567L289.89 45.5H4.5L4.49994 28.5L4.5 6.5Z"
          stroke="#710308"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_1941_3770"
          x="0"
          y="0"
          width="309"
          height="51"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.227451 0 0 0 0 0.227451 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1941_3770"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.228333 0 0 0 0 0.228333 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1941_3770"
            result="effect2_dropShadow_1941_3770"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1941_3770"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default InputRed;
