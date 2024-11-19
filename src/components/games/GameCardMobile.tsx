"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface GameCardMobileProps {
  image: string;
  name: string;
  position: number;
}

const GameCardMobile: React.FC<GameCardMobileProps> = ({ image, name, position }) => {

  const router = useRouter();

  let boxShadow = position === 1 || position === 2 ? "[box-shadow:1.858px_-1.858px_2.477px_0px_#ECE082,_1.858px_1.858px_2.601px_0px_#ECE082]" : "[box-shadow:2.69px_2.69px_3.76px_0px_#1DCDCF]"

  return (
    <div
      className={`inline-block h-[11vh] w-[90%] mx-auto`}
      onClick={() => router.push("/game/" + name)}
    >
      <div className={`w-full h-full relative bg-gradient-to-r p-1 from-[#FBBC0D] to-[#EE880C] rounded-xl ${boxShadow}`}>
        <div className="w-full h-full absolute p-0.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src={image}
            className="w-full h-full rounded-lg object-center object-cover"
            width={500}
            height={500}
            alt="image"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default GameCardMobile;
