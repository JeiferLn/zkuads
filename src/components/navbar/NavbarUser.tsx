"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ZkuadsLogo from "../zquads/ZkuadsLogo";
import ProfilePicture from "../account/ProfilePicture";
import CurrencySwitcher from "./CurrencySwitcher";
import LocaleSwitcher from "./LocaleSwitcher";
import SearchInput from "./SearchInput";
import UserMenu from "../account/UserMenu";
import usePlayingWithStore from "@/stores/usePlayingWithStore";
import { usePathname, useRouter } from "next/navigation";
import Icons from "../Icons";
import useBestPlayerStore from "@/stores/useBestPlayerStore";
import NavbarSVG from "../containers/navbar/NavbarSVG";
import YellowContainerOpen from "../containers/ranking/YellowContainerOpen";
import BlueContainerOpen from "../containers/ranking/BlueContainerOpen";
import GeneralContainerOpen from "../containers/ranking/GeneralContainerOpen";
import RedContainerOpen from "../containers/ranking/RedContainerOpen";
import NotificationsModal from "./notifications/NotificationsModal";
import axiosTokenClient from "@/utils/axiosTokenClient";
import { useGameStore } from "@/stores/useGameStore";

interface NavbarUserProps {
  zkuad: string;
}

const NavbarUser: React.FC<NavbarUserProps> = ({ zkuad }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [notification, setNotification] = useState(0);
  const [openNotification, setOpenNotification] = useState(false);
  const [zkuadOpenRanked, setZkuadOpenRanked] = useState(zkuad);
  const [menuOpened, setMenuOpened] = useState(false);
  const [visible, setVisible] = useState(false);
  const setNameZkuad = useBestPlayerStore((state) => state.setNameZkuad);
  const playingWith = usePlayingWithStore((state) => state.playingWith);

  const toggleMenu = () => {
    setVisible(true);
    setTimeout(() => {
      setMenuOpened(!menuOpened);
    }, 100);
  };

  const zkuadInformation = {
    navbar: {
      bgIcon: "",
      borderColor: "",
      shadowColor: "",
      textColor: "",
    },
  };

  useEffect(() => {
    if (pathname.startsWith("/ranking-score")) {
      let zkuadID =
        zkuadOpenRanked === "general"
          ? 4
          : zkuadOpenRanked === "blue"
          ? 1
          : zkuadOpenRanked === "yellow"
          ? 2
          : 3;
      setNameZkuad(zkuadID);
    }
  }, [zkuadOpenRanked, setNameZkuad, pathname]);

  switch (zkuad) {
    case "blue":
      zkuadInformation.navbar.bgIcon = "text-[#020653]";
      zkuadInformation.navbar.borderColor = "#020653";
      zkuadInformation.navbar.shadowColor = "text-shadow-blue";
      zkuadInformation.navbar.textColor = "[-webkit-text-stroke-color:#020653]";
      break;
    case "yellow":
      zkuadInformation.navbar.bgIcon = "text-[#534602]";
      zkuadInformation.navbar.borderColor = "#534602";
      zkuadInformation.navbar.shadowColor = "text-shadow-yellow";
      zkuadInformation.navbar.textColor = "[-webkit-text-stroke-color:#534602]";
      break;
    case "red":
      zkuadInformation.navbar.bgIcon = "text-[#6C0101]";
      zkuadInformation.navbar.borderColor = "#6C0101";
      zkuadInformation.navbar.shadowColor = "text-shadow-red";
      zkuadInformation.navbar.textColor = "[-webkit-text-stroke-color:#6C0101]";
      break;
    default:
      break;
  }

  useEffect(() => {
    const getNotification = async () => {
      const res = await axiosTokenClient("/Users/notifications/");

      setNotification(res.data.length);
    };

    getNotification();
  }, []);

  return (
    <>
      {pathname === "/ranking-score" ? (
        <div className="fixed h-[20vh] top-0 w-full text-center py-6 pb-3 lg:pb-6 lg:text-left lg:px-[7.5%] z-20 overflow-hidden lg:rounded-none">
          <div className="absolute bottom-0 left-0 w-screen h-full">
            {zkuadOpenRanked === "blue" ? (
              <div className="[&>p]:[-webkit-text-stroke-width:0.52px] [&>p]:[-webkit-text-stroke-color:#000000]">
                <BlueContainerOpen
                  changeZkuadList={(colorZkuad: string) =>
                    setZkuadOpenRanked(colorZkuad)
                  }
                />
                <p
                  className="absolute bottom-[0.5%] left-[7%] -translate-x-[3vw] font-long-shot text-[5.5vw]"
                  onClick={() => setZkuadOpenRanked("yellow")}
                >
                  SERAFICO
                </p>
                <p
                  className="absolute bottom-[0.5%] left-[35%] -translate-x-[3vw] font-long-shot text-[5.5vw]"
                  onClick={() => setZkuadOpenRanked("blue")}
                >
                  MASTER
                </p>
                <p
                  className="absolute bottom-[0.5%] left-[64%] -translate-x-[3vw] font-long-shot text-[5.5vw]"
                  onClick={() => setZkuadOpenRanked("red")}
                >
                  ALCE
                </p>
                <p
                  className="absolute bottom-[0.5%] left-[86%] -translate-x-[3vw] font-long-shot text-[5.5vw]"
                  onClick={() => setZkuadOpenRanked("general")}
                >
                  GENERAL
                </p>
              </div>
            ) : zkuadOpenRanked === "yellow" ? (
              <div className="[&>p]:[-webkit-text-stroke-width:0.52px] [&>p]:[-webkit-text-stroke-color:#000000]">
                <YellowContainerOpen
                  changeZkuadList={(colorZkuad: string) =>
                    setZkuadOpenRanked(colorZkuad)
                  }
                />
                <p
                  className="absolute bottom-[0.5%] left-[7%] -translate-x-[3vw] font-long-shot text-[5.5vw]"
                  onClick={() => setZkuadOpenRanked("yellow")}
                >
                  SERAFICO
                </p>
                <p
                  className="absolute bottom-[0.5%] left-[35%] -translate-x-[3vw] font-long-shot text-[5.5vw]"
                  onClick={() => setZkuadOpenRanked("blue")}
                >
                  MASTER
                </p>
                <p
                  className="absolute bottom-[0.5%] left-[64%] -translate-x-[3vw] font-long-shot text-[5.5vw]"
                  onClick={() => setZkuadOpenRanked("red")}
                >
                  ALCE
                </p>
                <p
                  className="absolute bottom-[0.5%] left-[86%] -translate-x-[3vw] font-long-shot text-[5.5vw]"
                  onClick={() => setZkuadOpenRanked("general")}
                >
                  GENERAL
                </p>
              </div>
            ) : zkuadOpenRanked === "red" ? (
              <div className="[&>p]:[-webkit-text-stroke-width:0.52px] [&>p]:[-webkit-text-stroke-color:#000000]">
                <RedContainerOpen
                  changeZkuadList={(colorZkuad: string) =>
                    setZkuadOpenRanked(colorZkuad)
                  }
                />
                <p
                  className="absolute bottom-[0.5%] left-[7%] -translate-x-[3vw] font-long-shot text-[5.5vw]"
                  onClick={() => setZkuadOpenRanked("yellow")}
                >
                  SERAFICO
                </p>
                <p
                  className="absolute bottom-[0.5%] left-[35%] -translate-x-[3vw] font-long-shot text-[5.5vw]"
                  onClick={() => setZkuadOpenRanked("blue")}
                >
                  MASTER
                </p>
                <p
                  className="absolute bottom-[0.5%] left-[64%] -translate-x-[3vw] font-long-shot text-[5.5vw]"
                  onClick={() => setZkuadOpenRanked("red")}
                >
                  ALCE
                </p>
                <p
                  className="absolute bottom-[0.5%] left-[86%] -translate-x-[3vw] font-long-shot text-[5.5vw]"
                  onClick={() => setZkuadOpenRanked("general")}
                >
                  GENERAL
                </p>
              </div>
            ) : (
              <div className="[&>p]:[-webkit-text-stroke-width:0.52px] [&>p]:[-webkit-text-stroke-color:#000000]">
                <GeneralContainerOpen
                  changeZkuadList={(colorZkuad: string) =>
                    setZkuadOpenRanked(colorZkuad)
                  }
                />
                <p
                  className="absolute bottom-[0.5%] left-[7%] -translate-x-[3vw] font-long-shot text-[5.5vw]"
                  onClick={() => setZkuadOpenRanked("yellow")}
                >
                  SERAFICO
                </p>
                <p
                  className="absolute bottom-[0.5%] left-[35%] -translate-x-[3vw] font-long-shot text-[5.5vw]"
                  onClick={() => setZkuadOpenRanked("blue")}
                >
                  MASTER
                </p>
                <p
                  className="absolute bottom-[0.5%] left-[64%] -translate-x-[3vw] font-long-shot text-[5.5vw]"
                  onClick={() => setZkuadOpenRanked("red")}
                >
                  ALCE
                </p>
                <p
                  className="absolute bottom-[0.5%] left-[86%] -translate-x-[3vw] font-long-shot text-[5.5vw]"
                  onClick={() => setZkuadOpenRanked("general")}
                >
                  GENERAL
                </p>
              </div>
            )}
          </div>

          <div className="w-full absolute top-1/3 -translate-y-1/3">
            <div className="grid grid-cols-3 items-center">
              <div
                className="w-8 relative pl-[10%] -mt-[0.5vh]"
                onClick={() => {
                  router.back();
                  setTimeout(() => {
                    setZkuadOpenRanked(zkuad);
                  }, 500);
                }}
              >
                <Icons name="ArrowBack" classname="relative w-8 z-10" />
                <Icons
                  name="ArrowBack"
                  classname={`${zkuadInformation.navbar.bgIcon} w-8 absolute top-0.5 left-[4vw]`}
                />
              </div>
              <div className="w-full mx-auto pl-1/2 mb-1">
                <ZkuadsLogo initial="visible" />
              </div>
            </div>
            <p
              className={`text-[7vw] [-webkit-text-stroke-width:0.66px] ${zkuadInformation.navbar.textColor} ${zkuadInformation.navbar.shadowColor} w-full text-start pl-[10%]`}
            >
              Ranking
            </p>
          </div>
        </div>
      ) : pathname.startsWith("/game") ? (
        <div className="fixed top-0 w-full h-[18vh] px-[5%] text-center py-6 pb-3 lg:pb-6 lg:text-left lg:px-[7.5%] z-10 overflow-hidden lg:rounded-none">
          <div className="absolute bottom-0 left-0 w-screen h-full">
            <NavbarSVG zkuad={zkuad} />
          </div>

          <Link href="/" className="relative">
            <ZkuadsLogo className="inline-block w-[32vw]" initial="visible" />
          </Link>

          <div
            className="absolute top-[20%] left-[4%] w-[8vw]"
            onClick={() => router.back()}
          >
            <Icons name="ArrowBack" />
          </div>

          <div className="flex flex-col items-end justify-center pb-[15%] mt-3 lg:mt-0 lg:justify-normal lg:absolute lg:right-[7.5%] top-0 h-full">
            <div className="mb-[5%]">
              <CurrencySwitcher />
            </div>
          </div>
        </div>
      ) : (
        <>
          <motion.div
            className="fixed top-0 w-full h-[18vh] px-[5%] text-center py-6 pb-3 lg:pb-6 lg:text-left lg:px-[7.5%] z-10 overflow-hidden lg:rounded-none"
            initial={{ y: 0 }}
            animate={{ y: visible ? -200 : 0 }}
            transition={{
              duration: 0.1,
            }}
          >
            <div className="absolute bottom-0 left-0 w-screen h-full">
              <NavbarSVG zkuad={zkuad} />
            </div>

            <div
              className={
                pathname.startsWith("/transaction-history")
                  ? `grid grid-cols-3 items-center`
                  : ""
              }
            >
              {pathname.startsWith("/transaction-history") && (
                <div className="w-[8vw] z-10" onClick={() => router.back()}>
                  <Icons name="ArrowBack" />
                </div>
              )}
              <Link href="/" className="relative">
                <ZkuadsLogo
                  className="inline-block w-[32vw]"
                  initial="visible"
                />
              </Link>
            </div>

            <div className="relative flex justify-between items-center pb-[22%] mt-3 lg:mt-0 lg:justify-normal lg:absolute lg:right-[7.5%] top-0 h-full">
              <SearchInput className="hidden mr-2 lg:inline-grid"></SearchInput>

              <div
                onClick={toggleMenu}
                className="flex items-center justify-center lg:hidden"
              >
                <ProfilePicture className="w-[16vw] -top-[1.5vh] left-[10%]" />
              </div>

              <div
                className="absolute translate-y-1/4 left-[22.5%] w-[6vw]"
                onClick={() => setOpenNotification(true)}
              >
                <Icons name="Notifications" />

                {notification > 0 && (
                  <div
                    className={`absolute -top-[0.5vh] right-0 w-[3.5vw] h-[2vh] ${
                      playingWith === "zcoins" ? "bg-[#FD00EE]" : "bg-[#1ECDCF]"
                    }`}
                  >
                    <p className="text-[3vw]">{notification}</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col items-end justify-center pt-[2%] mt-3 lg:mt-0 lg:justify-normal lg:absolute lg:right-[7.5%] top-0 h-full">
                <div className="mb-[5%]">
                  <CurrencySwitcher />
                </div>
              </div>

              <div
                onClick={() => {
                  router.push("/auth/logout");
                }}
                className="items-center justify-center hidden cursor-pointer lg:flex"
              >
                <ProfilePicture className="w-16" />
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {openNotification && (
              <motion.div
                className="w-full h-full fixed top-0 left-0 z-20"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.5 }}
                transition={{
                  duration: 0.1,
                }}
              >
                <NotificationsModal
                  handleClose={() => setOpenNotification(false)}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {menuOpened && (
              <motion.div
                className="w-full h-full fixed top-0 left-0 z-20"
                initial={{ y: -1000 }}
                animate={{ y: 0 }}
                exit={{ y: -1000 }}
                transition={{
                  duration: 0.1,
                }}
              >
                <UserMenu
                  opened={menuOpened}
                  handlerOpen={() => {
                    setMenuOpened(false);
                    setTimeout(() => {
                      setVisible(false);
                    }, 100);
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default NavbarUser;
