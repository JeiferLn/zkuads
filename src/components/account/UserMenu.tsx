import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import ZkuadsLogo from "../zquads/ZkuadsLogo";
import Icons from "../Icons";
import UserContainerBlue from "../containers/userMenu/UserContainerBlue";
import UserContainerYellow from "../containers/userMenu/UserContainerYellow";
import UserContainerRed from "../containers/userMenu/UserContainerRed";
import UserInvite from "../containers/userMenu/UserInvite";
import InviteSVG from "./userMenu/InviteSVG";
import FavoriteGame from "../containers/userMenu/FavoriteGame";
import MyWallet from "../containers/userMenu/MyWallet";
import InputBlue from "../containers/userMenu/editAccount/InputBlue";
import InputYellow from "../containers/userMenu/editAccount/InputYellow";
import InputRed from "../containers/userMenu/editAccount/InputRed";
import InviteModal from "../invite/InviteModal";

import { useUserDetailsStore } from "@/stores/useUserDetails";
import { useBalanceStore } from "@/stores/useBalanceStore";
import { poppins } from "../Fonts";

interface UserMenuProps {
  opened?: boolean;
  handlerOpen: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ opened, handlerOpen }) => {
  const router = useRouter();

  const [isEditAccount, setIsEditAccount] = React.useState(false);
  const [isInviteFriend, setIsInviteFriend] = React.useState(false);

  const userZkuad = useUserDetailsStore((state) => state.userDetails);
  const getBalance = useBalanceStore((state) => state.balance);

  const bgInputs = () => {
    if (userZkuad?.teams?.[0]?.team_id === 1) {
      return <InputBlue />;
    } else if (userZkuad?.teams?.[0]?.team_id === 2) {
      return <InputYellow />;
    } else {
      return <InputRed />;
    }
  };

  const teamStyles = [
    {
      navbarZkuad: {
        bgZkuad: "bg-[#1665BF]",
        borderZkuad: "bg-[#020653]",
        shadowNameZkuad: "shadow-[inset_0px_7px_7px_0px_#4798f880]",
        bgborderZkuad: "#020653",
        bgborderProfile: "bg-[#1956BE]",
        imgZkuad: "/zkuad-icon/blue-shield.png",
        colorText: "text-[#020653]",
        colorCopy: "text-[#1956BE]",
        saveChanges: {
          direction: "bg-gradient-to-b",
          border1: "from-[#41C5FF]",
          border2: "to-[#3870C6]",
        },
      },
      bodyMenu: {
        borderWallet: "border-[#3870C6]",
      },
      inviteUser: {
        borderText: "[-webkit-text-stroke-color:#020653]",
        textInvite: "text-[#0F449D]",
        shadowText: "text-shadow-blue",
      },
      bgGradient: {
        from: "from-[#3870C6]",
        to: "to-[#41C5FF]",
      },
    },
    {
      navbarZkuad: {
        bgZkuad: "bg-[#B67C00]",
        borderZkuad: "bg-[#B67C00]",
        shadowNameZkuad: "shadow-[inset_0px_7px_7px_0px_#F8D54780]",
        bgborderZkuad: "#B67C00",
        bgborderProfile: "bg-[#B67C00]",
        imgZkuad: "/zkuad-icon/yellow-shield.png",
        colorText: "text-[#6C5B00]",
        colorCopy: "text-[#B67C00]",
        saveChanges: {
          direction: "bg-gradient-to-r",
          border1: "from-[#FBBC0D]",
          border2: "to-[#EE880C]",
        },
      },
      bodyMenu: {
        borderWallet: "border-[#3870C6]",
      },
      inviteUser: {
        borderText: "[-webkit-text-stroke-color:#534602]",
        textInvite: "text-[#6C5B00]",
        shadowText: "text-shadow-yellow",
      },
      bgGradient: {
        from: "from-[#FFB400]",
        to: "to-[#534602]",
      },
    },
    {
      navbarZkuad: {
        bgZkuad: "bg-[#D02F32]",
        borderZkuad: "bg-[#EF0F19]",
        shadowNameZkuad: "shadow-[inset_0px_7px_7px_0px_#ff756280]",
        bgborderZkuad: "#EF0F19",
        bgborderProfile: "bg-[#EF0F19]",
        imgZkuad: "/zkuad-icon/red-shield.png",
        colorText: "text-[#710308]",
        colorCopy: "text-[#EF0F19]",
        saveChanges: {
          direction: "bg-gradient-to-r",
          border1: "from-[#6D0101]",
          border2: "to-[#DD0303]",
        },
      },
      bodyMenu: {
        borderWallet: "border-[#E60303]",
      },
      inviteUser: {
        borderText: "[-webkit-text-stroke-color:#6C0101]",
        textInvite: "text-[#E90404]",
        shadowText: "text-shadow-red",
      },
      bgGradient: {
        from: "from-[#E60303]",
        to: "to-[#720101]",
      },
    },
  ];

  const zkuadInformation = teamStyles[userZkuad?.teams?.[0]?.team_id - 1] || {
    navbarZkuad: {
      bgZkuad: "",
      borderZkuad: "",
      shadowNameZkuad: "",
      bgborderZkuad: "",
      bgborderProfile: "",
      imgZkuad: "",
      colorText: "",
      colorCopy: "",
    },
    bodyMenu: {
      borderWallet: "",
    },
    inviteUser: {
      borderText: "",
      textInvite: "",
      shadowText: "",
    },
    bgGradient: {
      from: "",
      to: "",
    },
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const truncateUsername = truncateText(userZkuad.username, 10);

  return (
    <div
      className={`${
        opened === true ? "block" : "hidden"
      } w-full h-full bg-gradient-to-br from-degrade-dark to-degrade-light overflow-hidden`}
    >
      {isEditAccount && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur z-20"
          onClick={() => setIsEditAccount(false)}
        ></div>
      )}
      <div
        className={`rounded-b-[30px] ${
          isEditAccount
            ? "h-[80vh] w-full fixed top-0 left-0"
            : "h-[42vh] relative"
        } z-30`}
      >
        <div className={`absolute top-0 left-0 w-full h-full`}>
          {userZkuad?.teams?.[0]?.team_id === 1 ? (
            <UserContainerBlue isEditAccount={isEditAccount} />
          ) : userZkuad?.teams?.[0]?.team_id === 2 ? (
            <UserContainerYellow isEditAccount />
          ) : (
            <UserContainerRed isEditAccount={isEditAccount} />
          )}
        </div>

        <div className="relative z-10 px-2.5 pb-4 pt-2">
          <div className="w-[85%] mx-auto relative grid grid-cols-3 items-center lg:hidden">
            <div
              className="w-8 -ml-[5vw]"
              onClick={
                isEditAccount ? () => setIsEditAccount(false) : handlerOpen
              }
            >
              <Icons name="ArrowBack" />
            </div>
            <ZkuadsLogo className=" my-5" initial="visible" />
          </div>

          <div>
            <div className="w-[90%] flex justify-between mx-auto -mt-[1vh]">
              <div className="relative w-1/2 -ml-[1%]">
                <div
                  className={`w-[17vw] h-[17vw] absolute z-10 [clip-path:polygon(50%_0%,95%_25%,95%_75%,50%_100%,5%_75%,5%_25%)] ${zkuadInformation.navbarZkuad.borderZkuad} flex items-center justify-center`}
                >
                  <div
                    className={` w-full h-full p-1 [clip-path:polygon(50%_3%,93%_26%,93%_73%,50%_97%,7%_74%,7%_26%)] flex items-center justify-center bg-white`}
                  >
                    <Image
                      src={zkuadInformation.navbarZkuad.imgZkuad}
                      width={100}
                      height={100}
                      alt="logo-zkuad"
                      className={`w-[11vw] h-[11vw]`}
                    />
                  </div>
                </div>
                <div
                  className={`[clip-path:polygon(0%_0%,100%_0%,90%_100%,0%_100%)] ${zkuadInformation.navbarZkuad.borderZkuad} absolute w-3/4 top-[1.3vh] left-1/4 h-[5.5vh]  `}
                >
                  <div
                    className={`[clip-path:polygon(5%_5%,98%_5%,89%_96%,5%_96%)] w-full h-[5.5vh] ${zkuadInformation.navbarZkuad.shadowNameZkuad} ${zkuadInformation.navbarZkuad.bgZkuad}`}
                  >
                    <span
                      className={` absolute left-[20%] top-[10%] text-[3.5vw] [-webkit-text-stroke-width:0.28px] [-webkit-text-stroke-color:${zkuadInformation.navbarZkuad.bgborderZkuad}] z-10`}
                    >
                      Perfil
                    </span>
                    <span
                      className={`absolute left-[20%] top-[12%] text-[3.5vw] text-[${zkuadInformation.navbarZkuad.bgborderZkuad}] [-webkit-text-stroke-width:0.28px] [-webkit-text-stroke-color:${zkuadInformation.navbarZkuad.bgborderZkuad}]`}
                    >
                      Perfil
                    </span>
                    <span className="absolute left-1/2 -translate-x-1/2 top-2/3 -translate-y-1/2 text-[5vw] z-10">
                      {userZkuad?.username}
                    </span>
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 top-[37%] text-[${zkuadInformation.navbarZkuad.bgborderZkuad}] text-[5vw]`}
                    >
                      {truncateUsername}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-[70%] left-[5%] w-[90%] mx-auto">
              <div
                className="absolute w-6 h-6 -top-[2vh] left-[38%]"
                onClick={() => setIsEditAccount(true)}
              >
                <Icons name="Edit" />
              </div>

              <div>
                <div
                  className={`w-[40vw] h-[40vw] absolute z-10 [clip-path:polygon(50%_0%,95%_25%,95%_75%,50%_100%,5%_75%,5%_25%)] ${zkuadInformation.navbarZkuad.bgborderProfile} flex items-center justify-center -top-[2vh]`}
                >
                  <div
                    className={`relative w-full h-full p-1 [clip-path:polygon(50%_3%,93%_26%,93%_73%,50%_97%,7%_74%,7%_26%)] flex items-center justify-center bg-white`}
                  >
                    <Image
                      src="/default-pfp.jpg"
                      width={100}
                      height={100}
                      alt="logo-zkuad"
                      className={`w-full h-full`}
                    />
                    {isEditAccount && (
                      <div
                        className={`absolute w-full h-[15%] left-0 top-1/2 -translate-y-1/2 ${zkuadInformation.navbarZkuad.bgborderProfile} rounded-full grid place-content-center text-[4vw]`}
                      >
                        Change Photo
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="absolute w-[45%] right-0 -bottom-[10vw]">
                <div className="w-full h-[12vh]">
                  <Image
                    src="/example-img.png"
                    alt="high-score"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover object-center rounded-md"
                  />
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[95%] [&>p]:[-webkit-text-stroke-width:0.46px] [&>p]:[-webkit-text-stroke-color:#000000] [&>p]:[text-shadow:0px_0.923px_1.107px_rgba(0,0,0,0.60)]">
                  <FavoriteGame />
                  <p className="w-full absolute left-1/2 -translate-x-1/2 top-[15%] text-[4vw] text-center">
                    Best Score{" "}
                  </p>
                  <p className="w-full absolute left-1/2 -translate-x-1/2 bottom-[10%] text-[4vw]  text-center">
                    65000
                  </p>
                </div>
              </div>

              <div className="w-[20vw] h-[20vw] absolute top-[11.5vh] left-[10.2vw] z-0 [clip-path:polygon(50%_0%,95%_25%,95%_75%,50%_100%,5%_75%,5%_25%)] bg-black/30 blur-xl"></div>
              <div
                className={`w-[20vw] h-[20vw] absolute top-[11vh] left-[10vw] z-10 [clip-path:polygon(50%_0%,95%_25%,95%_75%,50%_100%,5%_75%,5%_25%)] bg-white flex items-center justify-center text-[13vw] pt-[1vh] ${zkuadInformation.navbarZkuad.colorText} font-long-shot [text-shadow:0px_1.9px_2.85px_#00000040]`}
              >
                #10
              </div>
              <div
                className={`absolute top-[14.5vh] left-[38%] w-6 h-6 p-1 bg-white ${zkuadInformation.navbarZkuad.colorCopy} rounded-full`}
              >
                <Icons name="Copy" />
              </div>
            </div>
          </div>
        </div>
        {isEditAccount && (
          <div className="relative h-[50%] z-20 mt-[60%] px-[5%]">
            <div className="w-full h-[80%]">
              <label className={`pl-2 ${poppins.className} text-[4vw]`}>
                Date of Birth
              </label>
              <div className="w-[95%] h-[20%] relative flex items-center">
                {bgInputs()}
                <input
                  type="text"
                  className="w-[70%] relative px-5 z-10 bg-transparent outline-none"
                />
              </div>

              <label className={`pl-2 ${poppins.className} text-[4vw]`}>
                Current Password
              </label>
              <div className="w-[95%] h-[20%] relative flex items-center">
                {bgInputs()}
                <input
                  type="text"
                  className="w-[70%] relative px-5 z-10 bg-transparent outline-none"
                />
              </div>

              <label className={`pl-2 ${poppins.className} text-[4vw]`}>
                New Password
              </label>
              <div className="w-[95%] h-[20%] relative flex items-center">
                {bgInputs()}
                <input
                  type="text"
                  className="w-[70%] relative px-5 z-10 bg-transparent outline-none"
                />
              </div>

              <div
                className={`w-[45%] h-[15%] ${zkuadInformation.navbarZkuad.saveChanges.direction} ${zkuadInformation.navbarZkuad.saveChanges.border1} ${zkuadInformation.navbarZkuad.saveChanges.border2} rounded-full absolute bottom-[8%] left-[4%] flex items-center justify-center`}
              >
                <div className="w-[96%] h-[80%] text-[5vw] bg-[#3B1578] rounded-full grid place-content-center">
                  Save Changes
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className={`pt-[8%] w-[85%] h-full mx-auto ${
          isEditAccount ? "mt-[86%]" : ""
        }`}
      >
        <div
          className="relative h-[12%]"
          onClick={() => {
            router.push("/transaction-history");
            handlerOpen();
          }}
        >
          <div className="w-full h-full absolute left-0 top-0">
            <MyWallet />
          </div>

          <div className="relative z-10 h-full flex justify-between py-1.5 pl-5 pr-3">
            <div className="w-[55%] flex flex-col justify-around">
              <h2 className="text-large mt-0.5">My Wallet</h2>
              <div className="flex justify-between [&>div]:flex w-full -mt-1">
                <div className="mr-2">
                  <div className="relative w-7 h-7">
                    <Icons name="Diamond" classname="p-[3%]" />
                  </div>
                  <p className="pt-[1.5%]">{getBalance?.[1]?.balance}</p>
                </div>
                <div className="gap-0.5">
                  <div className="relative w-7 h-7">
                    <Icons name="ZCoins" classname="w-7 h-7" />
                  </div>
                  <p className="pt-0.5">{getBalance?.[0]?.balance}</p>
                </div>
              </div>
            </div>
            <div className="w-[30%] h-full p-[2%]">
              <div className="w-full h-full bg-white grid place-content-center rounded-[16px]">
                <Image
                  src="/user-menu-icons/wallet.png"
                  width={50}
                  height={50}
                  alt="wallet-icon"
                  className="w-full h-full scale-125 pt-1"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative h-[12%] mt-[8%]"
          onClick={() => {
            router.push("/game-history");
            handlerOpen();
          }}
        >
          <div className="w-full h-full absolute left-0 top-0">
            <MyWallet />
          </div>

          <div className="relative z-10 h-full flex justify-between py-1.5 pl-5 pr-3">
            <div className="w-[60%] flex flex-col justify-around">
              <h2 className="text-large mt-1">Game History</h2>
              <p className={`-mt-1 ${poppins.className} text-[4vw]`}>
                View my movements
              </p>
            </div>
            <div className="w-[30%] h-full p-[2%]">
              <div className="w-full h-full bg-white grid place-content-center rounded-[16px]">
                <Image
                  src="/user-menu-icons/gamepad.png"
                  width={50}
                  height={50}
                  alt="wallet-icon"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-[8%] relative w-full h-[25vw] flex justify-center items-center"
          onClick={() => setIsInviteFriend(true)}
        >
          <UserInvite zkuadID={userZkuad?.teams?.[0]?.team_id} />

          <div className="relative z-10 flex flex-col -mt-[4vh] w-[87%] mx-auto">
            <div className="w-[20vw] absolute top-1 left-[2vw]">
              <InviteSVG />
            </div>
            <div className="relative w-full text-center ml-[6vw]">
              <p
                className={`text-[9.5vw] relative z-10 [-webkit-text-stroke-width:0.7px] ${zkuadInformation.inviteUser.borderText} ${zkuadInformation.inviteUser.shadowText}`}
              >
                Invite Friend
              </p>
            </div>
            <div className="relative -mt-[0.8vh] text-center">
              <p
                className={`w-[110%] text-[4vw] absolute left-1/2 -translate-x-1/2  z-10 [-webkit-text-stroke-width:0.5px] ${zkuadInformation.inviteUser.borderText} ${zkuadInformation.inviteUser.shadowText}`}
              >
                And earn COINS for yourself and for them!
              </p>
            </div>
          </div>
        </div>
        <Link
          href="/auth/logout"
          type="button"
          className="text-[5vw] absolute bottom-[5%] right-[10%] z-10"
        >
          Log Out
        </Link>
      </div>
      <AnimatePresence>
        {isInviteFriend && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur z-30 flex justify-center"
            onClick={() => setIsInviteFriend(false)}
          >
            <InviteModal onClose={() => setIsInviteFriend(false)}/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserMenu;
