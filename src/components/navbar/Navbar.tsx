"use client";

import React, { useEffect, useState } from "react";
import Button from "../Button";
import { Link } from "@/navigation";
import ZkuadsLogo from "../zquads/ZkuadsLogo";
import LocaleSwitcher from "./LocaleSwitcher";
import { usePathname, useRouter } from "next/navigation";
import NavbarUser from "./NavbarUser";
import { useTranslations } from "next-intl";
import SearchInput from "./SearchInput";
import CurrencySwitcher from "./CurrencySwitcher";
import { useUserDetailsStore } from "@/stores/useUserDetails";
import { motion, AnimatePresence } from "framer-motion";
import LoginModal from "../login/LoginModal";
import LoadingScreen from "../LoadingScreen";
import SignupModal from "../signup/SignupModal";
import path from "path";
import Icons from "../Icons";
import ZkuadAssignment from "../zquads/ZkuadAssignment";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const t = useTranslations("Buttons");
  const userDetails = useUserDetailsStore((state) => state.userDetails);

  let zkuadColor = "";

  switch (userDetails?.teams[0]?.team_id) {
    case 1:
      zkuadColor = "blue";
      break;
    case 2:
      zkuadColor = "yellow";
      break;
    case 3:
      zkuadColor = "red";
      break;
    default:
      break;
  }

  return (
    <>
      {userDetails.email ? (
        // Logged in
        <NavbarUser zkuad={zkuadColor} />
      ) : (
        // Not Logged in
        <motion.div
          className={`relative w-full px-[5%] text-center pt-12 pb-8 lg:py-6 lg:text-left lg:px-[7.5%] z-10 rounded-b-2xl lg:rounded-none duration-200`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{
            delay: 1.3,
            type: "tween",
            ease: "easeInOut",
            duration: 0.1,
          }}
        >
          {pathname === "/auth/signup" ? (
            <div className="flex items-center justify-between w-[74%]">
              <div className="w-8" onClick={() => router.push("/auth/login")}>
                <Icons name="ArrowBack" />
              </div>
              <Link href="/">
                <ZkuadsLogo className="inline-block h-11" initial="visible" />
              </Link>
            </div>
          ) : (
            <Link href="/">
              <ZkuadsLogo className="inline-block h-11" initial="visible" />
            </Link>
          )}
          <div className="absolute -top-[20%] right-[5%] lg:right-[7.5%] h-full flex flex-wrap align-top">
            <div className="relative inline-grid items-center h-full">
              <Button
                type="button"
                mainButton={false}
                className="hidden lg:inline-block"
                smallSize
                onClick={() => setLoginOpen(!loginOpen)}
              >
                {t("Login")}
              </Button>
              <LoginModal
                opened={loginOpen}
                handleClose={() => setLoginOpen(!loginOpen)}
              />
            </div>
            <div className="relative inline-grid items-center h-full">
              <Button
                type="button"
                mainButton={true}
                className="hidden mx-3 lg:inline-block"
                smallSize
                onClick={() => setRegisterOpen(!registerOpen)}
              >
                {t("SignIn")}
              </Button>
              <SignupModal
                opened={registerOpen}
                handleClose={() => setRegisterOpen(!registerOpen)}
                handleCreate={() => setOpenCreate(!openCreate)}
              />
            </div>
            <LocaleSwitcher />
          </div>
        </motion.div>
      )}
      <AnimatePresence>
        {openCreate && (
          <div className="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen">
            <div
              className="absolute top-0 left-0 w-screen h-screen bg-black/65 backdrop-blur-lg"
              onClick={() => setOpenCreate(!openCreate)}
            />

            <motion.div
              className="flex flex-col justify-center items-center bg-[#021735] px-10 py-4 rounded-2xl z-30 text-center"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.1 } }}
              transition={{ type: "spring", duration: 0.4 }}
            >
              <h1>Usuario Creado</h1>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
