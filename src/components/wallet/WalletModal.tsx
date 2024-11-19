import axiosInstance from "@/utils/axiosInstance";
import Cookie from "js-cookie";
import React, { useEffect } from "react";
import WalletComplete from "./WalletComplete";
import { motion, AnimatePresence } from "framer-motion";
import Icons from "../Icons";
import { poppins } from "../Fonts";
import axiosTokenClient from "@/utils/axiosTokenClient";
import { useBalanceStore } from "@/stores/useBalanceStore";

interface WalletModalProps {
  handleClose: () => void;
}

export type OptionsProps = {
  id: number;
  name: string;
};

export type ResultProp = {
  value: string;
  name: string;
};

export type PurchaseInformationProps = {
  id: number;
  amount: number;
  description: string;
  status: string;
  bid_currency: number;
  ask_currency: number;
  ask_currency_name: string;
  wallet_address: string;
  network: number;
  network_name: string;
};

function WalletModal({ handleClose }: WalletModalProps) {
  const [value, setValue] = React.useState("");
  const access_token = Cookie.get("access_token");
  const [result, setResult] = React.useState<ResultProp>();

  const [isOpen, setIsOpen] = React.useState(false);
  const [isActiveSelectNetwork, setIsActiveSelectNetwork] =
    React.useState(false);
  const [isActiveSelectCurrency, setIsActiveSelectCurrency] =
    React.useState(false);

  const [selectIDNetwork, setSelectIDNetwork] = React.useState<number>(0);
  const [selectOptionNetwork, setSelectOptionNetwork] =
    React.useState<string>("default");
  const [selectOptionCurrency, setSelectOptionCurrency] =
    React.useState<string>("default");
  const [currencyOptions, setCurrencyOptions] = React.useState<OptionsProps[]>(
    []
  );
  const [networkOptions, setNetworkOptions] = React.useState<OptionsProps[]>(
    []
  );
  const [purchaseInformation, setPurchaseInformation] =
    React.useState<PurchaseInformationProps>({
      id: 0,
      amount: 0,
      description: "",
      status: "",
      bid_currency: 0,
      ask_currency: 0,
      ask_currency_name: "",
      wallet_address: "",
      network: 0,
      network_name: "",
    });

  const zcoinsQuantity = useBalanceStore((state) => state.balance);

  useEffect(() => {
    const optionsCurrency = async () => {
      try {
        const res = await axiosTokenClient.get<OptionsProps[]>("/Rates/rates/");

        setCurrencyOptions(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    optionsCurrency();
  }, []);

  useEffect(() => {
    if (selectOptionCurrency !== "default") {
      const getNetworks = async () => {
        try {
          const res = await axiosTokenClient(
            `/Network/network/get_by_rate?rate=${selectOptionCurrency}`
          );

          setNetworkOptions(res.data);
        } catch (error) {
          console.error(error);
        }
      };
      getNetworks();
    }
  }, [selectOptionCurrency]);

  const changeValue = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value) > 0 ? event.target.value : "0";

    setValue(newValue);

    if (selectOptionCurrency !== "default") {
      await changeCurrency(selectOptionCurrency, newValue);
    }
  };

  const changeCurrency = async (valueSelect: string, newValue?: string) => {
    const selectValue = newValue ? Number(newValue) : Number(value);
    setSelectOptionCurrency(valueSelect);
    setSelectOptionNetwork("default");
    if (valueSelect === "default" || selectValue === 0) {
      setValue("");
      setIsActiveSelectCurrency(false);
      setResult({
        value: "",
        name: "",
      });
      setNetworkOptions([]);
    } else if (selectValue > 0) {
      try {
        const res = await axiosInstance.post(
          "/Rates/rates/exchange_real_time/",
          {
            bid_currency: 1,
            ask_currency: valueSelect,
            amount: selectValue,
          },
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        const selectedCurrency = currencyOptions.find(
          (option) => option.id === Number(valueSelect)
        );

        if (selectedCurrency) {
          setIsActiveSelectCurrency(false);
          const exchange = parseFloat(res.data.exchange).toLocaleString(
            undefined,
            {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }
          );

          setResult({
            value: `${selectValue} zcoins = ${exchange}`,
            name: selectedCurrency.name,
          });
        }
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    }
  };

  const changeNetwork = async (valueSelect: string) => {
    if (value !== "default") {
      setSelectIDNetwork(Number(valueSelect));
    }

    setSelectOptionNetwork(valueSelect);
    setIsActiveSelectNetwork(false);
  };

  const continuePayment = async (optionCurrency: string) => {
    try {
      const response = await axiosTokenClient.post("/Deposits/deposits/", {
        amount: Number(value),
        description: "Debit en hard currency",
        bid_currency: 1,
        ask_currency: Number(optionCurrency),
        network: selectIDNetwork,
      });

      setPurchaseInformation({
        ...response.data,
        ask_currency_name: currencyOptions.find(currency => currency.id === Number(optionCurrency))?.name || "",
        network: selectIDNetwork,
        network_name: networkOptions.find(network => network.id === selectIDNetwork)?.name || "",
      });

      setTimeout(() => {
        setIsOpen(true);
      }, 100);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className="w-full h-full absolute top-0 left-0 bg-black/50"
        onClick={handleClose}
      />
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            className={`relative w-[90%] ${
              selectOptionCurrency === "default" || value === ""
                ? "h-[60vh]"
                : "h-[65vh]"
            } transition-all duration-200 px-8 bg-[#5E4ACF] [box-shadow:5px_5px_11.1px_0px_#09fbd380] rounded-2xl grid place-content-center z-20`}
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.9 }}
            transition={{ type: "", duration: 0.1 }}
          >
            <div className="absolute w-full h-[15%] top-0 grid place-content-center text-[6.5vw] duration-200 z-20 bg-[#3C2B99] rounded-t-2xl">
              <div className="transition-all duration-200 absolute px-3 py-1 -left-[3%] -top-1/2 translate-y-[35%] bg-[#02132B] rounded-full flex justify-start items-center">
                <div className="w-8">
                  <Icons name="ZCoins" classname="w-8 top-0 left-[5%]" />
                </div>
                <p className="text-[5vw]">{zcoinsQuantity[0].balance}</p>
              </div>

              <div className="flex">PURCHASE ZCOINS</div>

              <div
                className="w-14 absolute right-0 top-1/2 -translate-y-1/2"
                onClick={handleClose}
              >
                <Icons name="Close" />
              </div>
            </div>
            <div
              className={`text-start ${
                selectOptionCurrency === "default" || value === ""
                  ? "pt-[5%]"
                  : "pt-[10%]"
              } w-[90%] mx-auto`}
            >
              <label
                className={`${poppins.className} text-[3.5vw] w-full pl-1`}
              >
                Enter the amount
              </label>
              <input
                type="number"
                inputMode="numeric"
                pattern="\d*"
                autoComplete="off"
                onKeyDown={(e) => {
                  if (
                    !/[0-9]|\bBackspace\b|\bDelete\b|\bArrow\b|\bTab\b/.test(
                      e.key
                    )
                  ) {
                    e.preventDefault();
                  }
                }}
                value={value}
                onChange={changeValue}
                className="w-full px-4 py-2 bg-[#3B1578] border-2 border-[#09FBD3CC] rounded-xl mb-3 mt-1 outline-none"
              />
              <label className={`${poppins.className} text-[3.5vw] pl-1`}>
                Select a crypto
              </label>
              <div className="relative">
                <select
                  aria-label="Selecciona una moneda"
                  value={selectOptionCurrency}
                  onChange={(e) => changeCurrency(e.target.value)}
                  onClick={() =>
                    setIsActiveSelectCurrency(!isActiveSelectCurrency)
                  }
                  className="w-full px-4 py-2 mb-5 mt-1 rounded-xl border-2 border-[#09FBD3CC] appearance-none bg-[#3B1578] outline-none"
                >
                  <option value="default">Select a crypto</option>
                  {currencyOptions.map((option) => (
                    <option key={option.id} value={option.id.toString()}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <div
                  className={`w-6 absolute right-[3vw] top-[30%] -translate-y-1/4 duration-200 ${
                    isActiveSelectCurrency ? "rotate-90" : "-rotate-90"
                  }`}
                >
                  <Icons name="ArrowBack" />
                </div>
              </div>

              <label className={`${poppins.className} text-[3.5vw] pl-1`}>
                Select a Network
              </label>
              <div className="relative">
                <select
                  aria-label="Selecciona una red"
                  value={selectOptionNetwork}
                  onChange={(e) => changeNetwork(e.target.value)}
                  onClick={() =>
                    setIsActiveSelectNetwork(!isActiveSelectNetwork)
                  }
                  className="w-full px-4 py-2 mb-5 mt-1 rounded-xl border-2 border-[#09FBD3CC] appearance-none bg-[#3B1578] outline-none"
                >
                  <option value="default">Select a network</option>
                  {networkOptions.map((option, index) => (
                    <option key={option.id} value={option.id.toString()}>
                      {option.name} {index === 0 ? " (Default)" : ""}
                    </option>
                  ))}
                </select>
                <div
                  className={`w-6 absolute right-[3vw] top-[30%] -translate-y-1/4 duration-200 ${
                    isActiveSelectNetwork ? "rotate-90" : "-rotate-90"
                  }`}
                >
                  <Icons name="ArrowBack" />
                </div>
              </div>

              <div className="text-center -mt-[0.5vh] mb-[2vh]">
                <p className={`${poppins.className} text-[2.5vw]`}>
                  Using the wrong network can lead to losing your crypto.
                </p>
              </div>
              <div
                className={`w-full text-center ${
                  selectOptionCurrency === "default" || value === ""
                    ? "h-0"
                    : "h-auto"
                } transition-all duration-200`}
              >
                {result?.value} {result?.name}
              </div>
              <div className="relative w-[70%] mx-auto mb-[2vh]">
                <button
                  type="button"
                  className={`w-full absolute top-0 left-1/2 -translate-x-1/2 bg-[#09FBD3BF] rounded-full px-4 py-2 mx-auto duration-200 [box-shadow:0px_3.083px_3.083px_0px_rgba(0,0,0,0.25)] [text-shadow:0px_1.542px_2.467px_rgba(0,0,0,0.50)] ${
                    selectOptionCurrency === "default" || value === ""
                      ? ""
                      : "mt-3"
                  } ${selectOptionNetwork === "default" ? "opacity-40" : ""}`}
                  onClick={() => continuePayment(selectOptionCurrency)}
                  disabled={selectOptionNetwork === "default"}
                >
                  Continuar
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <WalletComplete
            back={() => setIsOpen(false)}
            handleClose={handleClose}
            purchaseInformation={purchaseInformation}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default WalletModal;
