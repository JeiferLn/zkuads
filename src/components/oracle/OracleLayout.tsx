import React from "react";
import Background from "../Background";
import { useTranslations } from "next-intl";
import Questions from "./Questions";

const MainLayout = () => {
  const randomNumbers: number[] = [];

  while (randomNumbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  const t1 = useTranslations("Oracle.Question" + randomNumbers[0].toString());
  const t2 = useTranslations("Oracle.Question" + randomNumbers[1].toString());
  const t3 = useTranslations("Oracle.Question" + randomNumbers[2].toString());
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

  return <Questions translations={translations} />;
};

export default MainLayout;
