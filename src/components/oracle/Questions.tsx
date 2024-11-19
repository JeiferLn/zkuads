"use client";

import React, { useState } from "react";
import { poppins } from "../Fonts";
import ZkuadAssignment from "../zquads/ZkuadAssignment";
import ZkuadsLogo from "../zquads/ZkuadsLogo";
import axiosTokenClient from "@/utils/axiosTokenClient";
import Cookies from "js-cookie";
import OracleLogo from "./OracleLogo";
import OracleContainer from "../containers/Oracle/OracleQuestionSVG";

interface QuestionOptionProps {
  text: string;
  question: string;
  onClick: () => void;
  isSelected: boolean;
}

const QuestionOption: React.FC<QuestionOptionProps> = ({
  text,
  question,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={`border-3 border-[#09FBD3BF]  p-3 rounded-tl-3xl rounded-br-3xl cursor-pointer ${
        isSelected ? "bg-[#09FBD3BF]" : "bg-[#3B157880]"
      } duration-300`}
      onClick={onClick}
    >
      {question}. {text}
    </div>
  );
};

interface QuestionsProps {
  translations: {
    Title1: string;
    a1: string;
    b1: string;
    c1: string;
    Title2: string;
    a2: string;
    b2: string;
    c2: string;
    Title3: string;
    a3: string;
    b3: string;
    c3: string;
  };
  zkuadSelected?: (id: number) => void;
}

const Questions: React.FC<QuestionsProps> = ({
  translations,
  zkuadSelected,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [question, setQuestion] = useState(1);
  const [progress, setProgress] = useState(1);

  const handleClick = (option: string) => {
    const fetchTeam = async () => {
      try {
        const response = await axiosTokenClient.post("/Teams/assign-team/", {});
        zkuadSelected && zkuadSelected(response.data.team.id);
        setTimeout(() => {
          Cookies.set("team_id", response.data.team.id, {
            expires: 0.0625,
            secure: true,
            sameSite: "Strict",
          });
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    };
    if (selectedOption === null) {
      setSelectedOption(option);
      setProgress(progress + 1);

      setTimeout(() => {
        if (question < 3) {
          setQuestion(question + 1);
          setSelectedOption(null);
        } else {
          fetchTeam();
        }
      }, 1000);
    }
  };

  return Cookies.get("team_id") ? (
    <ZkuadAssignment zkuadID={Number(Cookies.get("team_id"))} />
  ) : (
    <div className="flex flex-col justify-center h-screen">
      <ZkuadsLogo
        className="w-[60%] mx-auto mb-5 inline-block"
        initial="visible"
      />

      <div className="opacity-100">
        <div className="w-full">
          <div className="h-[26vh] w-full mt-14 mb-3 px-[10%] relative">
            <div className="absolute top-0 z-10 w-24 -translate-x-1/2 -translate-y-1/2 left-1/2">
              <OracleLogo questions movement colors/>
            </div>

            <div className="absolute top-0 left-0 z-0 w-screen">
              <OracleContainer />
            </div>

            <div className="w-[80%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <h1 className="text-xl font-bold lg:text-3xl">
                {question}.{" "}
                {
                  translations[
                    ("Title" + question) as keyof typeof translations
                  ]
                }
              </h1>
            </div>
          </div>

          <div className="w-full px-[5%] relative py-6 text-center bottom-0 left-0 flex items-center justify-center lg:mt-3 lg:mb-2">
            <div className="w-3/5 lg:w-1/4 h-1 bg-[#272233] inline-grid items-center rounded-full relative [&>div:nth-child(n+2):nth-child(-n+4)]:[clip-path:polygon(50%_0%,90%_25%,90%_75%,50%_100%,10%_75%,10%_25%)]">
              <div
                className={`${
                  progress === 2 ? "w-2/4" : progress >= 3 ? "w-full" : "w-0"
                } delay-500 h-full bg-[#298CB1] rounded-full duration-1000`}
              />
              <div
                className={`${
                  progress >= 2
                    ? "bg-gradient-to-r from-[#3B1578] to-[#298CB1]"
                    : "bg-[#272233]"
                } w-7 h-7 absolute -left-[5%] duration-200 grid place-content-center`}
              >
                1
              </div>
              <div
                className={`${
                  progress >= 3 ? "bg-[#298CB1]" : "bg-[#272233]"
                } w-7 h-7 absolute left-1/2 transform -translate-x-1/2 duration-200 grid place-content-center`}
              >
                2
              </div>
              <div
                className={`${
                  progress >= 4
                    ? "bg-gradient-to-r from-[#298CB1] to-[#36FFFD] "
                    : "bg-[#272233]"
                } w-7 h-7 absolute -right-[5%] duration-200 grid place-content-center`}
              >
                3
              </div>
              <div
                className={`${poppins.className} absolute -right-10 text-xs opacity-70 font-bold ml-4 lg:ml-8`}
              >
                {question}/3
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-12 px-[5%] lg:px-0 lg:w-3/5 lg:mx-auto grid gap-y-4 lg:gap-y-0 lg:grid-cols-3 lg:gap-x-6">
            <QuestionOption
              text={translations[("a" + question) as keyof typeof translations]}
              question="a"
              onClick={() => handleClick("A")}
              isSelected={selectedOption === "A"}
            />
            <QuestionOption
              text={translations[("b" + question) as keyof typeof translations]}
              question="b"
              onClick={() => handleClick("B")}
              isSelected={selectedOption === "B"}
            />
            <QuestionOption
              text={translations[("c" + question) as keyof typeof translations]}
              question="c"
              onClick={() => handleClick("C")}
              isSelected={selectedOption === "C"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
