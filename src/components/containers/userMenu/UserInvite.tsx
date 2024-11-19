import React from "react";

function UserInvite({zkuadID}: {zkuadID: number}) {

  const colorInvite = {
    A1: "",
    A2: "",
    B1: "",
    B2: "",
  }

  switch (zkuadID) {
    case 1:
      colorInvite.A1 = "#1CA4DF";
      colorInvite.A2 = "#0774A2";
      colorInvite.B1 = "#3870C6";
      colorInvite.B2 = "#41C5FF";
      break;
    case 2:
      colorInvite.A1 = "#FFDC0E"; 
      colorInvite.A2 = "#FDB400";
      colorInvite.B1 = "#FB9A3B";
      colorInvite.B2 = "#FFDC0E";
      break;
    case 3:
      colorInvite.A1 = "#F70404";
      colorInvite.A2 = "#680101";
      colorInvite.B1 = "#6D0101";
      colorInvite.B2 = "#DD0303";
      break;
    default:
      break;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 321 94"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full absolute top-0 left-0"
    >
      <path
        d="M7.14009 13.062C7.63149 6.37076 13.2035 1.19291 19.9128 1.19291H319.74L315.36 80.7044C314.986 87.4936 309.372 92.8071 302.572 92.8071H1.28373L7.14009 13.062Z"
        fill="url(#paint0_linear_440_23673)"
        stroke="url(#paint1_linear_440_23673)"
        strokeWidth="0.75%"
      />
      <defs>
        <linearGradient
          id="paint0_linear_440_23673"
          x1="-1.6%"
          y1="-3.75%"
          x2="85.68%"
          y2="156.38%"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colorInvite.A1} />
          <stop offset="1" stopColor={colorInvite.A2} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_440_23673"
          x1="60.21%"
          y1="100%"
          x2="60.76%"
          y2="0%"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colorInvite.B1} />
          <stop offset="1" stopColor={colorInvite.B2} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default UserInvite;
