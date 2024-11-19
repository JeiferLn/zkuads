import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaDiscord } from "react-icons/fa";

function LoginDiscord() {
  const translateButtons = useTranslations("Buttons");

  const handleClickDiscord = () => {
    try {
      window.location.href = process.env.NEXT_PUBLIC_BACKEND + "/auth/discord/login";
    } catch (error) {
      console.log("Error initiating Discord login:", error);
    }
  }

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        handleClickDiscord();
      }}
      className="p-3 rounded-full border-1.5 border-blue-400 text-center bg-[#1877F2] flex justify-center [box-shadow:0px_2px_6.3px_0px_#73A7FF]"
    >
      <FaDiscord className="w-6 h-6 inline-block" />
      <span className="ml-4 h-full">{translateButtons("Discord")}</span>
    </div>
  );
}

export default LoginDiscord;
