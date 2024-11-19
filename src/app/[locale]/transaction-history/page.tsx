"use client";

import React, { useEffect } from "react";
import WalletModal, { OptionsProps } from "@/components/wallet/WalletModal";
import axiosInstance from "@/utils/axiosInstance";
import Cookie from "js-cookie";
import { AnimatePresence, motion } from "framer-motion";
import { useUserDetailsStore } from "@/stores/useUserDetails";
import Icons from "@/components/Icons";
import { useRouter } from "next/navigation";
import ButtonSVG from "@/components/containers/history/ButtonSVG";
import WalletWithDraw from "@/components/wallet/WalletWithDraw";
import axiosTokenClient from "@/utils/axiosTokenClient";
// import { useWalletIDStore } from "@/stores/useWalletID";

interface HistoryList {
  id: number;
  amount: number;
  status: string;
  ask_currency: number;
  bid_currency: number;
  created_at: string;
  date: string;
  withdrawal_wallet: string;
}

interface teamStyles {
  bgGradient: { from: string; to: string };
  button: { inset: string; color: string };
}

function Page() {
  const router = useRouter();
  const access_token = Cookie.get("access_token");
  const [isFiltered, setIsFiltered] = React.useState<boolean>(false);
  const [isLoadMore, setIsLoadMore] = React.useState<boolean>(false);
  const [isOpenBuyZcoins, setIsOpenBuyZcoins] = React.useState(false);
  const [isActiveType, setIsActiveType] = React.useState<boolean>(false);
  const [isActiveState, setIsActiveState] = React.useState<boolean>(false);
  const [isOpenWithdrawZcoins, setIsOpenWithdrawZcoins] = React.useState(false);
  const [isActiveCurency, setIsActiveCurrency] = React.useState<boolean>(false);

  const [filteredHistoryType, setFilteredHistoryType] =
    React.useState<string>();
  const [filteredHistoryStatus, setFilteredHistoryStatus] =
    React.useState<string>();
  const [filteredHistoryCurrency, setFilteredHistoryCurrency] =
    React.useState<string>();

  const [historyList, setHistoryList] = React.useState<HistoryList[]>([]);
  const [currencyOptions, setCurrencyOptions] = React.useState<OptionsProps[]>(
    []
  );
  const [historyListFiltered, setHistoryListFiltered] = React.useState<
    HistoryList[]
  >([]);

  // const getAllWallets = useWalletIDStore((state) => state.allWalletID);
  const userDetails = useUserDetailsStore((state) => state.userDetails);

  const formattedData = (list: HistoryList[]) => {
    return list.map((item: HistoryList) => ({
      ...item,
      date: item.created_at.slice(0, 10),
    }));
  };

  const getCurrencyOptions = React.useCallback(async () => {
    try {
      const res = await axiosInstance.get("/Rates/rates/", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      setCurrencyOptions(res.data);
    } catch (error) {
      console.error(error);
    }
  }, [access_token]);

  const history = React.useCallback(async () => {
    try {
      const res = await axiosTokenClient.get(
        "/Withdrawal/withdrawal/get_transaction_history"
      );
      const data = formattedData(res.data);

      setHistoryList(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  React.useEffect(() => {
    getCurrencyOptions();
    history();
  }, [history, getCurrencyOptions]);

  const typeCurrency = (ask_currency: number) => {
    if (!currencyOptions || currencyOptions.length === 0) {
      return "Loading...";
    }

    const currency = currencyOptions.find(
      (option) => option.id === ask_currency
    );
    return currency ? currency.name : "NaN";
  };

  const filterHistoryByType = async (filter: string) => {
    try {
      if (filter !== "default") {
        if (filter === "wd") {
          setFilteredHistoryType(filter);
          const res = await axiosTokenClient.get("/Withdrawal/withdrawal/");
          const data = formattedData(res.data);

          setFilteredHistoryStatus("default");
          setFilteredHistoryCurrency("default");
          setIsFiltered(true);
          setHistoryListFiltered(data);
        } else if (filter === "dp") {
          setFilteredHistoryType(filter);
          const res = await axiosTokenClient.get("/Deposits/deposits/");
          const data = formattedData(res.data);

          setFilteredHistoryStatus("default");
          setFilteredHistoryCurrency("default");
          setIsFiltered(true);
          setHistoryListFiltered(data);
        }
      } else {
        setFilteredHistoryType("default");
        setIsFiltered(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filterHistoryByStatus = async (filter: string) => {
    if (filter !== "default") {
      setFilteredHistoryStatus(filter);
      setFilteredHistoryCurrency("default");
      const res = await axiosTokenClient.get(
        `/Deposits/deposits/get_by_status/?status=${filter}`
      );
      const data = formattedData(res.data);

      setHistoryListFiltered(data);
      setIsFiltered(true);
      setIsActiveType(false);
      setFilteredHistoryType("default");
    } else {
      setFilteredHistoryStatus("default");
      setIsActiveType(false);
      setIsFiltered(false);
    }
  };

  const filterHistoryByCurrency = async (filter: string) => {
    if (filter !== "default") {
      setFilteredHistoryCurrency(filter);
      setFilteredHistoryStatus("default");

      const res = await axiosTokenClient.get(
        `/Deposits/deposits/get_by_currency/?currency=${Number(filter)}`
      );
      const data = formattedData(res.data);

      setHistoryListFiltered(data);
      setIsFiltered(true);
      setIsActiveCurrency(false);
      setFilteredHistoryType("default");
    } else {
      setFilteredHistoryCurrency("default");
      setIsFiltered(false);
      setIsActiveCurrency(false);
    }
  };

  const teamStyles: teamStyles[] = [
    {
      bgGradient: { from: "from-[#3870C6]", to: "to-[#41C5FF]" },
      button: {
        inset:
          "[box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25),0px_4px_4px_0px_#58C8FF_inset]",
        color: "bg-[#26A8DE]",
      },
    },
    {
      bgGradient: { from: "from-[#FBBC0D]", to: "to-[#534602]" },
      button: {
        inset:
          "[box-shadow:0px_4px_4px_0px_rgba(0,0,0,0.25),0px_4px_4px_0px_rgba(255,214,116,0.84)_inset]",
        color: "bg-[#FFC437]",
      },
    },
    {
      bgGradient: { from: "from-[#E60303]", to: "to-[#720101]" },
      button: {
        inset:
          "[box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25),_0px_4px_4px_0px_#FF5858_inset]",
        color: "bg-[#FF2A2A]",
      },
    },
  ];

  const zkuadInformation = teamStyles[userDetails?.teams?.[0]?.team_id - 1] || {
    bgGradient: { from: "from-gray-400", to: "to-gray-500" },
    button: { inset: "box-shadow: none", color: "bg-gray-300" },
  };

  return (
    <div className="px-[2.5%] pt-[18vh] w-[95%] mx-auto overflow-hidden">
      <div className="w-full h-[7vh] my-[2vh] flex justify-between [&>div>p]:relative [&>div>p]:z-10 [&>div>p]:w-[60%] [&>div>p]:mx-auto [&>div>p]:text-[5vw] [&>div>p]:text-center [&>div]:pt-0.5 [&>div>p:last-child]:-mt-[1vh] [&>div>p]:[-webkit-text-stroke-width:0.6px] [&>div>p]:[-webkit-text-stroke-color:#000]">
        <div
          className="relative w-[50%] h-full"
          onClick={() => setIsOpenBuyZcoins(true)}
        >
          <ButtonSVG />
          <p>Purchase</p>
          <p>Zcoins</p>
        </div>
        <div
          className="relative w-[50%] h-full"
          onClick={() => setIsOpenWithdrawZcoins(true)}
        >
          <ButtonSVG />
          <p>Withdraw</p>
          <p>Zcoins</p>
        </div>
      </div>

      <h1 className="text-[7vw] mb-[3%]">History</h1>

      <div className="grid grid-cols-[28%_22%_auto] items-center gap-x-1">
        <div
          className={`relative h-full p-0.5 bg-gradient-to-r ${zkuadInformation.bgGradient.from} ${zkuadInformation.bgGradient.to} rounded-xl`}
        >
          <div className="w-full text-center mr-2 bg-[#3B1578] p-0.5 rounded-[10px]">
            Date
          </div>
        </div>
        <div
          className={`relative h-full p-0.5 bg-gradient-to-r ${zkuadInformation.bgGradient.from} ${zkuadInformation.bgGradient.to} rounded-xl`}
        >
          <select
            aria-label="filter"
            className="appearance-none w-full pl-[10%] mr-2 bg-[#3B1578] p-0.5 rounded-[10px] [&>option]:text-[3.5vw]"
            value={filteredHistoryType}
            onClick={() => setIsActiveType(!isActiveType)}
            onChange={(e) => filterHistoryByType(e.target.value)}
          >
            <option value="default">Type</option>
            <option value="wd">WD</option>
            <option value="dp">DP</option>
          </select>

          <div
            className={`w-5 h-5 absolute right-[8%] top-1/2 -translate-y-1/2 duration-200 ${
              isActiveType ? "rotate-90" : "-rotate-90"
            } `}
          >
            <Icons name="ArrowBack" />
          </div>
        </div>

        <div
          className={`relative w-[80%] ml-auto h-full p-0.5 bg-gradient-to-r ${zkuadInformation.bgGradient.from} ${zkuadInformation.bgGradient.to} rounded-xl`}
        >
          <select
            aria-label="filter"
            className="appearance-none w-full pl-[10%] mr-2 bg-[#3B1578] p-0.5 rounded-[10px] [&>option]:text-[3.5vw]"
            value={filteredHistoryStatus}
            onClick={() => setIsActiveState(!isActiveState)}
            onChange={(e) => filterHistoryByStatus(e.target.value)}
          >
            <option value="default">State</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="cancelled">Cancelled</option>
          </select>

          <div
            className={`w-5 h-5 absolute right-[8%] top-1/2 -translate-y-1/2 duration-200 ${
              isActiveState ? "rotate-90" : "-rotate-90"
            } `}
          >
            <Icons name="ArrowBack" />
          </div>
        </div>
      </div>

      <div className={`text-center h-[56vh] overflow-y-auto mt-[1vh]`}>
        {historyList.length > 0 ? (
          !isFiltered ? (
            (!isLoadMore ? historyList.slice(0, 9) : historyList).map(
              (transaction) => (
                <div
                  key={
                    transaction.withdrawal_wallet
                      ? "WD" + transaction.id
                      : "DP" + transaction.id
                  }
                  className={`w-full h-[8%] p-0.5 bg-gradient-to-r ${zkuadInformation.bgGradient.from} ${zkuadInformation.bgGradient.to} mb-2 rounded-xl`}
                  onClick={() =>
                    router.push(
                      `/transaction-history/${transaction.id}?type=${
                        transaction.withdrawal_wallet ? "wd" : "dp"
                      }`
                    )
                  }
                >
                  <div className="w-full h-full grid grid-cols-[26%_23%_20%_26%] items-center text-center [&>p:first-child]:text-start [&>p:last-child]:text-end gap-x-1 px-3 py-1.5 bg-[#3B1578] rounded-xl [&>p]:text-[3.5vw]">
                    <p>{transaction.date}</p>
                    <p>{transaction.withdrawal_wallet ? "WD" : "DP"}</p>
                    <p>
                      {transaction.withdrawal_wallet
                        ? "ZCOIN"
                        : typeCurrency(transaction.ask_currency)}
                    </p>

                    <p
                      className={
                        transaction.status === "completed"
                          ? "text-green-500"
                          : transaction.status === "cancelled"
                          ? "text-red"
                          : "text-white"
                      }
                    >
                      {transaction.status}
                    </p>
                  </div>
                </div>
              )
            )
          ) : historyListFiltered.length > 0 ? (
            (!isLoadMore
              ? historyListFiltered.slice(0, 9)
              : historyListFiltered
            ).map((transaction) => (
              <div
                key={
                  transaction.withdrawal_wallet
                    ? "WD" + transaction.id
                    : "DP" + transaction.id
                }
                className={`w-full h-[8%] p-0.5 bg-gradient-to-r ${zkuadInformation.bgGradient.from} ${zkuadInformation.bgGradient.to} mb-2 rounded-xl`}
                onClick={() =>
                  router.push(
                    `/transaction-history/${transaction.id}?type=${
                      transaction.withdrawal_wallet ? "wd" : "dp"
                    }`
                  )
                }
              >
                <div className="w-full h-full grid grid-cols-[24%_23%_23%_26%] items-center text-center [&>p:first-child]:text-start [&>p:last-child]:text-end gap-x-1 px-3 py-2 bg-[#3B1578] rounded-xl [&>p]:text-[3.5vw]">
                  <p>{transaction.date}</p>
                  <p>{transaction.withdrawal_wallet ? "WD" : "DP"}</p>
                  <p>
                    {transaction.withdrawal_wallet
                      ? "ZCOIN"
                      : typeCurrency(transaction.ask_currency)}
                  </p>
                  <p
                    className={
                      transaction.status === "completed"
                        ? "text-green-500"
                        : transaction.status === "cancelled"
                        ? "text-red"
                        : "text-white"
                    }
                  >
                    {transaction.status}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full h-full flex justify-center pt-[10%]">
              <p className="text-2xl">You have not made any transactions yet</p>
            </div>
          )
        ) : (
          <div className="w-full h-full grid place-content-center relative z-10">
            <p className="text-2xl">You have not made any transactions yet</p>
          </div>
        )}
      </div>

      {historyList.length > 3 && !isLoadMore && (
        <div className="w-[60%] -mt-[10%] mx-auto">
          <button
            type="button"
            className={`w-full py-2 rounded-full ${zkuadInformation.button.color} ${zkuadInformation.button.inset}`}
            onClick={() => setIsLoadMore(true)}
          >
            Load More
          </button>
        </div>
      )}

      <AnimatePresence>
        {isOpenBuyZcoins && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-screen z-10 backdrop-blur-[7px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <WalletModal handleClose={() => setIsOpenBuyZcoins(false)} />
          </motion.div>
        )}

        {isOpenWithdrawZcoins && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-screen z-10 backdrop-blur-[7px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <WalletWithDraw
              handleClose={() => setIsOpenWithdrawZcoins(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Page;
