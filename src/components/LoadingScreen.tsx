"use client";

import React, { useState, useEffect } from "react";
import ZkuadsLogo from "./zquads/ZkuadsLogo";
import Background from "./Background";
import Cookies from "js-cookie";
import { useLoadingStore } from "@/stores/useLoadingStore";
import SpinnerSVG from "./SpinnerSVG";

const LoadingScreen = () => {
  const isLoading = useLoadingStore((state) => state.isLoading);
  const setIsLoading = useLoadingStore((state) => state.setLoading);
  const [stroke, setStroke] = useState("stroke-white");
  const userCookie = Cookies.get("access_token");
  const zkuadIDColor = Number(Cookies.get("team_id")) || 0;

  useEffect(() => {
    window.scrollTo(0, 0);

    if (userCookie) {
      switch (zkuadIDColor) {
        case 1:
          setStroke("stroke-[#1CA4DF]");
          break;
        case 2:
          setStroke("stroke-[#FBBE0D]");
          break;
        case 3:
          setStroke("stroke-[#F70404]");
          break;
      }
    } else {
      setStroke("stroke-white");
    }

    if (window) {
      setTimeout(() => {
        setIsLoading(false);
        setStroke("stroke-white");
        document.body.classList.remove("overflow-y-hidden");
      }, 1300);
    }
  }, [isLoading, userCookie, zkuadIDColor, setIsLoading]);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="w-full h-full fixed top-0 left-0 bg-degrade-dark z-50 grid items-center text-center">
      <Background />
      <div>
        <ZkuadsLogo
          className="w-2/4 inline-block stroke-1 lg:stroke-[0.5]"
          colorZkuads={stroke}
          disable
        />
        <br />
        <div className="w-12 h-12 lg:w-12 lg:h-12 mx-auto mt-12 lg:mt-8">
          <SpinnerSVG />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
