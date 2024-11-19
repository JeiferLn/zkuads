import React, { useEffect } from "react";
import Complete from "./icons/Complete";
import Currency from "./icons/Currency";
import NotReached from "./icons/NotReached";
import useChallengesStore from "@/stores/useChallengesStore";
import NotClaimed from "./icons/Currency";
import { progress } from "framer-motion";

function ChallengesRoad() {
  const [isActual, setIsActual] = React.useState(false);

  const progress = useChallengesStore((state) => state.progress);
  const weeklyChallenges = useChallengesStore((state) => state.weeklyChallenges);

  const percentageBar = () => {
    switch (progress <= 30) {
      case true:
        return (((progress * 100) / 30) - 4).toFixed(2);
      case false:
        return ((30 * 100) / 30);
      default:
    }
  };

  const getChallengeIcon = (position: number) => {
    if (position < progress && position + 6 <= progress) {
      return <Complete />;
    } else if (position <= progress && position + 6 > progress) {
      return (
        <NotClaimed className="w-[200%] h-full mx-auto -ml-[63%] mt-[2.5%]" />
      );
    } else {
      return <NotReached />;
    }
  };

  useEffect(() => {
    if (progress >= 6 && progress <= 30) {
      setIsActual(true);
    } else {
      setIsActual(false);
    }
  }, [progress]);

  return (
    <div className="w-full h-full -mt-[1.5vh]">
      <div className="relative w-[95%] mx-auto h-full grid grid-cols-5 place-content-center [&>div:nth-child(n+2)]:relative [&>div:nth-child(n+2)]:z-10">
        <div className="w-full h-[15%] rounded-full absolute top-1/2 -translate-y-1/2 bg-[#390867]">
          <div
            style={{ width: `${percentageBar()}%` }}
            className="absolute h-1/2 top-0 left-0 bg-[#09FBD3] rounded-t-full duration-500"
          />
          <div
            style={{ width: `${percentageBar()}%` }}
            className="absolute h-1/2 bottom-0 left-0 bg-[#09937C] rounded-b-full duration-500"
          />
        </div>

        <div className="w-[60%] ml-[45%]">
          {getChallengeIcon(6)}
          <p
            className={`absolute left-1/2 -translate-x-1/2 ${
              isActual ? "-bottom-[5%]" : "-bottom-[57%]"
            }`}
          >
            6
          </p>
        </div>
        <div className="w-[60%] ml-[45%]">
          {getChallengeIcon(12)}
          <p
            className={`absolute left-1/2 -translate-x-1/2 ${
              isActual ? "-bottom-[5%]" : "-bottom-[57%]"
            }`}
          >
            12
          </p>
        </div>
        <div className="w-[60%] ml-[45%]">
          {getChallengeIcon(18)}
          <p
            className={`absolute left-1/2 -translate-x-1/2 ${
              isActual ? "-bottom-[5%]" : "-bottom-[57%]"
            }`}
          >
            18          </p>
        </div>
        <div className="w-[60%] ml-[45%]">
          {getChallengeIcon(24)}
          <p
            className={`absolute left-1/2 -translate-x-1/2 ${
              isActual ? "-bottom-[5%]" : "-bottom-[57%]"
            }`}
          >
            24          </p>
        </div>
        <div className="w-[60%] ml-[45%]">
          {getChallengeIcon(30)}
          <p
            className={`absolute left-1/2 -translate-x-1/2 ${
              isActual ? "-bottom-[5%]" : "-bottom-[57%]"
            }`}
          >
            30          </p>
        </div>
      </div>
    </div>
  );
}

export default ChallengesRoad;