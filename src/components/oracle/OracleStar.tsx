import React from "react";
import { motion } from "framer-motion";

interface OracleStarProps {
  classNameStar?: string;
  rotate: number;
  delay: number;
  zkuadID?: number;
}

const colorZkuad = [
  "",
  "rgba(58,94,224,1)",
  "rgba(198,162,35,1)",
  "rgba(224,58,58,1)",
];

const OracleStar: React.FC<OracleStarProps> = ({ classNameStar, rotate, delay, zkuadID = 0 }) => {
  return (
    <motion.svg
      initial={{ scale: 0.9, rotate: rotate }}
      animate={{ scale: [1, 1.2, 1], filter: ["blur(0px)", "blur(1px)", "blur(0px)"] }}
      transition={{ duration: 1, repeat: Infinity, delay: delay }}
      width="48"
      height="45"
      viewBox="0 0 48 45"
      fill='none'
      xmlns="http://www.w3.org/2000/svg"
      className={`${classNameStar} absolute`}
    >
      <path
        d="M29.46 28.2305L24.5609 44.9453H23.5522L18.0047 28.2305L0.857695 22.9712V22.2507L18.0047 17.3516L23.5522 0.852982H24.5609L29.46 17.3516L47.0393 22.2507V22.9712L29.46 28.2305Z"
        fill={colorZkuad[zkuadID]}
      />
    </motion.svg>
  );
};

export default OracleStar;
