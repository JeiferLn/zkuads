"use client";

import usePlayingWithStore from "@/stores/usePlayingWithStore";
import React from "react";

interface NavbarSVGProps {
  zkuad: string;
}

const NavbarSVG: React.FC<NavbarSVGProps> = ({ zkuad }) => {
  const playingWith = usePlayingWithStore((state) => state.playingWith);
  const [containerColor, setContainerColor] = React.useState({
    color1A: "",
    color1B: "",
    color2A: "",
    color2B: "",
  });

  React.useEffect(() => {
    const newContainerColor = {
      color1A: "",
      color1B: "",
      color2A: "",
      color2B: "",
    };

    switch (zkuad) {
      case "red":
        if (playingWith === "zcoins") {
          newContainerColor.color1A = "#F70404";
          newContainerColor.color1B = "#680101";
          newContainerColor.color2A = "#E60303";
          newContainerColor.color2B = "#720101";
        } else {
          newContainerColor.color1A = "#D21616";
          newContainerColor.color1B = "#DE1FCF";
          newContainerColor.color2A = "#D21616";
          newContainerColor.color2B = "#DF29C3";
        }
        break;
      case "yellow":
        if (playingWith === "zcoins") {
          newContainerColor.color1A = "#F8B20D";
          newContainerColor.color1B = "#FFD700";
          newContainerColor.color2A = "#FBBC0D";
          newContainerColor.color2B = "#EE880C";
        } else {
          newContainerColor.color1A = "#FED201";
          newContainerColor.color1B = "#DE1FCF";
          newContainerColor.color2A = "#FAB90D";
          newContainerColor.color2B = "#DF29C3";
        }
        break;
      case "blue":
        if (playingWith === "zcoins") {
          newContainerColor.color1A = "#0774A2";
          newContainerColor.color1B = "#1CA4DF";
          newContainerColor.color2A = "#118BC0";
          newContainerColor.color2B = "#1F2FBD";
        } else {
          newContainerColor.color1A = "#199FD8";
          newContainerColor.color1B = "#DE1FCF";
          newContainerColor.color2A = "#175DBE";
          newContainerColor.color2B = "#DF29C3";
        }
        break;
      default:
        break;
    }

    setContainerColor(newContainerColor);
  }, [zkuad, playingWith]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 375 120"
      fill="none"
      className="w-full h-full absolute top-0 left-0 transition duration-200"
      preserveAspectRatio="none"
    >
      <path
        d="M3 3H371V103.141H220.48C219.103 103.141 217.733 103.344 216.415 103.744L180.091 114.767C178.491 115.253 176.827 115.5 175.155 115.5H3V3Z"
        fill="url(#paint0_linear_979_1823)"
        stroke="url(#paint1_linear_979_1823)"
        strokeWidth="7.3462"
      />
      <defs>
        <linearGradient
          id="paint0_linear_979_1823"
          x1="187"
          y1="3"
          x2="187"
          y2="115.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={containerColor.color1A} />
          <stop offset="1" stopColor={containerColor.color1B} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_979_1823"
          x1="-2.88371"
          y1="119.719"
          x2="324.339"
          y2="-48.6836"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={containerColor.color2A} />
          <stop offset="1" stopColor={containerColor.color2B} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NavbarSVG;
