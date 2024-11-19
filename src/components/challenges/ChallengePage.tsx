import React, { useEffect, useState } from "react";
import { poppins } from "../Fonts";

import ChallengesRoad from "./challengesRoad/ChallengesRoad";
import Icons from "../Icons";
import InfoChanllengSVG from "../containers/challenges/InfoChanllengSVG";
import Challenges from "./Challenges";

import useChallengesStore from "@/stores/useChallengesStore";
import axiosTokenClient from "@/utils/axiosTokenClient";
import usePlayingWithStore from "@/stores/usePlayingWithStore";

interface timeLeftProps {
  hours: number;
  minutes: number;
}

function ChallengePage() {
  const [clientTime, setClientTime] = useState("");
  const [serverTime, setServerTime] = useState("");

  const playingWith = usePlayingWithStore((state) => state.playingWith);
  const timeLeft = useChallengesStore((state) => state.timeLeft);
  const setTimeLeft = useChallengesStore((state) => state.setTimeLeft);
  const setNewTimeLeft = useChallengesStore((state) => state.setNewTimeLeft);
  const progress = useChallengesStore((state) => state.progress);
  const setProgress = useChallengesStore((state) => state.setProgress);
  const quantity = useChallengesStore((state) => state.quantityComplete);
  const challengesList = useChallengesStore((state) => state.challenges);
  const setChallengesList = useChallengesStore((state) => state.setChallenges);
  const setQuantChallenges = useChallengesStore(
    (state) => state.setQuantityComplete
  );
  const setWeeklyChallenges = useChallengesStore(
    (state) => state.setWeeklyChallenges
  );

  useEffect(() => {
    const getBogotaTime = () => {
      const now = new Date();
      const bogotaTimeString = now.toLocaleString("es-CO", {
        timeZone: "America/Bogota",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      return bogotaTimeString;
    };
    setClientTime(getBogotaTime());
  }, []);

  useEffect(() => {
    const getDailyChallenges = async () => {
      const res = await axiosTokenClient.get("/Challenges/assign_challenges/");

      if (res.data.challenges.length === 0) {
        const newChallenges = await axiosTokenClient.post(
          "/Challenges/assign_challenges/"
        );

        const serverTime =
          newChallenges.data.challenges.length <= 2
            ? "14:00"
            : newChallenges.data.challenges.length > 2 &&
              newChallenges.data.challenges.length <= 4
            ? "22:00"
            : "06:00";

        setServerTime(serverTime);
        setChallengesList(newChallenges.data.challenges);
        setQuantChallenges(newChallenges.data.challenges.length);
        return;
      }

      const serverTime =
        res.data.challenges.length <= 2
          ? "14:00"
          : res.data.challenges.length > 2 && res.data.challenges.length <= 4
          ? "22:00"
          : "06:00";

      setServerTime(serverTime);
      setChallengesList(res.data.challenges);
      setQuantChallenges(res.data.challenges.length);
    };

    const getWeeklyChallenges = async () => {
      const res = await axiosTokenClient.post(
        "/Challenges/weekly-challenges/",
        {
          bet_type: playingWith === "zcoins" ? "real mode" : "fun mode",
        }
      );

      setProgress(res.data.total_completed_challenges);
      setWeeklyChallenges(res.data.challenges);
    };

    getDailyChallenges();
    getWeeklyChallenges();
  }, [playingWith, setProgress, setWeeklyChallenges, setChallengesList, setQuantChallenges]);

  useEffect(() => {
    const newChallenges = async () => {
      const res = await axiosTokenClient.post("/Challenges/assign_challenges/");

      const serverTime =
        res.data.challenges.length <= 2
          ? "14:00"
          : res.data.challenges.length > 2 && res.data.challenges.length <= 4
          ? "22:00"
          : "06:00";

      setServerTime(serverTime);
      setChallengesList(res.data.challenges);
      setQuantChallenges(res.data.challenges.length);
    };

    if (timeLeft.hours === 0 && timeLeft.minutes === 0) {
      newChallenges();
    }
  }, [timeLeft, setChallengesList, setQuantChallenges]);

  useEffect(() => {
    let hours =
      Number(serverTime.split(":")[0]) - Number(clientTime.split(":")[0]);
    let minutes =
      Number(serverTime.split(":")[1]) - Number(clientTime.split(":")[1]);

    if (minutes < 0) {
      hours -= 1;
      minutes += 60;
    }

    setTimeLeft({
      hours: hours,
      minutes: minutes,
    });
  }, [clientTime, serverTime, setTimeLeft]);

  useEffect(() => {
    const timer = setInterval(() => {
      let { hours, minutes } = timeLeft;

      if (minutes > 0) {
        minutes -= 1;
      } else if (hours > 0) {
        hours -= 1;
        minutes = 59;
      }

      setNewTimeLeft(hours, minutes);
    }, 60000);

    return () => clearInterval(timer);
  }, [timeLeft, setNewTimeLeft]);

  return (
    <div className="w-full h-full relative z-0">
      <div className="relative grid place-content-center w-screen h-[5%] bg-[#09FBD3] [clip-path:polygon(0%_40%,35%_40%,37%_0%,63%_0%,65%_40%,100%_40%,100%_100%,0%_100%)]">
        <div className="absolute top-0 left-0 w-full h-full bg-[#4C2472] [clip-path:polygon(0%_45%,35.5%_45%,37.5%_5%,62.5%_5%,64.5%_45%,100%_45%,100%_95%,0%_95%)]" />

        <div className="relative z-10 w-full">
          <p>Challenges</p>
        </div>
      </div>
      <div className="bg-[#9044D8] w-full h-[24%]  border-b-[3px] border-[#09FBD3]">
        <div className="relative w-full h-1/2 pt-[2%] text-center">
          <div className="flex items-center gap-0.5 absolute top-0 left-0 pl-1 pr-4 py-0.5 bg-[#762EBA] [clip-path:polygon(0%_0%,100%_0%,90%_100%,0%_100%)]">
            <div className="w-3 relative">
              <Icons name="Timer" classname="relative z-10" />
              <Icons
                name="Timer"
                classname="absolute top-[10%] left-0 text-black/80"
              />
            </div>
            <p className="text-[2.5vw] [text-shadow:0px_2px_0px_rgba(0,0,0,0.8)]">
              15h : 43m
            </p>
          </div>

          <h2 className="font-long-shot text-[10vw] [-webkit-text-stroke-width:0.88px] [-webkit-text-stroke-color:#000]">
            WEEKLY CHALLENGE
          </h2>
          <p
            className={`absolute top-[75%] right-[3%] ${poppins.className} text-[3.5vw] -mb-[0.5vh]`}
          >
            COMPLETED {progress}/30
          </p>
        </div>

        <div className="w-full h-1/2">
          <ChallengesRoad />
        </div>
      </div>
      <div className="relative w-full h-[13%]">
        <div className="w-full h-full absolute top-0 left-0">
          <InfoChanllengSVG />
        </div>

        <div className="w-full h-full grid place-content-center relative z-10">
          <h2 className="w-[70%] mx-auto text-center text-[5.5vw]">
            2 New Challenges in {timeLeft.hours}h {timeLeft.minutes}m
          </h2>
        </div>
      </div>
      <p className="w-full text-center text-[4vw] pt-[0.5vh]">
        {challengesList.length}/6 Chanllenges
      </p>
      <div className="w-[95%] mx-auto h-[52%] mt-[1%] flex flex-col gap-y-1">
        {challengesList?.map((challenge) => (
          <Challenges
            key={challenge.challenge.id}
            description={challenge.challenge.description}
            progress={challenge.progress}
            objective={challenge.challenge.objective}
            balance={challenge.challenge.balance}
            completed={challenge.status === "completed"} // ???
            disable={challenge.is_active === false} // ???
            playingWith={playingWith}
          />
        ))}
        {Array.from({ length: 6 - quantity }).map((_, index) => (
          <Challenges
            key={`placeholder ${index}`}
            disable
            description=""
            progress={0}
            objective={0}
            balance=""
            playingWith={playingWith}
          />
        ))}
      </div>
    </div>
  );
}

export default ChallengePage;
