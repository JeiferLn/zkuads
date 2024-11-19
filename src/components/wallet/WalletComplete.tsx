import React, { useEffect } from "react";
import Icons from "../Icons";
import WalletQR from "./WalletQR";
import copy from "clipboard-copy";
import { PurchaseInformationProps } from "./WalletModal";
import { AnimatePresence, motion } from "framer-motion";
import axiosTokenClient from "@/utils/axiosTokenClient";
import { useErrorStore } from "@/stores/useErrorStore";
import { useBalanceStore } from "@/stores/useBalanceStore";

interface WalletCompleteProps {
  back: () => void;
  handleClose: () => void;
  purchaseInformation: PurchaseInformationProps;
}

type StatusQRProps =
  | "active"
  | "expired"
  | "loading"
  | "cancelled";

function WalletComplete({
  back,
  handleClose,
  purchaseInformation,
}: WalletCompleteProps) {
  const [isCopy, setIsCopy] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(15 * 60);
  const setError = useErrorStore((state) => state.setError);
  const [statusQR, setStatusQR] = React.useState<StatusQRProps>("loading");
  const [information, setInformation] = React.useState(purchaseInformation);

  const zcoinsQuantity = useBalanceStore((state) => state.balance);

  const statusQRRef = React.useRef(statusQR);

  React.useEffect(() => {
    if (statusQRRef.current === "loading") {
      setTimeout(() => {
        setStatusQR("active");
      }, 500);
    }
  }, []);

  React.useEffect(() => {
    if (timeLeft <= 0) {
      setStatusQR("expired");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const copyToClipboard = () => {
    copy(information.wallet_address);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleRefresh = async () => {
    if (statusQR === "expired" || statusQR === "cancelled") {
      try {
        const networkID = information.network;

        setStatusQR("loading");
        setTimeout(() => setStatusQR("active"), 500);

        console.log(information.amount, information.ask_currency);

        const res = await axiosTokenClient.post("/Deposits/deposits/", {
          amount: information.amount,
          description: "Debit in hard currency",
          bid_currency: 1,
          ask_currency: information.ask_currency,
          network: networkID,
        });

        setInformation({ ...res.data, network: networkID });
        setTimeLeft(15 * 60);
      } catch (error: any) {
        setError({
          codeError: error.response?.status || 500,
          messageError: "Failed to refresh. Please try again later.",
        });
        setStatusQR("expired");
      }
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const checkStatus = async () => {
      try {
        const res = await axiosTokenClient.get(
          `/Deposits/deposits/${information.id}/`
        );
        const status = res.data.status;

        if (status === "pending") {
          setStatusQR((prev) => (prev !== "loading" ? "loading" : prev));
        } else if (status === "completed") {
          setSuccess(true);
        } else if (status === "cancelled") {
          setStatusQR("cancelled");

          clearInterval(interval!);
        }
      } catch (error) {
        setError({
          codeError: NaN,
          messageError: "An error occurred. Please try again later.",
        });

        clearInterval(interval!);
      }
    };

    interval = setInterval(checkStatus, 3000);

    return () => clearInterval(interval!);
  }, [information.id, handleClose, setError]);

  return (
    <motion.div
      className={`${
        success ? "h-[35%] w-[80%] pt-[4vh]" : "h-[65%] w-[90%] pt-[10vh]"
      } px-[5%] bg-[#5E4ACF] rounded-2xl flex-col justify-center items-center z-20 relative [box-shadow:5px_5px_11.1px_0px_rgba(9,251,211,0.50)]`}
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.1 } }}
      transition={{ type: "spring", duration: 0.4 }}
    >
      <AnimatePresence>
        {!success ? (
          <div>
            <div className="absolute w-full h-[15%] top-0 left-0 rounded-t-2xl grid place-content-center text-[4vh] duration-200 z-20 bg-[#3C2B99]">
              <div className="transition-all duration-200 absolute px-3 py-1 -left-[3%] -top-1/2 translate-y-[35%] bg-[#02132B] rounded-full flex justify-start items-center">
                <div className="w-8">
                  <Icons name="ZCoins" classname="w-8 left-[5%]" />
                </div>
                <p className="text-[5vw]">{zcoinsQuantity[0].balance}</p>
              </div>

              <div
                className="absolute w-9 left-[3%] top-1/2 -translate-y-1/2"
                onClick={back}
              >
                <Icons name="ArrowBack" />
              </div>
              <div className="flex text-[6.5vw]">PURCHASE ZCOINS</div>
              <div
                className="w-14 absolute right-0 top-1/2 -translate-y-1/2"
                onClick={handleClose}
              >
                <Icons name="Close" />
              </div>
            </div>

            <div className="w-[100%] mx-auto mt-1">
              <div className="w-[40vw] h-[38vw] mx-auto grid place-content-center bg-white rounded">
                <WalletQR
                  valueHref={information.wallet_address}
                  status={statusQR}
                  refresh={handleRefresh}
                />
              </div>

              <h3 className="w-full text-center mt-2.5 mb-0.5 text-[5vw]">
                Confirm Data
              </h3>

              <div className="p-[3%] gap-y-1.5 text-start bg-[#3B1578] border-2 border-[#09FBD3CC] rounded-xl grid grid-cols-[30%_70%] items-center">
                <p>Wallet ID</p>
                <p className="relative w-full overflow-x-auto no-scrollbar flex items-start">
                  <input
                    type="text"
                    className="bg-[#3B1578] w-[85%]"
                    value={information.wallet_address}
                    disabled
                  />
                  <div
                    className={`absolute w-5 right-0 top-1/2 -translate-y-1/2 ${
                      isCopy ? "text-[#09FBD3CC]" : "text-white"
                    } duration-200`}
                    onClick={() => {
                      setIsCopy(true);
                      copyToClipboard;
                      setTimeout(() => setIsCopy(false), 1000);
                    }}
                  >
                    <Icons name="Copy" />
                  </div>
                </p>
                <p>Network</p>
                <p>{information.network_name}</p>
                <p>Currency</p>
                <p>{information.ask_currency_name}</p>
                <p>Amount</p>
                <p>{information.amount} zcoins</p>
              </div>

              <div className="text-center mt-2 text-white/50">
                <p className="text-[4vw]">
                  Remaining Time: {formatTime(timeLeft)} mins
                </p>
              </div>
              <button
                type="button"
                className="w-[70%] block bg-[#09FBD3BF] mt-3 px-4 py-2 mx-auto rounded-full [box-shadow:0px_3.083px_3.083px_0px_rgba(0,0,0,0.25)] [text-shadow:0px_1.542px_2.467px_rgba(0,0,0,0.50)]"
                onClick={handleClose}
              >
                Finished
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="w-14 mx-auto -mt-2 mb-4">
              <Icons name="Accept" />
            </div>
            <h2 className="text-[5.5vw] mb-2">Transaction Successful!</h2>
            <p className="w-[80%] mx-auto text-[4vw] mb-5">
              Your transaction has been completed successfully.
            </p>

            <button
              type="button"
              className="w-[70%] mx-auto bg-[#08EFC9BF] rounded-full [box-shadow:0px_3.333px_3.333px_0px_rgba(0,0,0,0.25)] [text-shadow:0px_2.03px_3.247px_rgba(0,0,0,0.50)] py-2"
              onClick={handleClose}
            >
              Accept
            </button>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default WalletComplete;
