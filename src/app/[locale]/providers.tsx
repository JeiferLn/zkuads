"use client";

import Cookies from "js-cookie";
import React, { useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Icons from "@/components/Icons";
import Modal from "@/components/Modal";

import axiosInstance from "@/utils/axiosInstance";
import axiosTokenClient from "@/utils/axiosTokenClient";

import { useGameStore } from "@/stores/useGameStore";
import { useErrorStore } from "@/stores/useErrorStore";
import useBestPlayerStore from "@/stores/useBestPlayerStore";
import { useUserDetailsStore } from "@/stores/useUserDetails";
import usePlayingWithStore from "@/stores/usePlayingWithStore";
import { useLeaderboardStore } from "@/stores/useLeaderboardStore";
import { useFocusPagesSession } from "@/hooks/useFocusPagesSession";

interface Player {
  user_id: string;
  username: string;
  score: number;
  teamID: number;
}

function Providers({ children }: { children: React.ReactNode }) {
  const [lastTeamId, setLastTeamId] = React.useState<string>("");

  const setGameList = useGameStore((state) => state.setGameList);
  const playingWith = usePlayingWithStore((state) => state.playingWith);
  const userDetails = useUserDetailsStore((state) => state.userDetails);
  const setLeaderBoard = useLeaderboardStore((state) => state.setLeaderboard);
  const setUserDetails = useUserDetailsStore((state) => state.setUserDetails);

  const { error, resetError } = useErrorStore((state) => ({
    error: state.error,
    resetError: state.reset,
  }));

  const setInitialBestPlayers = useBestPlayerStore(
    (state) => state.setBestPlayers
  );

  useFocusPagesSession(async () => {
    if (!Cookies.get("access_token") && Cookies.get("refresh_token")) {
      const res = await axiosInstance.post(
        "/Jwt/jwt/refresh/",
        {
          refresh: Cookies.get("refresh_token"),
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("refresh_token")}`,
          },
        }
      );
      Cookies.set("access_token", res.data.access, {
        expires: 0.0208333,
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("expire_token", String(Math.floor(Date.now()) + 1800000), {
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set(
        "team_id",
        userDetails.teams[0].team_id.toString() || lastTeamId,
        {
          expires: 0.0208333,
          secure: true,
          sameSite: "Strict",
        }
      );

      window.location.reload();
    }
  });

  const listGames = useCallback(async () => {
    try {
      const response = await axiosTokenClient.get("/game-list");
      setGameList(response.data.games);
    } catch (error) {
      console.error("Error fetching game list:", error);
    }
  }, [setGameList]);

  const leaderboardList = useCallback(
    async (playingWith: string) => {
      try {
        const res = await axiosTokenClient.get(
          `/Teams/scores/list_teams?mode=${
            playingWith === "zcoins" ? "real_mode" : "fun_mode"
          }`
        );
        setLeaderBoard(res.data);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    },
    [setLeaderBoard]
  );

  const rankingInitialList = useCallback(async () => {
    try {
      const team_id = Cookies.get("team_id");

      const res = await axiosTokenClient.get(
        `/Teams/scores/best_users_per_team/?${
          "team_id=" + team_id + "&"
        }limit=10`
      );

      const players = res.data[0].best_users?.map((user: Player) => ({
        ...user,
      }));

      setInitialBestPlayers(players);
    } catch (error) {
      console.error(error);
    }
  }, [setInitialBestPlayers]);

  useEffect(() => {
    if (Cookies.get("access_token") && Cookies.get("team_id")) {
      const handleUserDetails = async () => {
        try {
          const user_data = await axiosTokenClient.get("/Users/user-details/");
          setUserDetails(user_data.data.user);

          if (user_data.data.user.teams?.length > 0) {
            setLastTeamId(user_data.data.user.teams[0].team_id.toString());
          }

          listGames();
          rankingInitialList();
        } catch (error) {
          console.error(error);
        }
      };

      handleUserDetails();
    }
  }, [
    setUserDetails,
    setLastTeamId,
    listGames,
    leaderboardList,
    rankingInitialList,
    userDetails.email,
  ]);

  useEffect(() => {
    if (Cookies.get("access_token") && Cookies.get("team_id")) {
      leaderboardList(playingWith);
    }
  }, [playingWith, leaderboardList, userDetails.email]);

  useEffect(() => {
    if (error.messageError !== "") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [error]);

  return (
    <>
      {children}
      <AnimatePresence>
        {error && error.messageError !== "" && (
          <div>
            <motion.div
              className="hidden lg:flex absolute top-0 left-0 w-screen h-screen justify-center items-center bg-black/30 backdrop-blur-sm z-10"
              onClick={resetError}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.1 } }}
              transition={{ type: "spring", duration: 0.4 }}
            >
              <div className="w-2/6 h-2/5 bg-[#021735] grid place-content-center text-center rounded-2xl">
                <div className="w-1/2 mx-auto pb-5">
                  <Icons name="Error" />
                </div>
                <h1 className="text-3xl mb-3">Error {error.codeError}</h1>
                <p>{error.messageError}</p>
              </div>
            </motion.div>
            <div className="lg:hidden">
              <Modal
                codeError={error.codeError}
                messageError={error.messageError}
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Providers;
