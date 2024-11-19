"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Cookies from "js-cookie";
import { useUserDetailsStore } from "@/stores/useUserDetails";
import { useLoadingStore } from "@/stores/useLoadingStore";

const Page = () => {
  const router = useRouter();
  const resetUserDetails = useUserDetailsStore((state) => state.reset);
  const setLoading = useLoadingStore((state) => state.setLoading);
  
  React.useEffect(() => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    Cookies.remove("expire_token");
    Cookies.remove("team_id");
    resetUserDetails();
    setLoading(true)
    router.push("/");
  }, [ resetUserDetails, router, setLoading]);

  return null;
}

export default Page;