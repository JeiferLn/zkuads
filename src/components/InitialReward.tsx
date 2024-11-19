import Image from "next/image";
import React from "react";
import UserInvite from "./containers/userMenu/UserInvite";
import ZkuadsLogo from "./zquads/ZkuadsLogo";
import Link from "next/link";
import { useUserDetailsStore } from "@/stores/useUserDetails";
import { useLoadingStore } from "@/stores/useLoadingStore";

function InitialReward({
  zkuadId,
  buttonStyle,
}: {
  zkuadId: number;
  buttonStyle: string;
}) {
  const userDetails = useUserDetailsStore((state) => state.userDetails);
  const setUserDetails = useUserDetailsStore((state) => state.setUserDetails);
  const setLoading = useLoadingStore((state) => state.setLoading);

  const styles = [
    {
      img: "/rewards/blue-reward.png",
      style:
        "[-webkit-text-stroke-color:#020653] [text-shadow:2px_2px_0px_#020653]",
    },
    {
      img: "/rewards/yellow-reward.png",
      style:
        "[-webkit-text-stroke-color:#534602] [text-shadow:2px_2px_0px_#534602]",
    },
    {
      img: "/rewards/red-reward.png",
      style:
        "[-webkit-text-stroke-color:#6C0101] [text-shadow:2px_2px_0px_#E90404]",
    },
  ];

  const zkuadStyles = styles[zkuadId - 1] || {};

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-[45%] m-auto pt-[15%]">
        <ZkuadsLogo disable initial="visible" />
      </div>
      <div className="w-full h-[42.5%]">
        <Image
          src={zkuadStyles.img}
          alt=""
          width={1000}
          height={1000}
          className="w-full -mt-[5%] mb-[10%] scale-110"
        />
      </div>
      <h2 className="text-center text-[8vw] [-webkit-text-stroke-width:1.48px] [-webkit-text-stroke-color:#000] [text-shadow:0px_4px_0px_rgba(0,0,0,1)] mb-[8%]">
        You have <br /> 10.000 diamonds!
      </h2>
      <div className="relative h-[12%] mb-[13%]">
        <UserInvite zkuadID={zkuadId} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%]">
          <p
            className={`text-[6vw] text-center [-webkit-text-stroke-width:0.58px] ${zkuadStyles.style}`}
          >
            Share to receive double Diamonds
          </p>
        </div>
      </div>
      <div className="w-2/3 m-auto text-center">
        <Link
          className={`rounded-full px-16 py-3 text-center ${buttonStyle} text-[5.5vw] [text-shadow:0px_2px_3.2px_rgba(0,0,0,0.50)]`}
          href="/"
          onClick={() => {
            setUserDetails({
              ...userDetails,
              teams: [
                {
                  team_id: zkuadId,
                }
              ],
            });
            setLoading(true);
          }}
        >
          Continue
        </Link>
      </div>
    </div>
  );
}

export default InitialReward;
