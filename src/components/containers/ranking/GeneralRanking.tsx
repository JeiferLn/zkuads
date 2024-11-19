import React, { useEffect } from "react";

interface zkuadStyles {
  bgScore: string;
  pathD: string;
  urlStroke: string;
}

function GeneralRanking({
  zkuadID,
}: {
  zkuadID: number;
}) {
  const zkuadStyles: zkuadStyles[] = [
    {
      bgScore: "#1E34BD",
      pathD:
        "M0.958828 3.88C0.958828 2.26668 2.26668 0.958828 3.88 0.958828H305.587C307.36 0.958828 308.724 2.52565 308.48 4.28192L304.558 32.5219C304.357 33.9661 303.122 35.0412 301.664 35.0412H3.88001C2.26669 35.0412 0.958828 33.7333 0.958828 32.12V3.88Z",
      urlStroke: "url(#paint0_linear_975_13719)",
    },
    {
      bgScore: "#F0910C",
      pathD:
        "M0.958828 3.88C0.958828 2.26668 2.26668 0.958828 3.88 0.958828H305.54C307.314 0.958828 308.679 2.52716 308.433 4.28413L304.517 32.3183C304.316 33.7614 303.082 34.8353 301.624 34.8353H3.88C2.26668 34.8353 0.958828 33.5275 0.958828 31.9142V3.88Z",
      urlStroke: "url(#paint0_linear_975_13653)",
    },
    {
      bgScore: "#750101",
      pathD:
        "M0.958828 3.88C0.958828 2.26668 2.26668 0.958828 3.88 0.958828H305.544C307.317 0.958828 308.681 2.52562 308.437 4.28187L304.515 32.5219C304.314 33.966 303.08 35.0412 301.622 35.0412H3.88C2.26668 35.0412 0.958828 33.7333 0.958828 32.12V3.88Z",
      urlStroke: "url(#paint0_linear_975_13775)",
    },
  ];
  const cardColor = zkuadStyles[zkuadID - 1] || {};

  return (
    <svg
      viewBox="0 0 310 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <path
        d={cardColor.pathD}
        fill="#3B1578"
        stroke={cardColor.urlStroke}
        strokeWidth="1.91766"
      />
      <path
        opacity="0.85"
        d="M1.8775 4.82252C1.92478 3.25015 3.2131 2 4.78618 2H304.569C306.366 2 307.733 3.61221 307.44 5.38489L303.11 31.5649C302.877 32.9697 301.663 34 300.239 34H3.99883C2.35741 34 1.0408 32.6432 1.09015 31.0025L1.8775 4.82252Z"
        fill="#3B1578"
      />
      <g opacity="0.4">
        <path
          d="M203.24 18.8657L190.14 1.30516L177.041 18.8657L190.14 28.8161L203.24 18.8657Z"
          fill="#350B45"
        />
        <path
          d="M198.65 25.8134L206.472 19.8716V30.7671L198.65 25.8134Z"
          fill="#350B45"
        />
        <path
          d="M181.965 25.8134L174.143 19.8716V30.7671L181.965 25.8134Z"
          fill="#350B45"
        />
      </g>
      <g opacity="0.4">
        <path
          d="M267.157 18.8657L254.058 1.30515L240.958 18.8657L254.058 28.816L267.157 18.8657Z"
          fill="#350B45"
        />
        <path
          d="M262.567 25.8134L270.389 19.8715V30.767L262.567 25.8134Z"
          fill="#350B45"
        />
        <path
          d="M245.883 25.8134L238.06 19.8715V30.767L245.883 25.8134Z"
          fill="#350B45"
        />
      </g>
      <g opacity="0.4">
        <path
          d="M209.333 15.2872L222.433 32.8478L235.532 15.2872L222.433 5.33691L209.333 15.2872Z"
          fill="#350B45"
        />
        <path
          d="M213.924 8.3397L206.101 14.2815V3.38603L213.924 8.3397Z"
          fill="#350B45"
        />
        <path
          d="M230.608 8.3397L238.43 14.2815V3.38603L230.608 8.3397Z"
          fill="#350B45"
        />
      </g>
      <g opacity="0.4">
        <path
          d="M276.903 15.2872L290.002 32.8478L303.102 15.2872L290.002 5.33691L276.903 15.2872Z"
          fill="#350B45"
        />
        <path
          d="M281.493 8.3397L273.671 14.2815V3.38603L281.493 8.3397Z"
          fill="#350B45"
        />
        <path
          d="M298.178 8.3397L306 14.2815V3.38603L298.178 8.3397Z"
          fill="#350B45"
        />
      </g>
      <path
        d="M227 18.8636C227 17.8404 227.84 17.0166 228.863 17.0368L304.999 18.5404C305.537 18.551 305.949 19.0207 305.889 19.5547L304.353 33.3747C304.25 34.3 303.468 35 302.537 35H227V18.8636Z"
        fill={cardColor.bgScore}
      />
      <defs>
        {zkuadID === 1 ? (
          <linearGradient
            id="paint0_linear_975_13719"
            x1="-6.60112e-09"
            y1="17.8521"
            x2="310.406"
            y2="31.5803"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#118BC0" />
            <stop offset="1" stopColor="#1F2FBD" />
          </linearGradient>
        ) : zkuadID === 2 ? (
          <linearGradient
            id="paint0_linear_975_13653"
            x1="-4.95639"
            y1="-1.34229"
            x2="117.097"
            y2="164.964"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FBBC0D" />
            <stop offset="1" stopColor="#EE880C" />
          </linearGradient>
        ) : (
          <linearGradient
            id="paint0_linear_975_13775"
            x1="155.5"
            y1="36"
            x2="155.5"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#680101" />
            <stop offset="1" stopColor="#E90404" />
          </linearGradient>
        )}
      </defs>
    </svg>
  );
}

export default GeneralRanking;
