import Image from "next/image";
import React from "react";
import { poppins } from "../Fonts";
import { useTranslations } from "next-intl";
import { useUserDetailsStore } from "@/stores/useUserDetails";
import Link from "next/link";
import { useLoadingStore } from "@/stores/useLoadingStore";
import BlueLogo from "../containers/assigmentZkuad/BlueLogo";
import YellowLogo from "../containers/assigmentZkuad/YellowLogo";
import RedLogo from "../containers/assigmentZkuad/RedLogo";
import InitialReward from "../InitialReward";
import { motion } from "framer-motion";

interface ZkuadAssignmentProps {
  zkuadID: number;
}

const ZkuadAssignment: React.FC<ZkuadAssignmentProps> = ({ zkuadID }) => {
  const zkuadTranslation = useTranslations("Response.SelectZkuad");
  const zkuadName = useTranslations("Response.SelectZkuad.Zkuad" + zkuadID);

  const [initialReward, setInitialReward] = React.useState(false);

  const logoZkuad = (zkuadID: number) => {
    switch (zkuadID) {
      case 1:
        return <BlueLogo />;
      case 2:
        return <YellowLogo />;
      case 3:
        return <RedLogo />;
      default:
        break;
    }
  };

  const styles = [
    {
      skillsColor: "text-[#2B0630]",
      gradientTo: "to-[#1CA4DF]",
      bgButton: "bg-[#26A8DE]",
      shadowButton: "#58C8FF",
      image: "/zkuad-assigment/blue-shield.png",
      media: "/animation/blue-team.webm",
    },
    {
      skillsColor: "text-[#FFEA50]",
      gradientTo: "to-[#FFEB4B]",
      bgButton: "bg-[#FFC437]",
      shadowButton: "#FFD674D6",
      image: "/zkuad-assigment/yellow-shield.png",
      media: "/animation/yellow-team.webm",
    },
    {
      skillsColor: "text-[#5C1975]",
      gradientTo: "to-[#FD3434]",
      bgButton: "bg-[#FF2A2A]",
      shadowButton: "#FF2A2AD6",
      image: "/zkuad-assigment/red-shield.png",
      media: "/animation/red-team.webm",
    },
  ];

  const zkuadUser = styles[zkuadID - 1] || {};

  return (
    <div className="z-50 grid items-center w-screen h-screen">
      {!initialReward ? (
        <motion.div>
          <div
            className={`bg-gradient-to-b from-[#5E4ACF] ${zkuadUser.gradientTo} w-full h-full absolute top-0 left-0 opacity-70 `}
          />
          <div className="absolute w-1/2 right-0 top-[5%]">
            {logoZkuad(zkuadID)}
          </div>

          <div className="relative">
            <div className="flex flex-col items-center justify-center font-long-shot -mt-[1vh]">
              <div className="text-[8vw]">{zkuadName("Name1")}</div>
              <div
                className={`${
                  zkuadID === 1
                    ? "text-[#2DB7C0]"
                    : zkuadID === 2
                    ? "text-[#FFEB4B]"
                    : "text-[#E6262F]"
                } [text-shadow:0px_2.77px_4.43px_#00000080] text-[15vw] -mt-[3vh]`}
              >
                {zkuadName("Name2")}
              </div>
            </div>
            <div>
              <div className="mb-1 relative">
                <div className="flex items-center justify-center relative w-[80%] mx-auto">
                  <video
                    className="w-full h-auto relative z-10"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={zkuadUser.media} type="video/webm" />
                  </video>
                </div>
              </div>
              <br />
              <p className={`text-xs text-center ${zkuadUser.skillsColor} opacity-80 -mt-[2vh]`}>
                {zkuadName("Skills")}
              </p>
              <div>
                <p
                  className={`${poppins.className} mb-8 text-xs text-justify px-[10%]  mt-4 [-webkit-text-stroke-width:0.4px] [-webkit-text-stroke-color:#000] font-bold`}
                >
                  {zkuadName("Description1")}
                    <span className="lowercase italic">
                    {" "}
                    {zkuadName("Name")}{" "}
                    </span>
                  {zkuadName("Description2")}
                </p>

                <div className="absolute w-2/3 mx-auto text-center -translate-x-1/2 left-1/2">
                  <button
                    type="button"
                    onClick={() => setInitialReward(true)}
                    className={`block w-full ${zkuadUser.bgButton} rounded-full py-2 text-white text-xl [box-shadow:0px_4px_4px_0px_#00000040] [text-shadow:0px_2px_3.2px_#00000080]`}
                  >
                    {zkuadTranslation("Continue")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div>
          <InitialReward zkuadId={zkuadID} buttonStyle={zkuadUser.bgButton} />
        </motion.div>
      )}
    </div>
  );
};

export default ZkuadAssignment;
