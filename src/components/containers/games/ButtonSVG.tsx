import usePlayingWithStore from "@/stores/usePlayingWithStore";
import React from "react";

function ButtonSVG() {
  const playingWith = usePlayingWithStore((state) => state.playingWith);

  return playingWith === "zcoins" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 234 70"
      fill="none"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <g filter="url(#filter0_d_467_1077)">
        <path
          d="M1.28614 34.6365C4.33958 13.4138 36.2734 6.05167 51.8587 5.02344H179.722C195.944 5.02344 225.524 13.0436 232.203 34.6365C236.402 48.2114 223.198 56.8335 211.485 61.1014C205.72 63.2017 199.532 63.6326 193.397 63.6326H31.8205C20.3701 62.8101 -1.7673 55.8592 1.28614 34.6365Z"
          fill="#CF7606"
        />
      </g>
      <path
        d="M2.94362 29.8515C4.34548 20.108 12.4141 13.3076 22.5578 8.76172C32.6187 4.25294 44.2605 2.18566 51.9142 1.67455H179.722C187.608 1.67455 198.818 3.63407 208.843 8.23133C218.882 12.8352 227.462 19.9515 230.603 30.1079C232.482 36.1804 230.528 41.1166 226.607 45.1717C222.62 49.2964 216.66 52.4101 210.912 54.5046C205.427 56.5028 199.475 56.9347 193.397 56.9347H31.8813C26.3488 56.5279 18.3017 54.639 12.0583 50.378C5.89094 46.169 1.5256 39.7074 2.94362 29.8515Z"
        fill="url(#paint0_linear_467_1077)"
        stroke="url(#paint1_linear_467_1077)"
        strokeWidth="3.3491"
      />
      <defs>
        <filter
          id="filter0_d_467_1077"
          x="0.33018"
          y="5.02344"
          width="233.34"
          height="64.3028"
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
          <feOffset dy="5.02365" />
          <feGaussianBlur stdDeviation="0.33491" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_467_1077"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_467_1077"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_467_1077"
          x1="1"
          y1="29.3046"
          x2="233"
          y2="29.3046"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB400" />
          <stop offset="1" stopColor="#FDB400" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_467_1077"
          x1="140.699"
          y1="58.6092"
          x2="141.643"
          y2="-0.00487582"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FB9A3B" />
          <stop offset="1" stopColor="#FFDC0E" />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 234 70"
      fill="none"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <g>
        <path
          d="M1.28614 34.6368C4.33958 13.414 36.2734 6.05191 51.8587 5.02368H179.722C195.944 5.02368 225.524 13.0439 232.203 34.6368C236.402 48.2117 223.198 56.8337 211.485 61.1016C205.72 63.2019 199.532 63.6329 193.397 63.6329H31.8205C20.3701 62.8103 -1.7673 55.8595 1.28614 34.6368Z"
          fill="#77086F"
        />
      </g>
      <path
        d="M2.94362 29.8515C4.34548 20.108 12.4141 13.3076 22.5578 8.76172C32.6187 4.25294 44.2605 2.18566 51.9142 1.67455H179.722C187.608 1.67455 198.818 3.63407 208.843 8.23133C218.882 12.8352 227.462 19.9515 230.603 30.1079C232.482 36.1804 230.528 41.1166 226.607 45.1717C222.62 49.2964 216.66 52.4101 210.912 54.5046C205.427 56.5028 199.475 56.9347 193.397 56.9347H31.8813C26.3488 56.5279 18.3017 54.639 12.0583 50.378C5.89094 46.169 1.5256 39.7074 2.94362 29.8515Z"
        fill="url(#paint0_linear_994_2232)"
        stroke="url(#paint1_linear_994_2232)"
        strokeWidth="3.3491"
      />
      <defs>
        <filter
          id="filter0_d_994_2232"
          x="0.33018"
          y="5.02368"
          width="233.34"
          height="64.3026"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood fillOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5.02365" />
          <feGaussianBlur stdDeviation="0.33491" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_994_2232"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_994_2232"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_994_2232"
          x1="1"
          y1="29.3046"
          x2="233"
          y2="29.3046"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DF29C3" />
          <stop offset="1" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_994_2232"
          x1="53.3261"
          y1="58.6092"
          x2="82.5037"
          y2="-9.51015"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAB90D" />
          <stop offset="1" stopColor="#DF29C3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default ButtonSVG;
