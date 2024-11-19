import React from "react";
import OracleStar from "./OracleStar";

function OracleStars({zkuadID, revelated}: {zkuadID: number, revelated: boolean}) {
  return (
    <div className={revelated ? "opacity-100" : "opacity-0"}>
      <OracleStar
        classNameStar="left-[10vw] w-[20vw]"
        rotate={-12}
        delay={2.5}
        zkuadID={zkuadID}
      />
      <OracleStar
        classNameStar="top-[20vw] w-[5vw]"
        rotate={12}
        delay={1}
        zkuadID={zkuadID}
      />
      <OracleStar
        classNameStar="left-[5vw] top-[50vw] w-[6vw]"
        rotate={-12}
        delay={0.5}
        zkuadID={zkuadID}
      />
      <OracleStar
        classNameStar="top-[5vw] right-0 w-[10vw]"
        rotate={12}
        delay={1}
        zkuadID={zkuadID}
      />
      <OracleStar
        classNameStar="top-[16vw] right-[20vw] w-[6vw]"
        rotate={-12}
        delay={0}
        zkuadID={zkuadID}
      />
      <OracleStar
        classNameStar="top-[55vw] right-[1vw] w-[20vw]"
        rotate={12}
        delay={1.5}
        zkuadID={zkuadID}
      />
    </div>
  );
}

export default OracleStars;
