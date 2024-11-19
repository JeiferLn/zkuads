import React, { useEffect } from "react";
import ZkuadsLogo from "../zquads/ZkuadsLogo";
import LoginForm from "./LoginForm";
import { motion, AnimatePresence } from "framer-motion";

interface LoginModalProps {
  opened: boolean;
  handleClose: () => void;
}

function LoginModal({ opened, handleClose }: LoginModalProps) {
  useEffect(() => {
    if (opened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [opened]);

  return (
    <AnimatePresence>
      {opened && (
        <div className="w-screen h-screen fixed left-0 top-0 z-20 flex justify-center items-center">
          <div
            className="w-screen h-screen absolute top-0 left-0 bg-black/65 backdrop-blur-lg"
            onClick={handleClose}
          />

          <motion.div
            className="flex flex-col justify-center items-center bg-[#021735] px-10 py-4 rounded-2xl z-30"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.1 } }}
            transition={{ type: "spring", duration: 0.4 }}
          >
            <div className="text-center mt-4 mb-6">
              <ZkuadsLogo className="h-8 inline-block" initial="visible" />
            </div>
            <LoginForm handleClose={handleClose} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default LoginModal;
