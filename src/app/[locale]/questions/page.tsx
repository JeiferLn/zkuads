"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "@/components/Background";
import { useTranslations } from "next-intl";
import Questions from "@/components/oracle/Questions";
import OracleLogo from "@/components/oracle/OracleLogo";
import OracleStars from "@/components/oracle/OracleStars";
import { reverse } from "dns";

const QuestionPage = () => {
  const [open, setOpen] = useState(false);
  const [zkuadSelected, setZkuadSelected] = useState(false);
  const [zkuadID, setZkuadID] = useState<number>();
  const [visible, setVisible] = useState(false);
  const [revelated, setRevelated] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nameZkuadSplit, setNameZkuadSplit] = useState({
    first: "",
    last: "",
  });
  const randomNumbers: number[] = [];
  const nameZkuad = useTranslations("Response.SelectZkuad");

  while (randomNumbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  const ZkuadSelected = (id: number) => {
    setZkuadID(id);

    setNameZkuadSplit({
      first: nameZkuad("Zkuad" + id + ".Name1"),
      last: nameZkuad("Zkuad" + id + ".Name2"),
    });
  };

  const t1 = useTranslations(`Oracle.Question${randomNumbers[0]}`);
  const t2 = useTranslations(`Oracle.Question${randomNumbers[1]}`);
  const t3 = useTranslations(`Oracle.Question${randomNumbers[2]}`);

  const translations = {
    Title1: t1("Title"),
    a1: t1("a"),
    b1: t1("b"),
    c1: t1("c"),
    Title2: t2("Title"),
    a2: t2("a"),
    b2: t2("b"),
    c2: t2("c"),
    Title3: t3("Title"),
    a3: t3("a"),
    b3: t3("b"),
    c3: t3("c"),
  };

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, scale: 1 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 1.2 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <div className="absolute top-0 left-0 z-10 w-screen h-screen text-center bg-black bg-opacity-50 lg:fixed lg:grid lg:items-center lg:backdrop-blur-md">
      <div className="w-screen h-screen overflow-hidden lg:mx-auto lg:relative">
        <Background modalBackground={!open} />
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.div
              key="intro"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              onClick={() => {
                if (visible && !revelated) {
                  setOpen(true);
                } else if (visible && revelated) {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setRevelated(false);
                    setIsAnimating(false);
                  }, 600);
                }
              }}
              className="flex items-center justify-center w-full h-full"
            >
              <div className="h-2/3 w-[90%] flex flex-col items-center justify-evenly">
                <motion.h1
                  className={`${
                    zkuadSelected && !revelated
                      ? "-mt-[5vh] mb-[4vh] text-[6vw]"
                      : zkuadSelected
                      ? "-mt-[2vh] mb-[3vh] text-white/80"
                      : "text-white/80"
                  }`}
                  initial={{ opacity: 0, y: -50 }}
                  animate={
                    isAnimating
                      ? { opacity: 0, y: -50, scale: 0.8 }
                      : { opacity: 1, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  {!zkuadSelected
                    ? "THE ORACLE IS ANALYZING YOUR ANSWERS"
                    : !revelated
                    ? `NO DOUBT!`
                    : "THE ORACLE IS ANALYZING YOUR ANSWERS"}
                  <span
                    className={zkuadSelected && !revelated ? "block" : "hidden"}
                  >
                    YOUR IDEAL ZKUAD IS...
                  </span>
                </motion.h1>

                <div className="relative w-full">
                  {zkuadSelected ? (
                    <div>
                      <div className="relative w-full">
                        <OracleStars
                          zkuadID={zkuadID ?? 0}
                          revelated={!revelated}
                        />
                      </div>

                      <motion.div
                        initial={{ scale: 0 }}
                        animate={
                          isAnimating ? { opacity: 0, scale: 0 } : { scale: 1 }
                        }
                        transition={
                          isAnimating
                            ? {
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.2,
                                duration: 0.3,
                              }
                            : {
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.4,
                              }
                        }
                      >
                        <OracleLogo
                          zkuadID={!revelated ? Number(zkuadID) : 0}
                          result={!revelated}
                          initial={revelated}
                          movement={!revelated}
                        />
                      </motion.div>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.4,
                      }}
                    >
                      <OracleLogo questions scale />
                    </motion.div>
                  )}
                </div>

                <motion.h2
                  className="text-white/80"
                  initial={{ y: 50, opacity: 0 }}
                  animate={
                    isAnimating
                      ? { opacity: 0, y: 50, scale: 0.8 }
                      : { opacity: 1, y: 0 }
                  }
                  transition={
                    isAnimating
                      ? { delay: 0, duration: 0.3 }
                      : { delay: 0.6, duration: 0.3 }
                  }
                >
                  {zkuadSelected && !revelated ? (
                    <div className="flex flex-col items-center justify-center font-long-shot">
                      <div className="text-[40px] pt-[3vh]">
                        {nameZkuadSplit.first}
                      </div>
                      <div
                        className={`${
                          zkuadID === 1
                            ? "text-zkuad-blue"
                            : zkuadID === 2
                            ? "text-zkuad-yellow"
                            : "text-zkuad-red"
                        } [text-shadow:0px_2.77px_4.43px_#00000080] text-[80px] -mt-[4vh]`}
                      >
                        {nameZkuadSplit.last}
                      </div>
                    </div>
                  ) : (
                    <p className="pt-[5%]">
                      ARE YOU READY TO DISCOVER YOUR ZKUAD?
                    </p>
                  )}
                </motion.h2>
              </div>
              <motion.div
                className={`absolute bottom-5 left-1/2 -translate-x-1/2 text-white/80`}
                initial={{ opacity: 0 }}
                animate={{ opacity: visible ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  [Tap to Continue]
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="questions"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Questions
                translations={translations}
                zkuadSelected={(id: number) => {
                  setOpen(false);
                  setRevelated(true);
                  setZkuadSelected(true);

                  ZkuadSelected(id);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuestionPage;
