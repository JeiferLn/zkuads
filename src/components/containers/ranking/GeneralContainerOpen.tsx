import React from "react";

function GeneralContainerOpen({changeZkuadList} : {changeZkuadList: (colorZkuad: string) => void}) {
  return (
    <svg
      viewBox="0 0 375 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full absolute bottom-0 left-[0.15%]"
      preserveAspectRatio="none"
    >
      <path
        d="M279.443 266.105L278.396 264.479L276.462 264.5L3.5 267.462V243.188V3.5H371.5V243.188V267V270.5V277.5V301H301.909L279.443 266.105Z"
        fill="url(#paint0_linear_1036_1219)"
        stroke="url(#paint1_linear_1036_1219)"
        strokeWidth="7"
        onClick={() => changeZkuadList("general")}
      />
      <path
        d="M2.5 272H83.3883L103.902 305H2.5V272Z"
        fill="url(#paint2_linear_1036_1219)"
        stroke="url(#paint3_linear_1036_1219)"
        strokeWidth="4"
        onClick={() => changeZkuadList("yellow")}
      />
      <path
        d="M108.108 304.994L87.5752 271.963L179.413 271.011L200.857 304.519L108.108 304.994Z"
        fill="url(#paint4_linear_1036_1219)"
        stroke="url(#paint5_linear_1036_1219)"
        strokeWidth="4"
        onClick={() => changeZkuadList("blue")}
      />
      <path
        d="M204.108 303.994L183.575 270.963L275.413 270.011L296.857 303.519L204.108 303.994Z"
        fill="url(#paint6_linear_1036_1219)"
        stroke="url(#paint7_linear_1036_1219)"
        strokeWidth="4"
        onClick={() => changeZkuadList("red")}
      />
      <defs>
        <linearGradient
          id="paint0_linear_1036_1219"
          x1="187.742"
          y1="164.5"
          x2="187.484"
          y2="304.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#16C1BC" />
          <stop offset="1" stopColor="#0F9793" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1036_1219"
          x1="260"
          y1="161"
          x2="187.5"
          y2="306.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0BC2B6" />
          <stop offset="1" stopColor="#19BBB1" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1036_1219"
          x1="54"
          y1="307"
          x2="54"
          y2="270"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8B20D" />
          <stop offset="1" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1036_1219"
          x1="-1.21075"
          y1="268.612"
          x2="98.4928"
          y2="313.976"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBBC0D" />
          <stop offset="1" stopColor="#EE880C" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_1036_1219"
          x1="144.25"
          y1="307"
          x2="144.25"
          y2="269"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0774A2" />
          <stop offset="1" stopColor="#1CA4DF" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_1036_1219"
          x1="84"
          y1="287.844"
          x2="204.473"
          y2="289.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#118BC0" />
          <stop offset="1" stopColor="#1F2FBD" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_1036_1219"
          x1="178.073"
          y1="266.575"
          x2="286.59"
          y2="320.714"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F70404" />
          <stop offset="1" stopColor="#680101" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_1036_1219"
          x1="240.438"
          y1="272.483"
          x2="240.438"
          y2="306"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E60303" />
          <stop offset="1" stopColor="#720101" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default GeneralContainerOpen;
