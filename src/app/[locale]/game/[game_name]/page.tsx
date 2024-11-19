"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useGameStore } from "@/stores/useGameStore";
import axiosTokenClient from "@/utils/axiosTokenClient";
import { AnimatePresence, motion } from "framer-motion";
import ButtonSVG from "@/components/containers/games/ButtonSVG";
import BestScore from "@/components/containers/games/informationGame/BestScore";
import Victories from "@/components/containers/games/informationGame/Victories";
import MainSVG from "@/components/containers/games/MainSVG";
import BuyBoostersButton from "@/components/containers/games/BuyBoostersButton";
import usePlayingWithStore from "@/stores/usePlayingWithStore";
import BoosterModal from "@/components/games/BoosterModal";

interface InitialGameInformation {
  bet: {
    money: {
      cost: string;
      prize: string;
    };
  }[];
  boosters: {
    id: number;
    game_id: number;
    amount: number;
    name: string;
    description: string;
    image: string;
    price_amount: number;
  }[];
  game_id: number;
  pow_coins: number;
}

export type BoosterInformation = {
  id: number;
  game_id: number;
  pow_coins: number;
  description: string;
  name: string;
  image: string;
  amount: number;
  price_amount: number;
  main_booster: number;
};

function Page() {
  const [openBooster, setOpenBooster] = React.useState(false);
  const [gameUrl, setGameUrl] = React.useState<string>("");

  const [boosterInformation, setboosterInformation] =
    React.useState<BoosterInformation>();
  const [initialGameInformation, setInitialGameInformation] =
    React.useState<InitialGameInformation>();

  const playingWith = usePlayingWithStore((state) => state.playingWith);

  const NameGame = () => {
    const pathname = usePathname().split("/")[2];
    const names = pathname.split("-");

    return names
      .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
      .join(" ");
  };

  const gameInformation = useGameStore((state) => state.gameFind(NameGame()));

  useEffect(() => {
    const init = async () => {
      const res = await axiosTokenClient.post("/subscribe", {
        game_id: gameInformation?.game_id,
      });

      setInitialGameInformation(res.data);
    };

    if (gameInformation) {
      init();
    }
  }, [gameInformation]);

  useEffect(() => {
    const gameUrl = async () => {
      const res = await axiosTokenClient.post("/matching-url", {
        game_id: gameInformation?.game_id,
      });

      setGameUrl(res.data);
    };

    gameUrl();
  }),
    [gameInformation];

  const games = [
    { points: 650000, percentage: 86, time: "6d : 15h : 43m" },
    { points: 6500, percentage: 86, time: "6d : 15h : 43m" },
    { points: 650000, percentage: 86, time: "6d : 15h : 43m" },
    { points: 6500, percentage: 86, time: "6d : 15h : 43m" },
  ];

  return (
    <div>
      <div className="w-full h-full">
        <div className="pt-[15vh]">
          <div className="w-full h-[19%]">
            {gameInformation?.image && (
              <Image
                src={gameInformation.image}
                priority
                alt="gameImage"
                width={1000}
                height={1000}
                className="w-full h-[19vh] object-cover object-center"
              />
            )}
          </div>
          <div className="flex justify-around mt-[5%] px-[5%]">
            <div className="relative w-[55%]">
              <BestScore />
              <div className="relative">
                <p className="absolute -top-[30%] text-center text-[5.2vw] w-full [text-shadow:-2px_4px_0px_rgba(0,0,0,1)]">
                  Best Score
                </p>
                <p className="w-full text-center text-[6vw] pt-[6%] [text-shadow:0px_1.241px_1.489px_rgba(0,0,0,0.60)]">
                  65000 Pts
                </p>
              </div>
            </div>
            <div className="relative w-[40%]">
              <Victories />
              <div className="relative">
                <p className="absolute -top-[25%] text-center text-[5.2vw] w-full [text-shadow:-2px_4px_0px_rgba(0,0,0,1)]">
                  Victories
                </p>
                <p className="w-full text-center text-[6vw] pt-[8%] [text-shadow:0px_1.241px_1.489px_rgba(0,0,0,0.60)]">
                  320
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[49vh] relative mt-[5%]">
          <MainSVG />
          <h2 className="w-full pl-[10%] text-[6.5vw] relative [text-shadow:0px_1.5px_0.942px_rgba(0,0,0,1)]">
            Boosters
          </h2>
          <div className="relative z-0 w-full h-full -mt-[7%] flex flex-col justify-evenly">
            <div className="w-full grid grid-cols-3 [&>div]:relative [&>div>span]:[text-shadow:0px_1.871px_2.245px_rgba(0,0,0,0.60)] [&>div>span]:[-webkit-text-stroke-width:0.8px] [&>div>span]:[-webkit-text-stroke-color:#000] [&>div>span]:[letter-spacing:-0.561px]">
              {initialGameInformation?.boosters.map((booster, index) => (
                <div key={booster.id} className="relative">
                  <span className="absolute -top-[1vh] right-[1vw] text-[8vw]">
                    X{booster.amount}
                  </span>
                  <Image
                    src={
                      playingWith === "zcoins"
                        ? `/boosters/booster${index}-zcoins.png`
                        : `/boosters/booster${index}-diamond.png`
                    }
                    alt="booster"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover object-center"
                  />

                  <div className="w-[60%] absolute left-[20%] top-[20%]">
                    <Image
                      src={booster.image}
                      alt="booster-img"
                      width={1000}
                      height={1000}
                      className="w-full h-full"
                    />
                  </div>

                  <div className="w-full absolute text-[3.5vw] text-center top-[65%]">
                    {booster.name}
                  </div>
                  <div
                    className="w-[70%] absolute bottom-0 left-1/2 -translate-x-1/2"
                    onClick={() => {
                      setboosterInformation({
                        id: booster.id,
                        game_id: booster.game_id,
                        pow_coins: initialGameInformation.pow_coins,
                        description: booster.description,
                        name: booster.name,
                        image: booster.image,
                        amount: booster.amount,
                        price_amount: booster.price_amount,
                        main_booster: index,
                      });
                      setOpenBooster(true);
                    }}
                  >
                    <BuyBoostersButton />
                    <button
                      type="button"
                      className="relative z-10 w-full h-full [-webkit-text-stroke-width:0.7px] [-webkit-text-stroke-color:#000] [text-shadow:0px_0.844px 1.013px rgba(0,0,0,0.60)] text-[4vw]"
                    >
                      Buy
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[75%] mx-auto bg-[#3B1578] border-2 border-[#09FBD3CC] rounded-xl [&>div]:flex [&>div]:justify-between py-1 px-3">
              <div className="w-full">
                <p>Entry Cost</p>
                <p>
                  {playingWith === "zcoins" ? "Z" : "D"}{" "}
                  {initialGameInformation?.bet?.[0]?.money.cost.slice(1, 3)}
                </p>
              </div>
              <div>
                <p>Reward to Win</p>
                <p>
                  {playingWith === "zcoins" ? "Z" : "D"}{" "}
                  {initialGameInformation?.bet?.[0]?.money.prize.slice(1, 3)}
                </p>
              </div>
            </div>
            <div
              className="relative w-[60%] h-[18%] mx-auto"
              onClick={() => {
                window.location.href = gameUrl;
              }}
            >
              <ButtonSVG />
              <p className="w-full text-center absolute left-1/2 -translate-x-1/2 top-1/4 -translate-y-1/4 text-[8vw] [-webkit-text-stroke-width:0.94px] [-webkit-text-stroke-color:#000000] [text-shadow:0px_3.768px_0.942px_rgba(0,0,0,0.25)]">
                Play Now
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] h-[5vh]">
          <div>
            <p className="h-[5vh] grid place-content-center text-[6vw] [-webkit-text-stroke-width:0.6px] [-webkit-text-stroke-color:#000000] [text-shadow:0px_1.5px_0.942px_rgba(0,0,0,1)] [font-stretch:200%] pt-1 rounded-t-full rounded-b-lg bg-gradient-to-r from-[#109F9B] to-[#16C1BC]">
              Partidas Activas
            </p>
            <div className="w-full pb-2">
              {games.map((game, index) => (
                <div
                  key={index}
                  className="w-full h-[13vh] relative grid grid-cols-2 items-center bg-purple-900 text-white rounded-lg [&>div:nth-child(n+2)]:relative [&>div:nth-child(n+2)]:z-10"
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-full ${
                      games.length - 1 === index
                        ? "rounded-b-md pb-5"
                        : "rounded-bl-md"
                    }  bg-gradient-to-r  ${
                      index % 2
                        ? "from-[#109F9B] to-[#16C1BC]"
                        : "from-[#08EFC9] to-[#0AB599]"
                    }`}
                  />

                  <div
                    className={`w-full h-[13vh] [&>div]:bg-[#3B1578] flex flex-col m-0.5 ${
                      games.length - 1 === index ? "pb-0.5" : ""
                    }`}
                  >
                    <div className="text-xl font-bold h-[50%] mb-0.5">
                      {game.points} pts
                    </div>
                    <div className="text-lg h-[50%] mb-0.5 rounded-bl-lg">
                      {game.percentage}%
                    </div>
                  </div>

                  <div className="w-full h-[13vh] text-center ">
                    <Image
                      src="/reloj-prueba.png"
                      alt="Temporizador"
                      width={1000}
                      height={1000}
                      className="w-full h-[70%]"
                    />
                    <div className="text-lg h-[20%]">{game.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openBooster && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-screen z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <BoosterModal
              boosterInformation={
                boosterInformation ?? {
                  id: 0,
                  game_id: 0,
                  pow_coins: 0,
                  description: "",
                  name: "",
                  image: "",
                  amount: 0,
                  price_amount: 0,
                  main_booster: 0,
                }
              }
              handleClose={() => setOpenBooster(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Page;
