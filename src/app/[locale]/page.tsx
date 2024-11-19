"use client";

import React from "react";
import Slider from "@/components/Slider";
import LineDivider from "@/components/LineDivider";
import Button from "@/components/Button";
import Link from "next/link";
import ZkuadLeaderboard from "@/components/zquads/ZkuadLeaderboard";
import Banner from "@/components/Banner";
import FeaturedGames from "@/components/games/featured/FeaturedGames";
import { formatNumber } from "@/utils/formatNumber";
import Image from "next/image";
import { useTranslations } from "next-intl";
import UserOnlineCard from "@/components/games/UserOnlineCard";
import TournamentCard from "@/components/games/TournamentCard";
import Cookies from "js-cookie";
import { useUserDetailsStore } from "@/stores/useUserDetails";
import { motion } from "framer-motion";
import { useLeaderboardStore } from "@/stores/useLeaderboardStore";
import Icons from "@/components/Icons";
import ChallengePage from "@/components/challenges/ChallengePage";
import LoginGoogle from "@/components/login/LoginGoogle";
import LoginDiscord from "@/components/login/LoginDiscord";
import SpinnerSVG from "@/components/SpinnerSVG";
import { useSpinnerStore } from "@/stores/useSpinnerStore";

const Page: React.FC = () => {
  const teamID = Cookies.get("team_id");
  const buttonsTranslation = useTranslations("Buttons");

  const { userDetails } = useUserDetailsStore();
  const leaderboardData = useLeaderboardStore((state) => state.leaderboard);
  const loadingSpinner = useSpinnerStore((state) => state.loadingSpinnerSVG);
  const setSwitchSpinner = useSpinnerStore(
    (state) => state.setSwithSpinnerSVG
  );

  return (
    <div>
      {/* Mobile */}

      <div className={`lg:hidden`}>
        {userDetails.email && teamID ? (
          // // Logged in
          <div className="[&>div]:pt-[20vh] overflow-y-auto overflow-x-hidden w-full relative h-screen snap-y snap-mandatory">
            <div className="h-screen snap-center px-[5%]">
              <Banner />
              <div className="">
                <ZkuadLeaderboard zkuadList={leaderboardData} />
              </div>
              <div className="relative mt-2 mb-10">
                <FeaturedGames />
              </div>

              <div className="absolute bottom-0 left-0 w-screen h-[4.5%] bg-[#09FBD3] [clip-path:polygon(0%_40%,35%_40%,37%_0%,63%_0%,65%_40%,100%_40%,100%_100%,0%_100%)]">
                <div className="absolute top-0 left-0 w-full h-full bg-[#4C2472] [clip-path:polygon(0%_45%,35.5%_45%,37.5%_5%,62.5%_5%,64.5%_45%,100%_45%,100%_95%,0%_95%)]" />
                <div className="w-full h-full grid place-content-center relative z-10">
                  <p>Challenges</p>
                </div>
              </div>
            </div>

            <div className="relative h-screen snap-center">
              <ChallengePage />
            </div>
          </div>
        ) : (
          // Not Logged in
          <div>
            <div className="px-[5%]">
              <Slider />
            </div>

            <div className="grid grid-cols-1 text-center gap-y-4 px-[5%]">
              <LoginGoogle />

              <LoginDiscord />
            </div>
            <LineDivider text="Or" className="my-3 w-[85%] mx-auto" />
            <Link href={"/auth/login"} className="relative">
              <button
                type="button"
                onClick={setSwitchSpinner}
                className="w-[85%] h-[3.125rem] rounded-full mx-auto bg-[#3B1578] flex justify-center items-center py-[12px] gap-2 relative"
              >
                {loadingSpinner ? (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-full h-full">
                    <SpinnerSVG />
                  </div>
                ) : (
                  <>
                    <div className="w-5">
                      <Icons name="Mail" />
                    </div>
                    {buttonsTranslation("Email")}
                  </>
                )}
              </button>
            </Link>
          </div>
        )}
      </div>
      {/* Desktop */}
      <div className="hidden lg:block">
        {userDetails.email && teamID ? (
          // Logged in
          <>
            <Banner />
            <ZkuadLeaderboard zkuadList={leaderboardData} />
            <motion.div
              className="hidden my-6 lg:block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.4, type: "spring" }}
            >
              <Button type="button" className="w-full" mainButton>
                Play Now
              </Button>
            </motion.div>
            <div className="lg:grid lg:grid-cols-3 lg:gap-6 grid-rows-2 h-[80vh]">
              <div className="col-span-2">
                <FeaturedGames />
              </div>
              <div className="bg-opacity-10 bg-white col-start-3 row-[1/3] rounded-xl p-4">
                <div className="flex justify-between mb-5">
                  <span>Players Online</span>
                  <span className="text-white bg-emerald-500 px-4 py-0.5 rounded-2xl">
                    {formatNumber(758412)}
                  </span>
                </div>
                <div className="h-[95%] p-2 pt-0 overflow-y-auto relative">
                  <UserOnlineCard />
                  <UserOnlineCard />
                  <UserOnlineCard />
                  <UserOnlineCard />
                  <UserOnlineCard />
                  <UserOnlineCard />
                  <UserOnlineCard />
                  <UserOnlineCard />
                  <UserOnlineCard />
                  <UserOnlineCard />
                  <UserOnlineCard />
                  <UserOnlineCard />
                  <UserOnlineCard />
                  <UserOnlineCard />
                  <UserOnlineCard />
                  <UserOnlineCard />
                  <UserOnlineCard />
                  <UserOnlineCard />
                  <UserOnlineCard />
                  <UserOnlineCard />
                </div>
              </div>
              <div className="col-span-1 py-4 pb-5 bg-white bg-opacity-10 rounded-xl">
                <span className="px-4">Tournaments</span>
                <div className="h-[95%] pt-2 px-4 overflow-y-auto relative">
                  <TournamentCard />
                  <TournamentCard />
                  <TournamentCard />
                  <TournamentCard />
                </div>
              </div>
              <div>
                <span className="h-[10%]">Recently Played</span>
                <div className="mt-4 h-[90%] flex flex-col gap-4">
                  <div className="w-full overflow-hidden rounded-xl">
                    <Image
                      src="/example-img.png"
                      className="object-cover w-full h-full"
                      width={500}
                      height={500}
                      alt="defaultImage"
                    />
                  </div>
                  <div className="w-full overflow-hidden rounded-xl">
                    <Image
                      src="/example-img.png"
                      className="object-cover w-full h-full"
                      width={500}
                      height={500}
                      alt="defaultImage"
                    />
                  </div>
                  <div className="w-full overflow-hidden rounded-xl">
                    <Image
                      src="/example-img.png"
                      className="object-cover w-full h-full"
                      width={500}
                      height={500}
                      alt="defaultImage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Not Logged in
          <>
            <Slider />
            <FeaturedGames></FeaturedGames>
            <Button type="button" className="w-full mt-4" icon="Plus">
              {buttonsTranslation("MoreGames")}
            </Button>
            <Banner />
            <ZkuadLeaderboard zkuadList={leaderboardData} />
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
