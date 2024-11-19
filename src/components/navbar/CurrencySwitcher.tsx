"use client";

import React from "react";
import Icons from "../Icons";
import usePlayingWithStore from "@/stores/usePlayingWithStore";
import axiosTokenClient from "@/utils/axiosTokenClient";
import { useBalanceStore } from "@/stores/useBalanceStore";

interface CurrencyBalance {
  name: string;
  balance: number;
}

const CurrencySwitcher: React.FC = () => {
  const [timeLeft, setTimeLeft] = React.useState(10);
  const [warning, setWarning] = React.useState(false);
  const [isDisable, setIsDisable] = React.useState(false);
  const [numberSwitches, setNumberSwitches] = React.useState(0);

  const { playingWith, setPlayingWith } = usePlayingWithStore() as {
    playingWith: string;
    setPlayingWith: (value: string) => void;
  };

  const getBalance = useBalanceStore((state) => state.balance);
  const setBalance = useBalanceStore((state) => state.setBalance);

  const fetchInitialBalance = React.useCallback(async () => {
    try {
      const balance = await axiosTokenClient.get("/Balances/balances/");
      setBalance(balance.data.balance);
      const mode = await axiosTokenClient.get(
        "/Configuration/configuration/get_user_config"
      );

      if (mode.data.user_configuration.mode === "real_mode") {
        await axiosTokenClient.post(
          `/Configuration/configuration/toggle_mode/`
        );
      }
    } catch (error) {
      console.error(error);
    }
  }, [setBalance]);

  React.useEffect(() => {
    fetchInitialBalance();
  }, [fetchInitialBalance]);

  const handleCurrencySwitch = async () => {
    setNumberSwitches((prev) => prev + 1);

    const balance = await axiosTokenClient.get("/Balances/balances/");
    setBalance(balance.data.balance);

    if (playingWith === "diamond") {
      setPlayingWith("zcoins");
    } else {
      setPlayingWith("diamond");
    }

    await axiosTokenClient.post(`/Configuration/configuration/toggle_mode/`);

    if (numberSwitches === 4) {
      setWarning(true);
      setIsDisable(true);
    }

    setTimeout(() => {
      setNumberSwitches(0);
    }, 5000);
  };

  React.useEffect(() => {
    if (timeLeft <= 0) {
      setIsDisable(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const disableWarning = () => {
    setWarning(false);
    setTimeLeft(8);
    setIsDisable(true);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const toogleCoin = playingWith === "zcoins";

  return (
    <div className="flex items-center">
      <div className="relative inline-flex flex-wrap items-center">
        <button
          type="button"
          className={`relative bg-neutral-800 group-hover:brightness-125 h-7 w-11 rounded-full border-2 transition-all duration-200 ${
            toogleCoin ? "border-[#ff5b00]" : "border-pow"
          } inline-grid items-center  ${
            isDisable ? "cursor-not-allowed w-14" : ""
          }`}
          disabled={isDisable}
          onClick={handleCurrencySwitch}
        >
          <div
            className={`${
              toogleCoin
                ? "translate-x-[10%]"
                : isDisable
                ? "bg-none w-full grid place-content-center text-center"
                : "translate-x-[70%]"
            } top-[10%] -translate-y-[2.5%] h-4/5 rounded-full aspect-square absolute transition-all duration-100 text-center `}
          >
            {!isDisable ? (
              <>
                <div
                  className={toogleCoin ? "relative w-full h-full" : "hidden"}
                >
                  <Icons name="ZCoins" classname="w-full h-full scale-150 left-[10%] top-[5%]" />
                </div>

                <div
                  className={toogleCoin ? "hidden" : "relative w-full h-full mt-[1px]"}
                >
                  <Icons name="Diamond" classname="scale-150" />
                </div>
              </>
            ) : (
              <div className="w-full text-center">
                <p className="text-sm">{formatTime(timeLeft)}</p>
              </div>
            )}
          </div>
        </button>
        <p
          className="inline-block ml-1.5 select-none"
        >
          {toogleCoin
            ? getBalance?.[0]?.balance ?? 0 + " ZCN"
            : getBalance?.[1]?.balance ?? 0 + " DMN"}
        </p>
      </div>
      {warning && (
        <div className="fixed top-0 left-0 z-30 w-screen h-screen">
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur" />
          <div className="relative z-10 w-[80%] bg-[#5E4ACF] [box-shadow:5px_5px_11.1px_0px_rgba(251,9,9,0.50)] px-[8vw] pt-3 pb-5 text-center duration-200 -translate-x-1/2 top-16 left-1/2 rounded-xl ">
            <div className="w-[25%] mx-auto">
              <Icons name="Error" />
            </div>
            <p className="text-[5vw] mt-1 mb-2">
              You have changed currency 5 times in the last 5 seconds. Please
              wait before changing again.
            </p>
            <button
              type="button"
              onClick={disableWarning}
              className="p-1 mt-2 rounded-full w-[80%] mx-auto bg-[#08EFC9] [box-shadow:0px_3.333px_3.333px_0px_rgba(0,0,0,0.25)] [text-shadow:0px_2.03px_3.247px_rgba(0,0,0,0.50)] text-[6vw]"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencySwitcher;
