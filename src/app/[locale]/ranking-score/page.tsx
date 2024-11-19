"use client";

import React, { useEffect, useState } from "react";
import UserScore from "@/components/rankeds/UserScore";
import useBestPlayerStore from "@/stores/useBestPlayerStore";
import axiosTokenClient from "@/utils/axiosTokenClient";
import Icons from "@/components/Icons";
import { useUserDetailsStore } from "@/stores/useUserDetails";

interface Player {
  user_id: string;
  username: string;
  score: number;
  teamID: number;
}

interface MePlayer {
  user_id: string;
  username: string;
  score: number;
  teamID: number;
  position: number;
}

interface Team {
  team_id: number;
  best_users: Player[];
}

function Page() {
  const userDetails = useUserDetailsStore((state) => state.userDetails);
  const bestPlayers = useBestPlayerStore((state) => state.bestPlayers);
  const setBestPlayers = useBestPlayerStore((state) => state.setBestPlayers);
  const zkuadScoreID = useBestPlayerStore((state) => state.zkuadScoreID);
  const idZkuadNavbar = useBestPlayerStore((state) => state.zkuadScoreID);
  const [isLoading, setIsLoading] = useState(true);
  const [mePlayer, setMePlayer] = useState<MePlayer>();

  const isUserTeam =
    bestPlayers.length > 10 &&
    (idZkuadNavbar === userDetails.teams[0]?.team_id || idZkuadNavbar === 4);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axiosTokenClient.get(
          `/Teams/scores/best_users_per_team/?${
            zkuadScoreID !== 4 ? "team_id=" + zkuadScoreID + "&" : ""
          }limit=10`
        );

        let players: Player[] = [];
        if (zkuadScoreID === 4) {
          players = res.data.flatMap((team: Team) =>
            team.best_users.map((user) => ({
              ...user,
              teamID: team.team_id,
              score: Number(user.score),
            }))
          );
        } else {
          players =
            res.data[0]?.best_users?.map((user: Player) => ({
              ...user,
              teamID: res.data[0].team_id,
              score: Number(user.score),
            })) || [];
        }

        setBestPlayers(players);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setBestPlayers, zkuadScoreID]);

  useEffect(() => {
    bestPlayers.find((player, index) => {
      player.username === userDetails.username &&
        setMePlayer({ ...player, position: index });
    });
  }, [bestPlayers, userDetails.username]);

  useEffect(() => {
    const currentUserPlayer = bestPlayers.find(
      (player) => player.username === "CurrentUser"
    );
    if (currentUserPlayer) {
      const index = bestPlayers.indexOf(currentUserPlayer);
      setMePlayer({ ...currentUserPlayer, position: index });
    }
  }, [bestPlayers ,userDetails.username]);

  if (isLoading) {
    return <div className="pt-[23vh] text-center">Loading...</div>;
  }

  return (
    <div className={`${isUserTeam ? "pt-[20vh]" : "pt-[24vh]"} relative z-0`}>
      <div
        className={`w-full grid place-content-center my-[0.5vh] text-[#18C4C1] ${
          isUserTeam ? "block" : "hidden"
        }`}
      >
        <Icons name="ArrowBack" classname="w-8 h-8 rotate-90" />
      </div>
      <div
        className={`w-full duration-200 ${
          isUserTeam ? "h-[60vh]" : "h-[74vh]"
        } overflow-y-auto`}
      >
        <div>
          {bestPlayers.length > 0 ? (
            bestPlayers?.map((player: Player, index: number) => (
              <UserScore
                key={player.user_id}
                position={index}
                zkuadID={zkuadScoreID === 4 ? player.teamID : zkuadScoreID}
                username={player.username}
                score={player.score}
              />
            ))
          ) : (
            <p className="w-full text-center">
              There is no record in the ranking
            </p>
          )}
        </div>
      </div>
      <div
        className={`w-full grid place-content-center my-[0.5vh] text-[#18C4C1] ${
          isUserTeam ? "block" : "hidden"
        }`}
      >
        <Icons name="ArrowBack" classname="w-8 h-8 -rotate-90" />
      </div>
      <div className={isUserTeam ? "block" : "hidden"}>
        {mePlayer && isUserTeam ? (
          <UserScore
            position={mePlayer.position}
            zkuadID={zkuadScoreID === 4 ? mePlayer.teamID : zkuadScoreID}
            username={mePlayer.username}
            score={mePlayer.score}
          />
        ) : (
          <p className="w-full text-center">You are not in the ranking.</p> 
        )}
      </div>
    </div>
  );
}

export default Page;
