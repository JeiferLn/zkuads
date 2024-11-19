import React, { useEffect } from "react";
import ZkuadCard from "@/components/zquads/ZkuadCard";
import usePlayingWithStore from "@/stores/usePlayingWithStore";

interface ListProps {
  id: number;
  name: string;
  score_fun: number;
  score_real: number;
}

interface ZkuadLeaderboardProps {
  zkuadList: ListProps[];
}

const ZkuadLeaderboard = ({ zkuadList }: ZkuadLeaderboardProps) => {
  const playingWith = usePlayingWithStore((state) => state.playingWith);
    

  const colorZkuad = (zkuadId: number) => {
    if (zkuadId === 1) {
      return "blue";
    } else if (zkuadId === 2) {
      return "yellow";
    } else if (zkuadId === 3) {
      return "red";
    }
  };

  return (
    <div className="w-[95%] mx-auto lg:w-full grid grid-cols-2 lg:grid-cols-3 mt-5 lg:gap-10 gap-4 ">
      {zkuadList.map((zkuad, index) => (
        <ZkuadCard
          key={zkuad.id}
          zkuad={colorZkuad(zkuad.id) || ""}
          firstPosition={index === 0}
          postions={index}
          score={playingWith === "zcoins" ? zkuad.score_real : zkuad.score_fun}	
          classnameImage="w-2/6 -right-3"
        />
      ))}
    </div>
  );
};

export default ZkuadLeaderboard;
