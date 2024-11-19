import React, { useEffect } from "react";
import Icons from "../Icons";
import Image from "next/image";
import BuyBoostersButton from "../containers/games/BuyBoostersButton";
import { BoosterInformation } from "@/app/[locale]/game/[game_name]/page";
import axiosTokenClient from "@/utils/axiosTokenClient";

function BoosterModal({
  boosterInformation,
  handleClose,
}: {
  boosterInformation: BoosterInformation;
  handleClose: () => void;
}) {
  const [quantity, setQuantity] = React.useState(1);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => {
      if (prev > 1) return prev - 1;
      return prev;
    });
  };

  const buyBooster = async () => {
    const res = await axiosTokenClient.post("/buy-booster", {
      booster_id: boosterInformation.id,
      game_id: boosterInformation.game_id,
      amount: quantity
    })

    if(res.status === 200) handleClose()
  }

  return (
    <div className="w-full h-full">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-[7px]"
        onClick={handleClose}
      />

      <div className="mt-[30%] w-[95%] mx-auto h-[45%] bg-[#5E4ACF] rounded-xl [box-shadow:5px_5px_11.1px_0px_rgba(9,251,211,0.50)] relative z-10">
        <div className="w-full h-[20%] bg-[#3C2B99] rounded-t-xl flex justify-center items-end relative">
          <div
            className="absolute bottom-[15%] left-[10%] w-9"
            onClick={handleClose}
          >
            <Icons name="ArrowBack" />
          </div>
          <h2 className="text-[8vw] pb-[2%]">{boosterInformation.name}!</h2>

          <div className="absolute -top-[30%] w-[95%] mx-auto flex justify-between [&>div]:bg-[#02132B] [&>div]:py-1 [&>div]:text-center [&>div]:rounded-2xl">
            <div className="px-2 flex gap-1 justify-center items-center">
              <div className="w-8">
                <Icons name="PowCoin" classname="w-full"/>
              </div>
              <p className="w-[80%] text-[6vw]">{boosterInformation.pow_coins}</p>
            </div>

            <div className="w-[20%]">
              <p className="text-[6vw]">x{boosterInformation.amount}</p>
            </div>
          </div>
        </div>

        <div className="w-full h-[82%] grid grid-rows-[70%,30%]">
          <div className="flex justify-between items-center px-[5%]">
            <div className="w-[50%] ml-[3%] relative">
              <Image
                src={`/boosters/main-booster${boosterInformation.main_booster}.png`}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-full object-center object-cover"
              />
              <div className="w-[70%] absolute left-[20%] top-[20%]">
                <Image
                  src={boosterInformation.image}
                  alt="booster-img"
                  width={1000}
                  height={1000}
                  className="w-full h-full"
                />
              </div>
            </div>
            <p className="w-[53%] text-[4vw]">
              {boosterInformation.description}
            </p>
          </div>

          <div className="w-[80%] mx-auto flex gap-6 justify-between items-start">
            <div className="w-[70%] h-[60%] relative">
              <BuyBoostersButton />
              <div className="w-full h-full relative z-10 grid place-content-center [&>div]:[-webkit-text-stroke-width:1.3px] [&>div]:[-webkit-text-stroke-color:#000] [&>div]:text-[12vw]">
                <div
                  className="absolute -left-[8%] top-1/2 -translate-y-1/2"
                  onClick={increment}
                >
                  {" "}
                  +{" "}
                </div>
                <p className="text-[8vw] [text-shadow:0px_1.689px_2.026px_rgba(0,0,0,0.60)] [-webkit-text-stroke-width:0.84px] [-webkit-text-stroke-color:#000]">
                  x{quantity}
                </p>
                <div
                  className="absolute -right-[8%] top-1/2 -translate-y-1/2"
                  onClick={decrement}
                >
                  {" "}
                  -{" "}
                </div>
              </div>
            </div>

            <div className="flex w-full h-[60%] relative" onClick={buyBooster}>
              <BuyBoostersButton />

              <div className="w-full h-full relative z-10 flex justify-center items-center gap-2">
                <p className="text-[8vw] [text-shadow:0px_1.689px_2.026px_rgba(0,0,0,0.60)] [-webkit-text-stroke-width:0.84px] [-webkit-text-stroke-color:#000]">
                  {boosterInformation.price_amount * quantity}
                </p>
                <div className="w-9">
                  <Icons name="PowCoin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoosterModal;
