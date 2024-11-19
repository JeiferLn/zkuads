import React from "react";
import {
  FaCalendar,
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGoogle,
  FaLock,
  FaPlus,
  FaUser,
} from "react-icons/fa";
import { IoGameControllerOutline , IoMail, IoNotificationsOutline, IoHelp   } from "react-icons/io5";
import { IoIosArrowBack, IoIosClose, IoMdInformationCircleOutline  } from "react-icons/io";
import { CgSearch } from "react-icons/cg";
import ZCoinsLogo from "./zquads/ZCoinsLogo";
import { SiGoogledocs } from "react-icons/si";
import { TbEditCircle } from "react-icons/tb";
import { BiCopy } from "react-icons/bi";
import { LuTrophy, LuFolderSearch2 } from "react-icons/lu";
import { MdPhone, MdOutlineTimer } from "react-icons/md";
import DiamondLogo from "./zquads/DiamondLogo";
import { PiGearSix, PiWarningCircle} from "react-icons/pi";
import PowCoinIcon from "./zquads/PowCoinIcon";
import { FaRegCircleCheck } from "react-icons/fa6";



interface Icons {
  name: string;
  classname?: string;
}

const Icons: React.FC<Icons> = ({ name, classname }) => {
  const icons: Record<string, () => JSX.Element> = {
    Google: () => <FaGoogle className="w-full h-full" />,
    Facebook: () => <FaFacebook className="w-full h-full" />,
    Mail: () => <IoMail className="w-full h-full" />,
    Plus: () => <FaPlus className={`w-full h-full ${classname}`} />,
    ArrowBack: () => (
      <IoIosArrowBack
        className={`${classname ? classname : "w-full"} h-full`}
      />
    ),
    Eye: () => <FaEye className="w-full h-full" />,
    EyeSlash: () => <FaEyeSlash className="w-full h-full" />,
    Close: () => (
      <IoIosClose className={`${classname ? classname : "w-full"} h-full`} />
    ),
    Search: () => <CgSearch className="w-full h-full" />,
    Diamond: () => <DiamondLogo className={`${classname} h-full`} />,
    ZCoins: () => <ZCoinsLogo className={`${classname} h-full`} />,
    PowCoin: () => <PowCoinIcon className={`${classname} h-full`} />,
    Edit: () => <TbEditCircle  className="w-full h-full" />,
    Copy: () => <BiCopy className="w-full h-full" />,
    User: () => <FaUser className="w-full h-full" />,
    Lock: () => <FaLock className="w-full h-full" />,
    Calendar: () => <FaCalendar className="w-full h-full" />,
    Docs: () => <SiGoogledocs className="w-full h-full" />,
    Trophy: () => <LuTrophy className="w-full h-full" />,
    GameControl: () => <IoGameControllerOutline className="w-full h-full" />,
    Gear: () => <PiGearSix  className="w-full h-full fill-white" />,
    Phone: () => <MdPhone  className="w-full h-full" />,
    Error: () => <PiWarningCircle className="w-full h-full" />,
    Notifications: () => <IoNotificationsOutline className={`${classname} w-full h-full`} />,
    History: () => <LuFolderSearch2 className={`${classname} w-full h-full`} />,
    Help: () => <IoHelp className={`${classname} w-full h-full`} />,
    Info: () => <IoMdInformationCircleOutline  className={`${classname} w-full h-full`} />,
    Timer: () => <MdOutlineTimer className={`${classname} w-full h-full`} />,
    Accept: () => <FaRegCircleCheck className={`${classname} w-full h-full`} />,
  };

  return name ? icons[name]() : <></>;
};

export default Icons;
