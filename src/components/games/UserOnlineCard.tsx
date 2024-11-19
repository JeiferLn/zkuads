import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function UserOnlineCard() {
  return (
    <motion.div 
    className="flex w-full items-center [&>img]:rounded-full px-4 py-2 bg-red mt-2 rounded-xl bg-gradient-to-b from-[#021024] to-[#052659]"
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.5, duration: 0.4, type: 'spring' }}
    >
      <Image
        src={"/default-pfp.jpg"}
        alt="UserImage"
        width={50}
        height={50}
        className="mr-5"
      />
      <div>
        <h3 className="text-2xl">User</h3>
        <p>21.234.323,3$</p>
      </div>
      <Image
        src={"/example-img.png"}
        alt="GamePlayed"
        width={50}
        height={50}
        className="ml-auto"
      />
    </motion.div>
  );
}

export default UserOnlineCard;
