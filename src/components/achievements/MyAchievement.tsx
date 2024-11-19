'use client'

import Image from "next/image";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface MyAchievementProps {
  insignia?: "basic" | "intermediate" | "expert";
  image?: string;
  level: number;
}

function MyAchievement({ insignia, image, level }: MyAchievementProps) {
  const router = useRouter();
  const teamIdCookie = Cookies.get("team_id");
  const zkuadID = teamIdCookie ? Number(Cookies.get("team_id")) : NaN;

  const zkuadInformation = {
    insignia: {
      imgBasic: "",
      imgIntermeditate: "",
      imgExpert: "",
    },
    imgSrc: "",
    gradient: {
      start: "",
      end: "",
    },
    level: {
      shadowText: "",
      bgColor: "",
    },
  };

  switch (zkuadID) {
    case 1:
      zkuadInformation.insignia.imgBasic = "/insignia/basic-blue.png";
      zkuadInformation.insignia.imgIntermeditate = "/insignia/intermediate-blue.png";
      zkuadInformation.insignia.imgExpert = "/insignia/expert-blue.png";

      zkuadInformation.imgSrc = "/zkuad-icon/blue-shield.png";

      zkuadInformation.gradient.start = "#3870C6";
      zkuadInformation.gradient.end = "#41C5FF";

      zkuadInformation.level.bgColor = "bg-[#1F2FBD]";
      zkuadInformation.level.shadowText = "text-shadow-blue";
      break;
    case 2:
      zkuadInformation.insignia.imgBasic = "/insignia/basic-yellow.png";
      zkuadInformation.insignia.imgIntermeditate = "/insignia/intermediate-yellow.png";
      zkuadInformation.insignia.imgExpert = "/insignia/expert-yellow.png";

      zkuadInformation.imgSrc = "/zkuad-icon/yellow-shield.png";

      zkuadInformation.gradient.start = "#FB9A3B";
      zkuadInformation.gradient.end = "#FFDC0E";

      zkuadInformation.level.bgColor = "bg-[#EE880C]";
      zkuadInformation.level.shadowText = "text-shadow-yellow";
      break;
    case 3:
      zkuadInformation.insignia.imgBasic = "/insignia/basic-red.png";
      zkuadInformation.insignia.imgIntermeditate = "/insignia/intermediate-red.png";
      zkuadInformation.insignia.imgExpert = "/insignia/expert-red.png";

      zkuadInformation.imgSrc = "/zkuad-icon/red-shield.png";

      zkuadInformation.gradient.start = "#6D0101";
      zkuadInformation.gradient.end = "#DD0303";

      zkuadInformation.level.bgColor = "bg-[#720101]";
      zkuadInformation.level.shadowText = "text-shadow-red";
      break;
    default:
      break;
  }

  const handlePush = () => {
    insignia ? router.push("/achievements/1") : null;
  }

  return (
    <div className="relative h-full bg-[#806AF9] rounded-md rounded-tl-[30px] flex flex-col justify-center items-center" onClick={handlePush}>
      <div className={`absolute ${insignia === "basic" ? "w-[10.5vw] -top-[0.75vh] -left-[1vh]" : insignia === "intermediate" ? "w-[9vw] h-[5.6vh] -top-[1vh] -left-[1vw]" : insignia === "expert" ? "w-[11vw] -top-[1vh] -left-[1vh]" : "hidden"}`}>
        <Image
          src={insignia === "basic" ? zkuadInformation.insignia.imgBasic : insignia === "intermediate" ? zkuadInformation.insignia.imgIntermeditate : zkuadInformation.insignia.imgExpert }
          alt="badge-level"
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 87 110"
        fill="none"
        className="relative px-1"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M85.0013 88.9626L85.7487 3.01739C85.7584 1.90607 84.8601 1 83.7488 1H39.9072C34.9397 1 30.9549 4.83362 31.0149 9.80075C31.0496 12.6778 31.1039 15.5663 31.1039 17.5771C31.1039 24.0771 23.0777 29.0771 18.5777 32.0771C17.0252 33.1122 12.0732 35.796 7.43902 37.9612C3.68142 39.7169 1.00002 43.4301 1.00004 47.5776L1.00042 106.74C1.00043 107.845 1.89586 108.74 3.00042 108.74H49.7026C49.9428 108.74 50.149 108.569 50.1932 108.333L50.5293 106.541C51.7416 100.075 56.3641 94.7747 62.605 92.6945C63.7784 92.3033 65.0072 92.1039 66.2441 92.1039H78.6364H81.8326C83.572 92.1039 84.9862 90.7019 85.0013 88.9626Z"
          stroke="url(#paint0_linear_711_4047)"
          strokeWidth="1.58442"
        />

        <g clipPath="url(#clipPathId)">
          <foreignObject width="87" height="110">
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src={image ? image : zkuadInformation.imgSrc}
                width="87"
                height="110"
                alt="Achievement"
                className={`${
                  image ? "absolute h-full object-cover p-0.5" : "opacity-40 w-3/4"
                }`}
              />
            </div>
          </foreignObject>
        </g>

        <defs>
          <linearGradient
            id="paint0_linear_711_4047"
            x1="52.042"
            y1="108.74"
            x2="60.7229"
            y2="1.66684"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={zkuadInformation.gradient.start} />
            <stop offset="1" stopColor={zkuadInformation.gradient.end} />
          </linearGradient>

          <clipPath id="clipPathId">
            <path d="M85.0013 88.9626L85.7487 3.01739C85.7584 1.90607 84.8601 1 83.7488 1H39.9072C34.9397 1 30.9549 4.83362 31.0149 9.80075C31.0496 12.6778 31.1039 15.5663 31.1039 17.5771C31.1039 24.0771 23.0777 29.0771 18.5777 32.0771C17.0252 33.1122 12.0732 35.796 7.43902 37.9612C3.68142 39.7169 1.00002 43.4301 1.00004 47.5776L1.00042 106.74C1.00043 107.845 1.89586 108.74 3.00042 108.74H49.7026C49.9428 108.74 50.149 108.569 50.1932 108.333L50.5293 106.541C51.7416 100.075 56.3641 94.7747 62.605 92.6945C63.7784 92.3033 65.0072 92.1039 66.2441 92.1039H78.6364H81.8326C83.572 92.1039 84.9862 90.7019 85.0013 88.9626Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className={`absolute bottom-[4%] right-[5%] ${zkuadInformation.level.bgColor} rounded-[50px_5px_15px_5px] w-1/3 text-center`}
      >
        <p className={`text-[3vw] ${zkuadInformation.level.shadowText} ml-0.5`}>
          Lv {level}
        </p>
      </div>
    </div>
  );
}

export default MyAchievement;
