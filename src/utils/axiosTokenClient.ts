import axios from "axios";
import Cookies from "js-cookie";
import axiosInstance from "./axiosInstance";
import Cookie from 'js-cookie'
import { useUserDetailsStore } from "@/stores/useUserDetails";

const axiosTokenClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 5000,
});

const getTeamId = () => {
  const userDetails = useUserDetailsStore.getState().userDetails;
  const last_team_id = userDetails.teams[0]?.team_id.toString()
  return userDetails.teams[0]?.team_id.toString() || last_team_id;
};


axiosTokenClient.interceptors.request.use(
  async function (config) {

    const currentTimeMili = Math.floor(Date.now());
    if (
      Number(Cookies.get("expire_token")) - currentTimeMili <= 300000
    ) {

      const team_id = getTeamId();

      const res = await axiosInstance.post("/Jwt/jwt/refresh/", {
        refresh: Cookies.get("refresh_token"),
      }, {
        headers: {
          Authorization: `Bearer ${Cookies.get("refresh_token")}`,
        }
      });
      Cookies.set("access_token", res.data.access, {
        expires: 0.0208333,
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("expire_token", String(Math.floor(Date.now()) + 1800000), {
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("team_id", team_id, {
        expires: 0.0208333,
        secure: true,
        sameSite: "Strict",
      });

      config.headers.Authorization = `Bearer ${res.data.access}`;
    } else if (!Cookies.get("refresh_token") && Cookies.get("access_token")) {
      Cookie.remove("access_token");
      Cookie.remove("expire_token");
      Cookie.remove("team_id");
      window.location.href = "/auth/login";
    } else {
      config.headers.Authorization = `Bearer ${Cookies.get("access_token")}`;
    }
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);


export default axiosTokenClient;