"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface OracleLogoProps {
  zkuadID?: number;
  colors?: boolean;
  movement?: boolean;
  scale?: boolean
  questions?: boolean;
  result?: boolean;
  initial?: boolean;
}


function OracleLogo({zkuadID = 0, colors, movement, scale, questions, initial, result} : OracleLogoProps) {  
  const [currentColorIndex, setCurrentColorIndex] = React.useState(0);

  const colorZkuad = [
    "drop-shadow-[0_0_15px_rgba(58,94,224,1)]",
    "drop-shadow-[0_0_15px_rgba(198,162,35,1)]",
    "drop-shadow-[0_0_15px_rgba(224,58,58,1)]",
  ];

  React.useEffect(() => {
    if (colors) {
      const interval = setInterval(() => {
        setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colorZkuad.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [colors, colorZkuad.length]);

  const colorOracle = colors ? colorZkuad[currentColorIndex] : colorZkuad[zkuadID - 1];

  return (
    <motion.div
      initial={{
        rotate: 0,
      }}
      animate={{
        scale: movement || scale ? [1, 1.1, 1] : 1,
        rotate: movement ? [5, -5, 5] : 0,
      }}
      transition={{
        duration: scale ? 2.5 : 10,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <Image
        src={initial ? "/oracle/initial-oracle.png" : result ? `/oracle/oracle${zkuadID}.png` : questions ? "/oracle/questioning-oracle.png" : "" }
        alt="oracle-image"
        width={1000}
        height={1000}
        className={`duration-500 filter ${colorOracle} ${result ? "w-2/3 mx-auto" : "scale-105"}`}
      />
    </motion.div>
  );
}

export default OracleLogo;
