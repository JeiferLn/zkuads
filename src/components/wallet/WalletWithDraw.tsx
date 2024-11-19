import axiosTokenClient from "@/utils/axiosTokenClient";
import React, { useEffect } from "react";
import Icons from "../Icons";
import { poppins } from "../Fonts";
import { useBalanceStore } from "@/stores/useBalanceStore";
import ImportantSVG from "../containers/withdraw/ImportantSVG";
import SpinnerSVG from "../SpinnerSVG";

interface RatesProps {
  id: number;
  name: string;
}

function WalletWithDraw({ handleClose }: { handleClose: () => void }) {
  const [isWithdrawal, setIsWithdrawal] = React.useState(false);
  const [withDrawModal, setWithDrawModal] = React.useState(false);
  const [isImportantOpen, setIsImportantOpen] = React.useState(false);
  const [loadingWithdrawal, setLoadingWithdrawal] = React.useState(false);
  const [sussecfullTransaction, setSussecfullTransaction] = React.useState("");

  const [quantity, setQuantity] = React.useState("");
  const [errorAmount, setErrorAmount] = React.useState("");
  const [walletAddress, setWalletAddress] = React.useState("");
  const [valueConverted, setValueConverted] = React.useState("");
  const [errorWalletAddress, setErrorWalletAddress] = React.useState("");

  const [rates, setRates] = React.useState<RatesProps[]>([
    {
      id: 0,
      name: "",
    },
  ]);

  const zcoinsQuantity = useBalanceStore((state) => state.balance);

  const getRates = async () => {
    const res = await axiosTokenClient.get("/Rates/rates/");
    setRates(res.data);
  };

  useEffect(() => {
    getRates();
  }, []);

  useEffect(() => {
    if (quantity === "" || Number(quantity) < 0) {
      setTimeout(() => {
        setQuantity("");
        setValueConverted("0");
      }, 300);
      return;
    }
  }, [quantity]);

  const convertValueToCrypto = async (value: string) => {
    setQuantity(value);
    if (value === "" || Number(value) < 0) {
      setTimeout(() => {
        setQuantity("");
        setValueConverted("0");
      }, 300);
      return;
    } else if (value !== "0" && value !== "0.") {
      try {
        const res = await axiosTokenClient.post(
          `/Rates/rates/exchange_real_time/`,
          {
            bid_currency: 1,
            ask_currency: rates.find((rate: RatesProps) => rate.name === "USDT")
              ?.id,
            amount: value,
          }
        );
        const exchange = parseFloat(res.data.exchange).toLocaleString(
          undefined,
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }
        );

        setValueConverted(exchange);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const withdrawZcoins = async () => {
    try {
      setLoadingWithdrawal(true);

      setTimeout(() => {
        setIsWithdrawal(true);
        setLoadingWithdrawal(false);
      }, 300);

      const res = await axiosTokenClient.post("/Withdrawal/withdrawal/", {
        currency: 1,
        amount: Number(quantity),
        withdrawal_wallet: walletAddress,
      });

      if (res.status === 201) {
        setSussecfullTransaction("success");
      }
    } catch (error) {
      console.log(error);
      setSussecfullTransaction("failed");
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className="w-full h-full absolute top-0 left-0 bg-black/50"
        onClick={handleClose}
      />

      <div
        className={`relative ${
          isWithdrawal ? "w-[80%] h-[35vh]" : "w-[90%] h-[76vh]"
        } ${
          sussecfullTransaction === "failed" && isWithdrawal
            ? "bg-[#B51C1C] [box-shadow:5px_5px_11.1px_0px_rgba(251,9,9,0.50)]"
            : "bg-[#5E4ACF] [box-shadow:5px_5px_11.1px_0px_#09fbd380]"
        } transition-all duration-200 bg-[#5E4ACF] [box-shadow:5px_5px_11.1px_0px_#09fbd380] rounded-2xl z-20`}
      >
        <div
          className={`w-full h-[12%] bg-[#3C2B99] rounded-t-2xl relative grid place-content-center ${
            isWithdrawal ? "opacity-0" : "opacity-100"
          } duration-200`}
        >
          <div className="transition-all duration-200 absolute px-3 py-1 -left-[3%] -top-1/2 translate-y-[35%] bg-[#02132B] rounded-full flex justify-start items-center">
            <div className="w-8">
              <Icons name="ZCoins" classname="w-8 top-0 left-[5%]" />
            </div>
            <p className="text-[5vw]">{zcoinsQuantity[0].balance}</p>
          </div>

          <div
            className={`${
              withDrawModal ? "opacity-100" : "opacity-0"
            } transition-all duration-200 w-8 absolute top-1/2 -translate-y-1/2 left-[5%]`}
            onClick={() => setWithDrawModal(false)}
          >
            <Icons name="ArrowBack" />
          </div>

          <h2 className="text-[6.5vw]">WITHDRAW ZCOINS</h2>
          <div
            className="w-12 absolute top-1/2 -translate-y-1/2 right-0"
            onClick={handleClose}
          >
            <Icons name="Close" />
          </div>
        </div>

        {!withDrawModal ? (
          <div className="w-full h-[88%]">
            <div className="w-full h-full px-[5%] pt-[5%] relative">
              <label
                className={`${poppins.className}  pl-[7%] ${
                  errorAmount !== ""
                    ? "text-[#ff7c7c] font-[600] text-[3.2vw]"
                    : "text-white text-[3vw]"
                } duration-200`}
              >
                {errorAmount !== ""
                  ? errorAmount
                  : "Enter the amount of Zcoins"}
              </label>
              <input
                className={`my-1 w-full bg-[#3B1578] border-2 rounded-xl focus:outline-none focus:border-[#09FBD3CC] px-[8%] py-2.5 ${
                  errorAmount !== "" ? "border-red" : "border-[#09FBD3CC]"
                }`}
                type="number"
                inputMode="numeric"
                pattern="\d*"
                autoComplete="off"
                value={quantity}
                onKeyDown={(e) => {
                  if (
                    !/[0-9]|\bBackspace\b|\bDelete\b|\bArrow\b|\bTab\b/.test(
                      e.key
                    )
                  ) {
                    e.preventDefault();
                  }
                }}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    convertValueToCrypto(value);
                  }
                }}
                onBlur={() => {
                  if (Number(quantity) > zcoinsQuantity[0].balance) {
                    setErrorAmount("You don't have enough Zcoins to withdraw");
                  } else {
                    setErrorAmount("");
                  }
                }}
                placeholder="Enter amount"
              />

              <label
                className={`${poppins.className} text-[3vw] pl-[7%] ${
                  errorWalletAddress !== ""
                    ? "text-[#ff7c7c] font-[600] text-[3.2vw]"
                    : "text-white text-[3vw]"
                } duration-200`}
              >
                {errorWalletAddress !== ""
                  ? errorWalletAddress
                  : "Enter your wallet ID"}
              </label>
              <input
                className={`my-1 w-full bg-[#3B1578] border-2 rounded-xl focus:outline-none focus:border-[#09FBD3CC] px-[8%] py-2.5 ${
                  errorWalletAddress !== ""
                    ? "border-red"
                    : "border-[#09FBD3CC]"
                }`}
                type="text"
                autoComplete="off"
                placeholder="0x123ABC.."
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                onBlur={() => {
                  if (walletAddress === "") {
                    setErrorWalletAddress("Please enter your wallet address");
                  } else if (!walletAddress.startsWith("0x")) {
                    setErrorWalletAddress(
                      "Wallet address must start with '0x'"
                    );
                  } else if (walletAddress.length !== 42) {
                    setErrorWalletAddress(
                      "Wallet address must be 42 characters long"
                    );
                  } else if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
                    setErrorWalletAddress("Invalid wallet address");
                  } else {
                    setErrorWalletAddress("");
                  }
                }}
              />

              <div className="my-2 w-full text-center">
                <p>
                  {quantity === "" ? "0" : quantity} zcoins = {valueConverted}{" "}
                  USDT
                </p>
              </div>

              <label className={`${poppins.className} text-[3vw] pl-[7%]`}>
                Cryptocurrency
              </label>
              <input
                className="my-1 w-full bg-[#3B1578] border-2 border-[#09FBD3CC] rounded-xl focus:outline-none focus:border-[#09FBD3CC] px-[8%] py-2.5"
                disabled
                type="text"
                autoComplete="off"
                placeholder="USDT"
              />

              <label className={`${poppins.className} text-[3vw] pl-[7%]`}>
                Network
              </label>
              <input
                className="my-1 w-full bg-[#3B1578] border-2 border-[#09FBD3CC] rounded-xl focus:outline-none focus:border-[#09FBD3CC] px-[8%] py-2.5"
                disabled
                type="text"
                autoComplete="off"
                placeholder="Polygon"
              />

              <div className="w-full text-center">
                <p
                  className={`${poppins.className} w-[60%] mx-auto text-[3vw] text-[#fffc] my-2`}
                >
                  Using the wrong network can lose your crypto.
                </p>
              </div>

              <div className="w-full text-center my-4">
                <button
                  type="button"
                  className={`${
                    valueConverted === "" ||
                    valueConverted === "0" ||
                    walletAddress === "" ||
                    errorAmount !== "" ||
                    errorWalletAddress !== ""
                      ? "opacity-80"
                      : "opacity-100"
                  } transition-all duration-200 w-[60%] py-2 bg-[#08EFC9BF] rounded-full [box-shadow:0px_3.333px_3.333px_0px_rgba(0,0,0,0.25)] [text-shadow:0px_2.03px_3.247px_rgba(0,0,0,0.50)]`}
                  disabled={
                    valueConverted === "" ||
                    valueConverted === "0" ||
                    walletAddress === "" ||
                    errorAmount !== "" ||
                    errorWalletAddress !== ""
                  }
                  onClick={() => setWithDrawModal(true)}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        ) : !isWithdrawal ? (
          <div className="w-full h-[80%]">
            <div className="w-full h-full px-[5%] pt-[4%] relative">
              <div className="w-full h-full flex flex-col items-center ">
                <h2>IMPORTANT</h2>

                <div
                  className={`pt-[12%] pb-[3%] relative mx-auto text-center ${
                    isImportantOpen ? "h-[88%]" : "h-[82%]"
                  } transition-all duration-500`}
                  onClick={() => setIsImportantOpen(!isImportantOpen)}
                >
                  <ImportantSVG isImportantOpen={isImportantOpen} />

                  <div
                    className={`${
                      isImportantOpen ? "h-[90%]" : "h-[35%] overflow-hidden"
                    } transition-all duration-100`}
                  >
                    <div
                      className={`${poppins.className} relative z-10 ${poppins.className} px-[8%] text-[3vw] text-left text-[#fffc]`}
                    >
                      <h3 className="text-white text-center">
                        Please read carefully before making any withdrawal
                        transaction.
                      </h3>
                      <ol className="list-decimal mt-2 space-y-2 text-[#fffc]">
                        <li>
                          <span>Wallet Address: </span>
                          Please check, errors cause loss of funds.
                        </li>
                        <li>
                          <span>Correct Network: </span>
                          Choose well, funds sent incorrectly are lost.
                        </li>
                        <li>
                          <span>Cryptocurrency: </span>
                          Use the right one, funds in unsupported wallets are
                          unrecoverable.
                        </li>
                        <li>
                          <span>Confirmation: </span>
                          Transactions are irreversible. Please review the
                          details before confirming.
                        </li>
                        <li>
                          <span>Market Risks: </span>
                          Cryptocurrencies are volatile. We are not responsible
                          for any losses due to fluctuations in value.
                        </li>
                        <li>
                          <span>Technical Support: </span>
                          We help with technical issues, but we do not guarantee
                          the recovery of funds lost due to user errors.
                        </li>
                      </ol>
                    </div>
                    <p
                      className={`mt-1 text-left text-[2.8vw] px-[5%] relative z-10 ${poppins.className} text-[#fffc]`}
                    >
                      By withdrawing, you agree that you have read and
                      understood these terms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full h-[60%] absolute left-0 top-1/2 -translate-y-[7%] text-center flex flex-col justify-between">
                <div
                  className={`${isImportantOpen ? "opacity-0" : "opacity-100"}`}
                >
                  <h2 className="mb-2">Transaction Summary</h2>

                  <div className="w-[90%] rounded-xl mx-auto bg-[#3B1578] border-2 border-[#09FBD3CC] grid grid-cols-[40%_60%] gap-y-3 text-[5vw] text-left p-[5%]">
                    <p>Wallet ID</p>
                    <input
                      className="bg-[#3B1578]"
                      disabled
                      value={walletAddress}
                    />
                    <p>Network</p>
                    <p>Polygon</p>
                    <p>Currency</p>
                    <p>USDT</p>
                    <p>Amount</p>
                    <p>{quantity} Zcoins</p>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    className={`w-1/2 py-1.5 text-[5vw] bg-[#09FBD3CC] rounded-full [text-shadow:0px_1.542px_2.467px_rgba(0,0,0,0.50)] [box-shadow:0px_3.083px_3.083px_0px_rgba(0,0,0,0.25)] ${
                      isImportantOpen ? "opacity-60" : "opacity-100"
                    } duration-200`}
                    disabled={isImportantOpen}
                    onClick={withdrawZcoins}
                  >
                    {loadingWithdrawal ? (
                      <div className="w-7 mx-auto h-7">
                        <SpinnerSVG isColor />
                      </div>
                    ) : (
                      "Withdraw"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : sussecfullTransaction === "success" ? (
          <div className="text-center">
            <div className="w-14 mx-auto -mt-2 mb-4">
              <Icons name="Accept" />
            </div>
            <h2 className="text-[5.5vw] mb-2">Withdrawal Successful!</h2>
            <p className="w-[70%] mx-auto text-[4vw] mb-5">
              Your funds have been sent successfully.
            </p>

            <button
              type="button"
              className="w-[70%] mx-auto bg-[#08EFC9BF] rounded-full [box-shadow:0px_3.333px_3.333px_0px_rgba(0,0,0,0.25)] [text-shadow:0px_2.03px_3.247px_rgba(0,0,0,0.50)] py-2"
              onClick={handleClose}
            >
              Accept
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className="w-16 mx-auto -mt-2 mb-2">
              <Icons name="Error" />
            </div>
            <h2 className="text-[5.5vw] mb-2">Withdrawal Failed!</h2>
            <p className="w-[70%] mx-auto text-[4vw] mb-5">
              Please verify the entered wallet address.
            </p>

            <button
              type="button"
              className="w-[70%] mx-auto bg-[#08EFC9BF] rounded-full [box-shadow:0px_3.333px_3.333px_0px_rgba(0,0,0,0.25)] [text-shadow:0px_2.03px_3.247px_rgba(0,0,0,0.50)] py-2"
              onClick={() => {
                setIsWithdrawal(false);
                setWithDrawModal(false);
              }}
            >
              Retry
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default WalletWithDraw;
