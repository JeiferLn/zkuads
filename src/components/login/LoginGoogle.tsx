import axiosInstance from "@/utils/axiosInstance";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

function LoginGoogle() {
  const translateButtons = useTranslations("Buttons");

  const LoginGoogleMobile = async () => {
    try {
      const response = await axiosInstance.get(
        "/Auth/o/google-oauth2/?redirect_uri=http://localhost:3000"
      );
  
      const authorizationUrl = response.data.authorization_url;
      if (authorizationUrl) {
        window.location.href = authorizationUrl;
      } else {
        console.error("No authorization URL provided.");
      }
    } catch (error) {
      console.log("Error initiating Google login:", error);
    }
  };

  const LoginGoogleDesktop = async () => {
    try {
      const response = await axiosInstance.get(
        "/Auth/o/google-oauth2/?redirect_uri=http://localhost:3000"
      );

      const authorizationUrl = response.data.authorization_url;
      if (authorizationUrl) {
        const width = 1000;
        const height = 600;

        const left = Math.round(
          (window.innerWidth - width) / 2 + window.screenX
        );
        const top = Math.round(
          (window.innerHeight - height) / 1.5 + window.screenY
        );

        window.open(
          authorizationUrl,
          "_blank",
          `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,resizable=yes`
        );
      } else {
        console.error("No authorization URL provided.");
      }
    } catch (error) {
      console.log("Error initiating Google login:", error);
    }
  };

  return (
    <Link
      href={"/"}
      onClick={(e) => {
        e.preventDefault();
        LoginGoogleMobile();
      }}
      className="p-3 rounded-full border-1.5 border-neutral-400 text-center bg-white flex justify-center"
    >
      <FcGoogle className="w-6 h-6 inline-block" />
      <span className="text-black ml-4">{translateButtons("Google")}</span>
    </Link>
  );
}

export default LoginGoogle;
