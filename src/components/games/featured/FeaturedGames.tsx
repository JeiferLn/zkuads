"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useGameStore } from "@/stores/useGameStore";
import GameCard from "../GameCard";
import FeatureGamesContainer from "@/components/containers/featureGames/FeatureGamesContainer";
import GameCardMobile from "../GameCardMobile";

const FeaturedGames: React.FC = () => {
  const HomeGamesTranslation = useTranslations("Index.HomeGames");
  const games = useGameStore((state) => state.gameList);

  return (
    <div
      className={`w-screen lg:w-full -ml-[5vw] lg:ml-[0vw] text-left pt-2 lg:px-[0vw] overflow-hidden`}
    >
      <div className="px-[5vw]">
        <FeatureGamesContainer />
      </div>

      <div className="mt-[1.5vh] px-[5vw] relative">
        <h2>{HomeGamesTranslation("FeaturedGames")}</h2>
      </div>
      <div className="my-1">
        <div className="w-[90%] mx-auto lg:w-full">
          <div className="grid grid-cols-2 gap-y-4 lg:hidden p-1">
            {games?.slice(0,4).map((game, index) => (
              <GameCardMobile
                key={game.game_id}
                image={game.image}
                name={game.name.toLowerCase().replace(" ", "-")}
                position={index}
              />
            ))}
          </div>
          {/* <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-4">
            {games?.slice(0, 3).map((game, index) => (
              <GameCard
                key={game.game_id}
                width="w-full"
                delay={index * 0.2 + 1.4}
                image={game.image}
                name={game.name.toLowerCase().replace(" ", "-")}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedGames;
