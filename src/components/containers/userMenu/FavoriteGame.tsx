import React from "react";

function FavoriteGame() {
  return (
    <svg
      viewBox="0 0 163 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <g filter="url(#filter0_dd_1032_1145)">
        <path
          d="M9.97923 6H151.641L159 26.6667L151.641 46H9.97923L4 26.6667L9.97923 6Z"
          fill="#1665BF"
        />
        <path
          d="M4.52189 26.6619L10.3551 6.5H151.288L158.467 26.6609L151.296 45.5H10.348L4.52189 26.6619Z"
          stroke="#020653"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_1032_1145"
          x="0"
          y="0"
          width="163"
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
            values="0 0 0 0 0.25098 0 0 0 0 0.760784 0 0 0 0 0.992157 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1032_1145"
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
            values="0 0 0 0 0.25098 0 0 0 0 0.760784 0 0 0 0 0.992157 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1032_1145"
            result="effect2_dropShadow_1032_1145"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1032_1145"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default FavoriteGame;
