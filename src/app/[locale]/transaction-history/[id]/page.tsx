"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axiosTokenClient from "@/utils/axiosTokenClient";
import { useSearchParams } from "next/navigation";

interface listCurrenciesProps {
  id: number;
  name: string;
  rate: number;
}

function Page({ params }: { params: { id: number } }) {
  const id = params.id;

  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const [listCurrencies, setListCurrencies] = useState<listCurrenciesProps[]>(
    []
  );
  const [transactions, setTransactions] = useState({
    id: 0,
    amount: 0,
    ask_currency: "",
    created_at: "",
    status: "",
  });
  const [payment, setPayment] = useState<string>("");

  const [teamId, setTeamId] = useState<string | undefined>(undefined);
  const [pageInformation, setPageInformation] = useState({
    bg: "bg-[#3B1578]",
    borderGradient: {
      from: "",
      to: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transactionEndpoint =
          type === "dp"
            ? `/Deposits/deposits/${id}/`
            : `/Withdrawal/withdrawal/${id}/`;
        const [resTransaction, resCurrencies] = await Promise.all([
          axiosTokenClient.get(transactionEndpoint),
          axiosTokenClient.get(`/Rates/rates/`),
        ]);

        setTransactions(resTransaction.data);
        setListCurrencies(resCurrencies.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [id, type]);

  useEffect(() => {
    const calculatePayment = async () => {
      const currency = listCurrencies.find(
        (currency) => currency.id === Number(transactions.ask_currency)
      );

      if (transactions.amount > 0 && currency) {
        try {
          const res = await axiosTokenClient.post(
            "/Rates/rates/exchange_real_time/",
            {
              bid_currency: 1,
              ask_currency: Number(transactions.ask_currency),
              amount: transactions.amount,
            }
          );

          const exchange = parseFloat(res.data.exchange).toLocaleString(
            undefined,
            {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }
          );

          setPayment(`${exchange} ${currency.name}`);
        } catch (error) {
          console.error("Error calculating payment", error);
          setPayment("Error calculating payment");
        }
      }
    };

    if (listCurrencies.length > 0 && transactions.amount > 0) {
      calculatePayment();
    }
  }, [listCurrencies, transactions]);

  function formatDate(isoDateString: string) {
    const date = new Date(isoDateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  useEffect(() => {
    const team_id = Cookies.get("team_id");
    setTeamId(team_id);

    setPageInformation((prevPageInfo) => {
      const updatedPageInfo = { ...prevPageInfo };
      switch (team_id) {
        case "1":
          updatedPageInfo.borderGradient.from = "from-[#118BC0]";
          updatedPageInfo.borderGradient.to = "to-[#1F2FBD]";
          break;
        case "2":
          updatedPageInfo.borderGradient.from = "from-[#FBBC0D]";
          updatedPageInfo.borderGradient.to = "to-[#EE880C]";
          break;
        case "3":
          updatedPageInfo.borderGradient.from = "from-[#E60303]";
          updatedPageInfo.borderGradient.to = "to-[#720101]";
          break;
        default:
          break;
      }

      return updatedPageInfo;
    });
  }, [teamId]);

  return (
    <div className="w-full h-screen">
      <div className="pt-[40%] px-[5%]">
        <h1 className="text-[6vw]">History</h1>

        <div
          className={`relative mt-[15%] h-[40vh] w-full bg-gradient-to-r ${pageInformation.borderGradient.from} ${pageInformation.borderGradient.to} p-0.5 rounded-2xl`}
        >
          <div
            className={`absolute -top-[8%] left-1/2 -translate-x-1/2 h-[15%] w-[95%] bg-gradient-to-r ${pageInformation.borderGradient.from} ${pageInformation.borderGradient.to} p-0.5 rounded-2xl`}
          >
            <div
              className={`w-full h-full ${pageInformation.bg} rounded-xl text-[7vw] grid place-content-center`}
            >
              <h2>Purchase summary</h2>
            </div>
          </div>

          <div
            className={`w-full h-full ${pageInformation.bg} rounded-xl flex justify-center items-center`}
          >
            <div className="w-[90%] mx-auto grid grid-cols-[auto_1fr] gap-y-3 [&>p]:text-[5vw] [&>p:nth-child(2n)]:text-end">
              <p>Transaction ID</p>
              <p>{transactions.id || "Loading..."}</p>

              <p>Purchase</p>
              <p>
                {transactions.amount
                  ? `${transactions.amount} ZCN`
                  : "Loading..."}
              </p>

              <p>{type === "wd" ? "Type" : "Payment"}</p>
              <p>{type === "wd" ? "Withdrawal" : payment || "Loading..."}</p>

              <p>Status</p>
              <p>{transactions.status || "Loading..."}</p>

              <p>Date</p>
              <p>
                {transactions.created_at
                  ? formatDate(transactions.created_at)
                  : "Loading..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
