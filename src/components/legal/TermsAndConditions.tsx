import React from "react";
import Link from "next/link";
import { poppins } from "../Fonts";
import { useTranslations } from "next-intl";

interface ITermsAndConditions {
  className?: string;
  handleTerms: () => void;
}

const TermsAndConditions: React.FC<ITermsAndConditions> = ({
  className,
  handleTerms,
}) => {
  const [check, setCheck] = React.useState(false);
  const TermsAndConditionsTranslation = useTranslations("TermsAndContions");
  const ButtonsTranslate = useTranslations("Buttons");
  const RegisterTranslate = useTranslations("Form.Register");

  return (
    <div>
      <div
        className={`${className} text-sm text-neutral-200 ${poppins.className} bg-[#3B1578] border-2 border-[#09FBD3CC] rounded-2xl px-4 py-5 h-[65vh] mb-5 overflow-auto`}
      >
        <p className="mb-4">
          {TermsAndConditionsTranslation("HeaderPart1")}
          <Link href="https://www.zkuads.com">
            <span className="text-extralight-pink">
              {" "}
              https://www.zkuads.com{" "}
            </span>
          </Link>
          {TermsAndConditionsTranslation("HeaderPart2")}
        </p>
        <h2 className="text-lg font-bold mb-3">
          1. {TermsAndConditionsTranslation("Section1.Title")}
        </h2>
        <p className="mb-4">{TermsAndConditionsTranslation("Section1.Body")}</p>
        <h2 className="text-lg font-bold mb-3">
          2. {TermsAndConditionsTranslation("Section2.Title")}
        </h2>
        <p className="mb-4">{TermsAndConditionsTranslation("Section2.Body")}</p>
        <h2 className="text-lg font-bold mb-3">
          3. {TermsAndConditionsTranslation("Section3.Title")}
        </h2>
        <p className="mb-4">
          {TermsAndConditionsTranslation("Section3.BodyPart1")}
          <Link href="https://www.zkuads.com/privacy">
            <span className="text-extralight-pink">
              {" "}
              https://www.zkuads.com/privacy
            </span>
          </Link>
          {TermsAndConditionsTranslation("Section3.BodyPart2")}
        </p>
        <h2 className="text-lg font-bold mb-3">
          4. {TermsAndConditionsTranslation("Section4.Title")}
        </h2>
        <p className="mb-4">{TermsAndConditionsTranslation("Section4.Body")}</p>
        <ul className="list-disc list-inside mb-4">
          <li>{TermsAndConditionsTranslation("Section4.List.1")}</li>
          <li>{TermsAndConditionsTranslation("Section4.List.2")}</li>
          <li>{TermsAndConditionsTranslation("Section4.List.3")}</li>
        </ul>
        <h2 className="text-lg font-bold mb-3">
          5. {TermsAndConditionsTranslation("Section5.Title")}
        </h2>
        <p className="mb-4">{TermsAndConditionsTranslation("Section5.Body")}</p>
        <h2 className="text-lg font-bold mb-3">
          6. {TermsAndConditionsTranslation("Section6.Title")}
        </h2>
        <p className="mb-4">{TermsAndConditionsTranslation("Section6.Body")}</p>
        <h2 className="text-lg font-bold mb-3">
          7. {TermsAndConditionsTranslation("Section7.Title")}
        </h2>
        <p className="mb-4">{TermsAndConditionsTranslation("Section7.Body")}</p>
        <h2 className="text-lg font-bold mb-3">
          8. {TermsAndConditionsTranslation("Section8.Title")}
        </h2>
        <p className="mb-4">{TermsAndConditionsTranslation("Section8.Body")}</p>
        <h2 className="text-lg font-bold mb-3">
          9. {TermsAndConditionsTranslation("Section9.Title")}
        </h2>
        <p className="mb-4">{TermsAndConditionsTranslation("Section9.Body")}</p>
        <h2 className="text-lg font-bold mb-3">
          10. {TermsAndConditionsTranslation("Section10.Title")}
        </h2>
        <p className="mb-4">
          {TermsAndConditionsTranslation("Section10.Body")}
        </p>
        <h2 className="text-lg font-bold mb-3">
          11. {TermsAndConditionsTranslation("Section11.Title")}
        </h2>
        <p className="mb-4">
          {TermsAndConditionsTranslation("Section11.Body")}
          <Link href="https://www.zkuads.com/contact">
            <span className="text-extralight-pink">
              {" "}
              https://www.zkuads.com/contact
            </span>
          </Link>
          .
        </p>
        <p className="mb-4">{TermsAndConditionsTranslation("Footer")}</p>
      </div>
      <div className="w-full">
        <label className="flex w-5/6 mx-auto mb-3 items-center pl-1">
          <input
            type="checkbox"
            onClick={() => setCheck(!check)}
            className="w-5 h-5 mr-3"
          />
          {RegisterTranslate("Terms&Conditions")}
        </label>
        <button
          type="submit"
          className={`w-full mb-8 py-3 bg-[#3B157880] bg-opacity-50 rounded-full border-2 border-[#09FBD3BF] border-opacity-75 lg:col-span-2 duration-100 ${
            !check && "bg-black/50 text-white/30"
          }`}
          disabled={!check}
          onClick={handleTerms}
        >
          {ButtonsTranslate("Continue")}
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;
