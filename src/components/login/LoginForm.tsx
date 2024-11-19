"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../form/Input";
import Button from "../Button";
import LineDivider from "../LineDivider";
import Link from "next/link";
import { poppins } from "../Fonts";
import { useRouter } from "next/navigation";
import { validateEmail } from "@/utils/inputsVallidations";
import axiosInstance from "@/utils/axiosInstance";
import axios from "axios";
import { FaDiscord } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { useUserDetailsStore } from "@/stores/useUserDetails";
import { useErrorStore } from "@/stores/useErrorStore";
import axiosTokenClient from "@/utils/axiosTokenClient";
import { useLoadingStore } from "@/stores/useLoadingStore";
import LoginGoogle from "./LoginGoogle";
import LoginDiscord from "./LoginDiscord";
import SpinnerSVG from "../SpinnerSVG";
import { useSpinnerStore } from "@/stores/useSpinnerStore";

interface IFormInput {
  email: string;
  password: string;
}

interface ILoginFormProps {
  handleClose?: () => void;
}

const LoginForm: React.FC<ILoginFormProps> = ({ handleClose }) => {
  const router = useRouter();
  const setError = useErrorStore((state) => state.setError);
  const setUserDetails = useUserDetailsStore((state) => state.setUserDetails);
  const setLoading = useLoadingStore((state) => state.setLoading);
  const loadingSpinner = useSpinnerStore((state) => state.loadingSpinnerSVG);
  const setFetchSpinner = useSpinnerStore((state) => state.setFetchSpinnerSVG);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const translateForm = useTranslations("Form");

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setFetchSpinner(true);
    try {
      const response = await axiosInstance.post("/Login/", data);

      Cookies.set("access_token", response.data.access, {
        expires: 0.0208333,
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("expire_token", String(Math.floor(Date.now()) + 1800000), {
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("refresh_token", response.data.refresh, {
        expires: 30,
        secure: true,
        sameSite: "Strict",
      });
      const user_data = await axiosTokenClient.get("/Users/user-details/");
      setUserDetails(user_data.data.user);

      if (user_data.data.user.teams[0]?.team_id) {
        Cookies.set("team_id", user_data.data.user.teams[0].team_id, {
          expires: 0.0625,
          secure: true,
          sameSite: "Strict",
        });
        setLoading(true);
        router.push("/");
      } else {
        setLoading(true);
        router.push("/questions");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        switch (error.response?.status) {
          case 401:
            setError({
              codeError: 401,
              messageError: "Invalid email or password.",
            });
            break;
          case 404:
            setError({ codeError: 404, messageError: "User not Found" });
            break;
          case 408:
            setError({
              codeError: 408,
              messageError:
                "Your account is inactive. Please check your email to activate it.",
            });
            break;
          default:
            if (error.code === "ECONNABORTED") {
              setError({
                codeError: 500,
                messageError: "Connection timed out. Please try again.",
              });
            } else {
              setError({
                codeError: error.response?.status || 500,
                messageError: "An unexpected error occurred. Please try again.",
              });
            }
            break;
        }
      }
    } finally {
      setFetchSpinner(false);
      handleClose && handleClose();
      document.body.style.overflowY = "auto";
    }
  };

  return (
    <form className="pt-[5%]" onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        required="true"
        label={translateForm("Login.Email")}
        placeholder={translateForm("Login.EmailPlaceholder")}
        register={register}
        error={errors.email?.message}
        icon="Mail"
        validate={validateEmail}
        className="mb-6"
      />
      <Input
        name="password"
        required="true"
        label={translateForm("Login.Password")}
        placeholder={translateForm("Login.PasswordPlaceholder")}
        type="password"
        register={register}
        error={errors.password?.message}
        icon="Lock"
        className="mb-4"
      />
      <div className="pl-2 flex items-center mb-7">
        <input type="checkbox" className="w-3.5 h-3.5" />
        <label className={`ms-2 pt-0.5 text-xs ${poppins.className}`}>
          Remember me.
        </label>
      </div>
      <button
        type="submit"
        className="relative bg-[#09FBD3BF]/75 py-2 rounded-full w-full h-[3.125rem] mt-2 text-[5.5vw] [text-shadow:0px_2px_3.2px_rgba(0,0,0,0.50)] [box-shadow:0px_4px_4px_0px_rgba(0,0,0,0.25)]"
      >
        {loadingSpinner ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-full h-full">
            <SpinnerSVG />
          </div>
        ) : (
          translateForm("Login.Login")
        )}
      </button>
      <LineDivider text={translateForm("Or")} className="mt-10 mb-6" />

      <div className="text-center grid gap-y-5">
        <LoginGoogle />

        <LoginDiscord />
      </div>
      <p
        className={`${poppins.className} opacity-100 text-center text-neutral-300 text-xs mt-6 mb-2 block`}
      >
        {translateForm("DontAccount")}
        <b
          onClick={() => router.push("/auth/signup")}
          className="lg:hidden text-[#1EFFFF] underline font-bold ml-1 cursor-pointer select-none"
        >
          {translateForm("SignIn")}
        </b>
      </p>
    </form>
  );
};

export default LoginForm;
