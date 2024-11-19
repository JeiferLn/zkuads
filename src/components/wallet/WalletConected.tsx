import React from "react";
import WalletSVG from "../containers/wallet/WalletSVG";
import Image from "next/image";
import Icons from "../Icons";
import { poppins } from "../Fonts";
import Link from "next/link";
import CheckIcon from "../containers/wallet/CheckSVG";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { useWalletIDStore } from "@/stores/useWalletID";

interface WalletConectedProps {
  closeOpenWallet: () => void;
  username: string;
  finishRegister?: () => void;
}

function WalletConected({
  closeOpenWallet,
  username,
  finishRegister,
}: WalletConectedProps) {
  const pathname = usePathname();
  const accessToken = Cookies.get("access_token");
  const [valueID, setValueID] = React.useState("");
  const isTransactionHistory = pathname.includes("transaction-history");
  
  const [WalletConected, setWalletConected] = React.useState(false);

  const { allWalletID, setWalletID } = useWalletIDStore((state) => ({
    allWalletID: state.allWalletID,
    setWalletID: state.setWalletID,
  }));

  const [walletIdOpen, setWalletIdOpen] = React.useState(
    allWalletID.length > 0
  );

  return (
    <motion.div
      className={`fixed flex justify-center w-screen h-screen top-0 left-0 z-30 ${
        !walletIdOpen
          ? "items-center"
          : isTransactionHistory
          ? "items-center"
          : "items-end"
      }`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.1 }}
    >
      {!isTransactionHistory && (
        <div className="absolute w-full h-full bg-black/30 backdrop-blur-sm -z-10" />
      )}
      <AnimatePresence mode="wait">
        {!walletIdOpen ? (
          <motion.div
            key="wallet-options"
            className="w-[90%] h-[52vh] bg-[#5E4ACF] rounded-xl [box-shadow:5px_5px_11.1px_0px_#09FBD380] relative grid place-content-center text-center"
            initial={
              isTransactionHistory
                ? { scale: 0.8, opacity: 0 }
                : { y: 50, opacity: 0 }
            }
            animate={
              isTransactionHistory
                ? { scale: 1, opacity: 1 }
                : { y: 0, opacity: 1 }
            }
            exit={
              isTransactionHistory
                ? { scale: 0.8, opacity: 0 }
                : { y: -50, opacity: 0 }
            }
            transition={{ duration: 0.1 }}
          >
            <div className="absolute w-full p-2 flex justify-between items-center">
              <div onClick={closeOpenWallet}>
                <Icons name="ArrowBack" classname="w-6" />
              </div>
              <div onClick={accessToken ? closeOpenWallet : finishRegister}>
                <Icons name="Close" classname="w-10" />
              </div>
            </div>

            <h1 className="text-2xl">{username}</h1>
            {!WalletConected ? (
              <div>
                <p>You already have a wallet?</p>
                <div className="mt-2 relative">
                  <WalletSVG />
                  <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4">
                    <Image
                      src="/wallet-icon/wallet.png"
                      alt="walletImage"
                      width={100}
                      height={100}
                      className="w-2/3 mx-auto"
                    />
                    <div className="absolute w-[70%] mx-auto -bottom-11 left-1/2 -translate-x-1/2 flex justify-between gap-5">
                      <div>
                        <Image
                          src="/wallet-icon/coin.png"
                          alt="coinWallet"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div>
                        <Image
                          src="/wallet-icon/guard.png"
                          alt="guardWallet"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center absolute -bottom-5 left-1/2 -translate-x-1/2 w-1/2 h-12 bg-[#1ECDCF8A] bg-opacity-50 rounded-full">
                    <p className="italic text-2xl font-[700] [text-shadow:0px_2px_3.2px_#00000080]">
                      0%
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-between mt-8 [&>button]:w-2/5 [&>button]:py-1 [&>button]:rounded-full [&>button]:[text-shadow:0px_1.64px_2.62px_#00000080]">
                  <button
                    type="button"
                    className="bg-[#1ECDCF]"
                    onClick={() => setWalletIdOpen(true)}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className="bg-[#3B157880] border-3 border-[#1ECDCF]"
                    onClick={accessToken ? closeOpenWallet : finishRegister}
                  >
                    No
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p>wallet connected successfully</p>
                <div className="mt-2 mb-10 relative">
                  <WalletSVG />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <CheckIcon />
                  </div>
                  <div className="flex items-center justify-center absolute -bottom-5 left-1/2 -translate-x-1/2 w-1/2 h-12 bg-[#1ECDCF8A] bg-opacity-50 rounded-full">
                    <p className="italic text-2xl font-[700] [text-shadow:0px_2px_3.2px_#00000080]">
                      33%
                    </p>
                  </div>
                </div>
                <div className="w-[50%] mx-auto">
                  <Link
                    href={isTransactionHistory ? "" : "/auth/login"}
                    className="bg-[#1ECDCF] px-5 py-1.5 rounded-full [text-shadow:0px_1.64px_2.62px_#00000080]"
                    onClick={closeOpenWallet}
                  >
                    Continue
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="wallet-id"
            className={`${
              isTransactionHistory
                ? "w-[95%] rounded-2xl"
                : "w-full rounded-t-2xl"
            } h-[80vh]  bg-[#5E4ACF] [box-shadow:3px_-6px_10.93px_0px_#09FBD380]`}
            initial={isTransactionHistory ? { scale: 0.9 } : { y: "100%" }}
            animate={isTransactionHistory ? { scale: 1 } : { y: 0 }}
            exit={isTransactionHistory ? { scale: 0.9 } : { y: "115 %" }}
            transition={{
              duration: 0.1,
            }}
          >
            {allWalletID.length > 0 ? (
              <div className="w-full h-[10%] mb-[2vh] bg-[#3C2B99] rounded-t-2xl relative grid place-content-center">
                <h2 className="text-[6.5vw] [-webkit-text-stroke-width:0.8px] [-webkit-text-stroke-color:#000]">
                  ZCOINS WITHDRAWAL
                </h2>
                <div
                  className="w-12 absolute top-1/2 -translate-y-1/2 right-0"
                  onClick={closeOpenWallet}
                >
                  <Icons name="Close" />
                </div>
              </div>
            ) : (
              <div className="w-full p-4 flex justify-between items-center">
                <div onClick={() => setWalletIdOpen(!walletIdOpen)}>
                  <Icons name="ArrowBack" classname="w-6" />
                </div>
                <div>
                  <h1 className="text-2xl">Enter your wallet</h1>
                </div>
                <div onClick={accessToken ? closeOpenWallet : finishRegister}>
                  <Icons name="Close" classname="w-10" />
                </div>
              </div>
            )}

            <input
              type="text"
              className="w-[90%] ml-[5%] py-2.5 px-4 rounded-xl bg-[#3B1578] border-2 border-[#09FBD3CC] outline-none placeholder:text-white/80"
              placeholder="ID Wallet"
              value={valueID}
              onChange={(e) => setValueID(e.target.value)}
            />

            <p className="w-4/5 mx-auto text-center mt-4">
              Don&apos;t you have one? Starts!
            </p>

            <div className="mt-3 w-4/5 mx-auto mb-5 flex justify-center gap-4 [&>div]:w-16 [&>div]:h-16 [&>div]:bg-white [&>div]:rounded-lg [&>div]:flex [&>div]:justify-center [&>div]:items-center">
              <div>
                <Image
                  src="/wallet-icon/wallet.png"
                  alt="walletImage"
                  width={100}
                  height={100}
                  className="h-[80%]"
                />
              </div>
              <div className="pt-2">
                <Image
                  src="/wallet-icon/coin.png"
                  alt="coinWallet"
                  width={100}
                  height={100}
                />
              </div>
              <div className="pt-2">
                <Image
                  src="/wallet-icon/guard.png"
                  alt="guardWallet"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div
              className={`w-[90%] mx-auto mb-5 p-4 bg-[#3B1578] border-2 border-[#09FBD3CC] rounded-2xl ${poppins.className} *:text-sm`}
            >
              <h2 className="mb-6">By connecting your wallet, you agree to:</h2>
              <ol className="list-decimal list-inside *:mb-2">
                <li>Access: Allow the use of data for payments.</li>
                <li>Security: You are responsible for your wallet.</li>
                <li>Privacy: We use data only for transactions.</li>
              </ol>
            </div>

            <div className="w-[50%] mx-auto">
              <button
                type="button"
                className={`w-full py-2 border-2 rounded-full ${
                  valueID === ""
                    ? "bg-[#3B157880] border-[#09FBD3BF]"
                    : "bg-[#09FBD3BF] border-[#09FBD3BF]"
                }`}
                disabled={valueID === ""}
                onClick={() => {
                  setWalletID({
                    wallet_address: valueID,
                    description: "Description Prueba",
                    network: "polygon",
                  });
                  if (isTransactionHistory && allWalletID.length > 0) {
                    closeOpenWallet();
                  } else {
                    setWalletIdOpen(false);
                    setWalletConected(true);
                  }
                }}
              >
                Accept
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default WalletConected;
