"use client";

import React from "react";
import { formatNumber } from "@/utils/formatNumber";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface ZkuadCardProps {
  classnameImage?: string;
  zkuad: string;
  postions: number;
  score: number;
  firstPosition?: boolean;
  delay?: number;
}

const ZkuadCard: React.FC<ZkuadCardProps> = ({
  classnameImage,
  zkuad,
  score,
  firstPosition,
  delay,
}) => {
  const router = useRouter();

  const zkuadInformation = {
    bgGradient: {
      from: "",
      to: "",
    },
    bgborderZkuad: "",
    imgZkuad: "",
  };

  zkuadInformation.bgGradient.from =
    zkuad === "red"
      ? "from-[#690409]"
      : zkuad === "blue"
      ? "from-[#1CA4DF]"
      : "from-[#F8B20D]";

    zkuadInformation.bgGradient.to = 
    zkuad === "red"
    ? "to-[#CF0812]"
    : zkuad === "blue"
    ? "to-[#0774A2]"
    : "to-[#FFD700]";

  zkuadInformation.bgborderZkuad =
    zkuad === "red"
      ? "bg-[#EF0F19]"
      : zkuad === "blue"
      ? "bg-[#1956BE]"
      : "bg-[#B67C00]";

  zkuadInformation.imgZkuad =
    zkuad === "red"
      ? "/zkuad-icon/red-shield.png"
      : zkuad === "blue"
      ? "/zkuad-icon/blue-shield.png"
      : "/zkuad-icon/yellow-shield.png";

  return (
    <motion.div
      className={`${firstPosition ? "col-[1/3] h-[16vw]" : ""} relative z-0`}
      // initial={{ opacity: 0, y: -100 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ delay: delay, duration: 0.4, type: "spring" }}
      onClick={() => router.push(`/ranking-score`)}
    >
      <div
        className={`absolute ${
          firstPosition
            ? "-top-[1vh] left-[2vw] w-[18vw] h-[18vw]"
            : "-top-[1vh] -right-[3.7vw] w-[15vw] h-[15vw]"
        } z-10 [clip-path:polygon(50%_0%,95%_25%,95%_75%,50%_100%,5%_75%,5%_25%)] ${
          zkuadInformation.bgborderZkuad
        } flex items-center justify-center`}
      >
        <div
          className={`${classnameImage} w-full h-full p-1 [clip-path:polygon(50%_5%,90%_28%,90%_72%,50%_95%,10%_72%,10%_28%)] bg-white flex items-center justify-center`}
        >
          <Image
            src={zkuadInformation.imgZkuad}
            width={100}
            height={100}
            alt="logo-zkuad"
            className={
              firstPosition ? "w-[13vw] h-[13vw]" : "w-[10vw] h-[10vw]"
            }
          />
        </div>
      </div>

      <div
        className={`px-4 py-2 bg-[url('/example-img.png')] ${
          firstPosition ? "h-[16vw] justify-center [clip-path:polygon(20%_0%,100%_0%,95%_100%,7%_100%)]" : "pl-[20%] [clip-path:polygon(20%_0%,100%_0%,80%_100%,0%_100%)]"
        } bg-cover bg-center text-left relative flex items-center`}
      >
        <div
          className={`absolute w-full h-full inset-0 bg-gradient-to-r ${zkuadInformation.bgGradient.from}  ${zkuadInformation.bgGradient.to} opacity-85`}
        />
        <div className="relative z-10 text-center">
          <h3 className="text-white text-md lg:text-3xl lg:mb-3 [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
            {formatNumber(score)} pts
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default ZkuadCard;
