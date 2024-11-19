'use client'

import React from "react";
import Cookies from "js-cookie";

function SpinnerSVG({isColor} : {isColor?: boolean}) {
  const [spinnerColor, setSpinnerColor] = React.useState("text-white");
  const userCookie = Cookies.get("access_token");  
  const zkuadID = Number(Cookies.get("team_id")) || 0;

  React.useEffect(() => {
    if (userCookie) {
      switch (zkuadID) {
        case 1:
          setSpinnerColor("text-[#1CA4DF]");
          break;
        case 2:
          setSpinnerColor("text-[#FBBE0D]");
          break;
        case 3:
          setSpinnerColor("text-[#F70404]");
          break;
      }
    }
  }, [userCookie, zkuadID]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`w-2/3 h-2/3 mx-auto ${isColor ? "" : spinnerColor} animate-spin duration-200`}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        fill="currentColor"
        d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z"
      />
    </svg>
  );
}

export default SpinnerSVG;
