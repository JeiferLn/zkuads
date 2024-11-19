import React from "react";

function BlueContainerOpen({
  changeZkuadList,
}: {
  changeZkuadList: (colorZkuad: string) => void;
}) {
  return (
    <svg
      viewBox="0 0 376 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full absolute bottom-0 left-[0.15%]"
      preserveAspectRatio="none"
    >
      <path
        d="M178.034 270.359L198.216 302.564L108.942 303.48L87.4794 268.663L86.454 267H84.5H3.5V243.188V3.5H371.5V243.188V263.036L180.964 265L174.717 265.065L178.034 270.359Z"
        fill="url(#paint0_linear_1036_1195)"
        stroke="url(#paint1_linear_1036_1195)"
        strokeWidth="7"
      />
      <path
        d="M2 272H83.3883L103.902 305H2V272Z"
        fill="url(#paint2_linear_1036_1195)"
        stroke="url(#paint3_linear_1036_1195)"
        strokeWidth="4"
        onClick={() => changeZkuadList("yellow")}
      />
      <path
        d="M205.108 303.994L184.575 270.963L276.413 270.011L297.857 303.519L205.108 303.994Z"
        fill="url(#paint4_linear_1036_1195)"
        stroke="url(#paint5_linear_1036_1195)"
        strokeWidth="4"
        onClick={() => changeZkuadList("red")}
      />
      <path
        d="M302.595 303.5L281.131 269.963L373.026 269.02L373.474 303.5H302.595Z"
        fill="#09FBD3"
        fillOpacity="0.75"
        stroke="#13CDC1"
        strokeWidth="4"
        onClick={() => changeZkuadList("general")}
      />
      <defs>
        <linearGradient
          id="paint0_linear_1036_1195"
          x1="187.5"
          y1="307"
          x2="187.5"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0774A2" />
          <stop offset="1" stopColor="#1CA4DF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1036_1195"
          x1="-7.95955e-09"
          y1="152.239"
          x2="375.001"
          y2="154.584"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#118BC0" />
          <stop offset="1" stopColor="#1F2FBD" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1036_1195"
          x1="53.75"
          y1="307"
          x2="53.75"
          y2="270"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8B20D" />
          <stop offset="1" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1036_1195"
          x1="-1.71875"
          y1="268.612"
          x2="98.29"
          y2="314.327"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBBC0D" />
          <stop offset="1" stopColor="#EE880C" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_1036_1195"
          x1="179.073"
          y1="266.575"
          x2="287.59"
          y2="320.714"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F70404" />
          <stop offset="1" stopColor="#680101" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_1036_1195"
          x1="241.25"
          y1="306"
          x2="241.25"
          y2="268"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#680101" />
          <stop offset="1" stopColor="#E90404" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default BlueContainerOpen;
