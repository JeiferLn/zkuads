"use client";

import Image from "next/image";
import React from "react";
import { poppins } from "./Fonts";
import { motion } from "framer-motion";
import usePlayingWithStore from "@/stores/usePlayingWithStore";

const Banner: React.FC = () => {
  const amount = 6837;
  const playingWith = usePlayingWithStore((state) => state.playingWith);

  const information = {
    bgTime: playingWith === "zcoins" ? "bg-[#84FDE9]" : "bg-[#FF6AF0]",
  };

  return (
    <motion.div className={`w-full h-[22vh] relative select-none`}>
      <div className="relative w-full">
        <div className="absolute -left-[5.5%] lg:h-96 w-screen">
          <div
            className={`${poppins.className} w-[28%] absolute top-0 text-start p-1 gap-1 [text-shadow:2px_2px_4px_#00000080] [clip-path:polygon(0%_0%,100%_0%,90%_100%,0%_100%)] ${information.bgTime} duration-100`}
          >
            <span className="text-[3.5vw] [-webkit-text-stroke-width:0.3px] [-webkit-text-stroke-color:#000]">
              6d :15h : 43m
            </span>
          </div>

          <Image
            src={
              playingWith === "zcoins"
                ? "/jackpots/jackpot-mobile-zcoins.png"
                : "/jackpots/jackpot-mobile-diamonds.png"
            }
            width={1440}
            height={1440}
            alt="Weekly Jackpot"
            className="w-full h-full lg:hidden"
            priority
          />

          <div className="w-full h-full absolute top-0 left-0 flex justify-center text-[15vw] font-showcard-gothic [&>p]:absolute [&>p]:-bottom-[7%] overflow-hidden z-0">
            {/* inner text */}
            <p className="bg-gradient-to-b from-[#FFFF00] to-[#FF7500] bg-clip-text text-transparent z-[60]">
              ${amount}
            </p>

            <p className="scale-y-[1.01] pr-[1px] pb-[1px] z-50">
              ${amount}
            </p>

            <p className="scale-x-[1.01] bg-gradient-to-r from-[#B35A00] to-[#944200] bg-clip-text text-transparent -bottom-[1%] pr-0.5 z-40">
              ${amount}
            </p>

            <p className="scale-x-[1.01] text-[#B85A00] -bottom-[1.5%] pr-0.5 [text-shadow:0px_1px_5px_rgba(0,0,0,0.8)] z-30">
              ${amount}
            </p>

            {/* outer text */}
            <p className="scale-x-[1.4] scale-y-[1.22] [letter-spacing:-8px] pt-[1%] pr-[2%] bg-[radial-gradient(circle,#73D7E1,#018BBD)] bg-clip-text text-transparent z-20">${amount}</p>

            <p className=" text-[#1F90AE] scale-x-[1.5] scale-y-[1.3] [letter-spacing:-9px] pt-[1%] pr-[2.25%] [text-shadow:0px_5px_5px_rgba(0,0,0,1)] z-10">
              ${amount}
            </p>

            <p className=" text-[#005C89] scale-x-[1.5] scale-y-[1.3] [letter-spacing:-11px] pt-[20%] pr-[2.25%] [text-shadow:0px_5px_5px_rgba(0,0,0,1)]">
              ${amount}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
