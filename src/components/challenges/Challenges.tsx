import React from "react";
import Icons from "../Icons";
import ChallengeCompleted from "../containers/challenges/ChallengeCompleted";
import ChallengeActive from "../containers/challenges/ChallengeActive";

interface challengesProp {
  completed?: boolean;
  reclaimed?: boolean;
  disable?: boolean;
  description: string;
  progress: number;
  objective: number;
  balance: string;
  playingWith: string;
}

function Challenges({
  completed,
  disable,
  description,
  progress,
  objective,
  balance,
  playingWith,
}: challengesProp) {
  return (
    <div
      className={`w-full h-[16.6%] -mt-1 relative ${disable ? "hidden" : ""}`}
    >
      {completed ? <ChallengeCompleted /> : <ChallengeActive />}
      <div
        className={`w-full h-full grid grid-cols-[30%_auto_28%] items-center justify-center relative z-10 ${
          completed ? "[&>p]:pb-0.5" : "[&>p]:pb-3"
        }`}
      >
        <p
          className={`w-full pl-[5%] text-center [-webkit-text-stroke-width:0.5px] [-webkit-text-stroke-color:#000] ${
            completed ? "pt-0.5" : "pt-1"
          }`}
        >
          {progress}/{objective}
        </p>
        <p className="text-[3vw] pt-[5%] pl-[5%] [line-height:13.704px] text-center [-webkit-text-stroke-width:0.3px] [-webkit-text-stroke-color:#000]">
          {description}
        </p>
        <div
          className={`w-full flex items-center justify-center gap-1 ${
            completed ? "pt-1" : "pb-0.5"
          }`}
        >
          <div className="w-6 h-6">
            <Icons
              name={playingWith === "zcoins" ? "ZCoins" : "Diamond"}
              classname="w-6 relative"
            />
          </div>
          <p className="[-webkit-text-stroke-width:0.52px] [-webkit-text-stroke-color:#000]">
            {balance}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Challenges;
