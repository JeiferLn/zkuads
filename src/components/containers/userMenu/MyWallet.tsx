import React from "react";
import Cookie from "js-cookie";

function MyWallet() {
  const team_id = Cookie.get("team_id");

  const color = {
    color1: "",
    color2: "",
  };

  switch (team_id) {
    case "1":
      color.color1 = "#41C5FF";
      color.color2 = "#3870C6";
      break;
    case "2":
      color.color1 = "#FBBC0D";
      color.color2 = "#EE880C";
      break;
    case "3":
      color.color1 = "#E60303";
      color.color2 = "#720101";
      break;
    default:
      break;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 345 106"
      fill="none"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <path
        d="M6.67797 5.71744C6.82783 3.07002 9.01833 1 11.67 1H338.591C341.482 1 343.77 3.44468 343.58 6.32947L337.372 100.329C337.199 102.957 335.017 105 332.383 105H6.34921C3.47672 105 1.19488 102.585 1.35722 99.7174L6.67797 5.71744Z"
        fill="#3B1578"
        stroke="url(#paint0_linear_975_13822)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_975_13822"
          x1="207.742"
          y1="106"
          x2="209.819"
          y2="0.00436628"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color.color1} />
          <stop offset="1" stopColor={color.color2} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default MyWallet;
