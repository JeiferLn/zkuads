import React from "react";

function YellowContainerOpen({changeZkuadList} : {changeZkuadList: (colorZkuad: string) => void}) {
  return (
    <svg
      viewBox="0 0 377 306"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full absolute bottom-0 left-[0.15%]"
      preserveAspectRatio="none"	
    >
      <path
        d="M82.0559 272.134L103.871 302.5H3.55617L4.49956 243.244L4.5 243.216V243.188V3.5H372.5V243.188V264.031L84.8673 266.592L78.1178 266.652L82.0559 272.134Z"
        fill="url(#paint0_linear_1036_1190)"
        stroke="url(#paint1_linear_1036_1190)"
        strokeWidth="7"
        onClick={() => changeZkuadList("yellow")}
      />
      <path
        d="M110.451 304L88.2885 271.961L180.895 271.011L201.402 304H110.451Z"
        fill="url(#paint2_linear_1036_1190)"
        stroke="url(#paint3_linear_1036_1190)"
        strokeWidth="4"
        onClick={() => changeZkuadList("blue")}
      />
      <path
        d="M206.108 303.994L185.575 270.963L277.413 270.011L298.857 303.519L206.108 303.994Z"
        fill="url(#paint4_linear_1036_1190)"
        stroke="url(#paint5_linear_1036_1190)"
        strokeWidth="4"
        onClick={() => changeZkuadList("red")}
      />
      <path
        d="M303.595 303.5L282.131 269.963L374.026 269.02L374.474 303.5H303.595Z"
        fill="#09FBD3"
        fillOpacity="0.75"
        stroke="#13CDC1"
        strokeWidth="4"
        onClick={() => changeZkuadList("general")}
      />
      <defs>
        <linearGradient
          id="paint0_linear_1036_1190"
          x1="188"
          y1="306"
          x2="188"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8B20D" />
          <stop offset="1" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1036_1190"
          x1="-6.01162"
          y1="-11.475"
          x2="401.64"
          y2="67.3321"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBBC0D" />
          <stop offset="1" stopColor="#EE880C" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1036_1190"
          x1="157.059"
          y1="306"
          x2="157.784"
          y2="269.002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3870C6" />
          <stop offset="1" stopColor="#41C5FF" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1036_1190"
          x1="84.5"
          y1="287.348"
          x2="204.972"
          y2="289.357"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#118BC0" />
          <stop offset="1" stopColor="#1F2FBD" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_1036_1190"
          x1="180.073"
          y1="266.575"
          x2="288.59"
          y2="320.714"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F70404" />
          <stop offset="1" stopColor="#680101" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_1036_1190"
          x1="242.25"
          y1="306"
          x2="242.25"
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

export default YellowContainerOpen;
