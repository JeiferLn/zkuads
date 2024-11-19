import Button from "@/components/Button";
import usePlayingWithStore from "@/stores/usePlayingWithStore";
import { useUserDetailsStore } from "@/stores/useUserDetails";
import React from "react";

function Booster() {
  const coin = usePlayingWithStore((state) => state.playingWith);
  const zkuadID = useUserDetailsStore(
    (state) => state.userDetails.teams?.[0]?.team_id
  );  

  const zkuadColor =
    zkuadID === 1
      ? "bg-zkuad-gradient-blue-from"
      : zkuadID === 2
      ? "bg-zkuad-gradient-yellow-from"
      : "bg-zkuad-gradient-red-from";

  return (
    <div className="lg:mt-3 min-w-[30vw] lg:min-w-full">
      <div className="w-full">
        <div className="relative bg-[url('/example-img.jpg')] bg-center bg-cover w-full h-32 mb-3 rounded-xl">
          <div className="flex flex-col lg:pl-5 justify-center items-center lg:items-start absolute top-0 left-0 w-full h-full bg-black/40 rounded-xl">
            <h2>Booster 1</h2>
            <p>Description</p>
          </div>
          <p className="absolute top-0 right-0 lg:right-5 lg:top-1/2 lg:translate-y-[calc(-50%)] lg:text-5xl">
            X5
          </p>
        </div>
        {coin === "diamond" ? (
          <Button type="button" mainButton smallSize className={`w-full py-2`}>
            Buy Cost
          </Button>
        ) : (
          <Button type="button" className={`w-full py-2 ${zkuadColor}`}>
            Buy Cost
          </Button>
        )}
      </div>
    </div>
  );
}

export default Booster;
