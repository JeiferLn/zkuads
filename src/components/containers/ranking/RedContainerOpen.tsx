import React from "react";

function RedContainerOpen({changeZkuadList} : {changeZkuadList: (colorZkuad: string) => void}) {
  return (
    <svg
      viewBox="0 0 376 308"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full absolute bottom-0 left-[0.15%]"
      preserveAspectRatio="none"
    >
      <path
        d="M275.034 269.859L295.216 302.064L205.942 302.98L184.479 268.163L183.454 266.5H181.5H3.5V243.188V3.5H371.5V243.188V263.536L277.964 264.5L271.717 264.565L275.034 269.859Z"
        fill="url(#paint0_linear_1036_1200)"
        stroke="url(#paint1_linear_1036_1200)"
        strokeWidth="7"
        onClick={() => changeZkuadList("red")}
      />
      <path
        d="M2.03711 272H83.3883L103.912 305.017L2.03711 305.491V272Z"
        fill="url(#paint2_linear_1036_1200)"
        stroke="url(#paint3_linear_1036_1200)"
        strokeWidth="4"
        onClick={() => changeZkuadList("yellow")}
      />
      <path
        d="M108.108 304.994L87.5752 271.963L179.413 271.011L200.857 304.519L108.108 304.994Z"
        fill="url(#paint4_linear_1036_1200)"
        stroke="url(#paint5_linear_1036_1200)"
        strokeWidth="4"
        onClick={() => changeZkuadList("blue")}
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
          id="paint0_linear_1036_1200"
          x1="-5.99563"
          y1="-11.4938"
          x2="400.698"
          y2="66.791"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F70404" />
          <stop offset="1" stopColor="#680101" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1036_1200"
          x1="188.084"
          y1="36.1601"
          x2="188.084"
          y2="306.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E60303" />
          <stop offset="1" stopColor="#720101" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1036_1200"
          x1="53.7686"
          y1="307.5"
          x2="53.7686"
          y2="270"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8B20D" />
          <stop offset="1" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1036_1200"
          x1="-1.68105"
          y1="268.594"
          x2="98.7648"
          y2="313.88"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBBC0D" />
          <stop offset="1" stopColor="#EE880C" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_1036_1200"
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
          id="paint5_linear_1036_1200"
          x1="84"
          y1="287.844"
          x2="204.473"
          y2="289.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#118BC0" />
          <stop offset="1" stopColor="#1F2FBD" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default RedContainerOpen;
