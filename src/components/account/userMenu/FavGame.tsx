import Image from "next/image";
import React from "react";


const FavGame: React.FC = () => {
  return (
    <div className="mt-[2vh] flex flex-col gap-3">
      <div className="relative h-[8vh] w-full">
        <Image
          src="/game-name/fruit-finder.png"
          alt="img-game"
          width={1000}
          height={1000}
          className="w-auto h-[120%] -top-[12.5%] left-0 absolute z-10"
        />
        <div className="relative w-full h-full [clip-path:polygon(7%_0%,100%_0%,98%_100%,5%_100%)]">
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent to-black " />
          <Image
            src="/example-img.png"
            alt="img-game"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <div className="relative h-[8vh] w-full">
        <Image
          src="/game-name/gems-blast.png"
          alt="img-game"
          width={1000}
          height={1000}
          className="w-auto h-[120%] -top-[12.5%] left-0 absolute z-10"
        />
        <div className="relative w-full h-full [clip-path:polygon(7%_0%,100%_0%,98%_100%,5%_100%)]">
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent to-black " />
          <Image
            src="/example-img.jpg"
            alt="img-game"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <div className="relative h-[8vh] w-full">
        <Image
          src="/game-name/fruit-finder.png"
          alt="img-game"
          width={1000}
          height={1000}
          className="w-auto h-[120%] -top-[12.5%] left-0 absolute z-10"
        />
        <div className="relative w-full h-full [clip-path:polygon(7%_0%,100%_0%,98%_100%,5%_100%)]">
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent to-black " />
          <Image
            src="/example-img.png"
            alt="img-game"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default FavGame;
