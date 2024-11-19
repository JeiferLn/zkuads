import Image from "next/image";
import React, { use, useEffect } from "react";
import FirstPositionSVG from "./positions/FirstPositionSVG";
import GeneralRanking from "../containers/ranking/GeneralRanking";
import { poppins } from "../Fonts";
import useBestPlayerStore from "@/stores/useBestPlayerStore";

interface UserScoreProps {
  position: number;
  zkuadID: number;
  username: string;
  score: number;
}

function UserScore({ position, zkuadID, username, score }: UserScoreProps) {
  const zkuadScoreID = useBestPlayerStore((state) => state.zkuadScoreID);
  if (!username) return null;

  const zkuadStyles = [
    {
      bgPosition:
        "[background:radial-gradient(50%_50%_at_50%_50%,_#B9FDFF_0%,_rgba(29,_162,_233,_0)_100%),_#1DA2E9]",
      srcZkuad: "/background-ranked/bg-blue.png",
    },
    {
      bgPosition:
        "[background:radial-gradient(50%_50%_at_50%_50%,_#FFF_0%,_rgba(255,251,136,0)_100%),_#FDDB34]",
      srcZkuad: "/background-ranked/bg-yellow.png",
    },
    {
      bgPosition:
        "[background:radial-gradient(50%_50%_at_50%_50%,_#FD8080_0%,_rgba(209,_17,_17,_0)_100%),_#D11111]",
      srcZkuad: "/background-ranked/bg-red.png",
    },
  ];

  const zkuadInformation = zkuadStyles[zkuadID - 1] || {};

  return (
    <div className="w-[85%] mx-[10%] h-10 relative mb-[3vh]">
      <div className="absolute top-0 left-0 w-full h-full">
        {position === 0 && zkuadScoreID !== 4 ? (
          <Image
            src={
              zkuadID === 1
                ? "/background-ranked/bg-blue.png"
                : zkuadID === 2
                ? "/background-ranked/bg-yellow.png"
                : "/background-ranked/bg-red.png"
            }
            alt="bg-card"
            width={1000}
            height={1000}
            className="w-full h-full "
          />
        ) : position < 3 && zkuadScoreID === 4 ? (
          <Image
            src={zkuadInformation.srcZkuad}
            alt="bg-card"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        ) : (
          <GeneralRanking zkuadID={zkuadID} />
        )}
      </div>

      <div
        className={`absolute top-1/2 -translate-y-1/2 -left-[5%] w-[7vw] h-7 rotate-45 rounded-[3px] grid place-content-center ${
          position === 0
            ? "[background:radial-gradient(50%_50%_at_50%_50%,#FFECB2_0%,#EBB509_100%)]"
            : position === 1 && zkuadScoreID === 4
            ? "[background:radial-gradient(50%_50%_at_50%_50%,#FFF3E5_0%,#ADABAA_100%)]"
            : position === 2 && zkuadScoreID === 4
            ? "[background:radial-gradient(50%_50%_at_50%_50%,#FFC580_0%,#EF890F_100%)]"
            : zkuadInformation.bgPosition
        }`}
      >
        <p
          className={`${poppins.className} -rotate-45 [-webkit-text-stroke-width:0.6px] [-webkit-text-stroke-color:#000000] text-[5vw] font-[800]`}
        >
          {position + 1}
        </p>
      </div>

      <div className="relative z-10 w-full h-full flex items-center">
        <p className="pl-[30%] text-[5vw]">{username}</p>
      </div>

      <div className="absolute z-10 bottom-0 right-0 w-[25%] text-[4vw]">
        {score} pts
      </div>
    </div>
  );
}

export default UserScore;
