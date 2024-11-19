"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  validateDate,
  validateEmail,
  validatePassword,
  validatePhoneNumber,
} from "@/utils/inputsVallidations";
import axiosInstance from "@/utils/axiosInstance";
import TextInput from "../form/inputs/TextInput";
import DateInput from "../form/inputs/DateInput";
import PasswordInput from "../form/inputs/PasswordInput";
import { useTranslations } from "next-intl";
import { useErrorStore } from "@/stores/useErrorStore";
import TermsAndConditions from "../legal/TermsAndConditions";
import { motion, AnimatePresence } from "framer-motion";
import PhoneInput from "../form/inputs/PhoneInput";

interface IFormInput {
  first_name: string;
  last_name: string;
  username: string;
  birth_date: string;
  email: string;
  password: string;
  re_password: string;
  myCheckbox: boolean;
  phone: number;
}

interface ISignupFormProps {
  handleClose?: () => void;
  handleCreate: () => void;
}

const SignupForm: React.FC<ISignupFormProps> = ({
  handleClose,
  handleCreate,
}) => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  const ButtonsTranslate = useTranslations("Buttons");
  const RegisterTranslate = useTranslations("Form.Register");
  const ErrorsTranslate = useTranslations("Errors.FormErrors");
  const setError = useErrorStore((state) => state.setError);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await axiosInstance.post("/Register/", data);
      if (response.status === 201) {
        if (handleClose) {
          handleClose();
        }
        handleCreate();
        setTimeout(() => {
          router.push("/auth/login")
        }, 2000);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          error.response?.data?.email?.[0] ===
          "user account with this email already exists."
        ) {
          setError({
            codeError: 400,
            messageError: "User account with this email already exists.",
          });
        } else if (error.response?.status === 400) {
          setError({
            codeError: 400,
            messageError: "Username already exists",
          });
        } else {
          setError({
            codeError: 500,
            messageError: "An unexpected error occurred. Please try again.",
          });
        }
      }
    }
  };

  const handleTerms = () => {
    setOpenTerms(true);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        {!openTerms ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.1 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-4 lg:grid-cols-2 px-[2.5%]"
            >
              <TextInput
                register={register("first_name", {
                  required: ErrorsTranslate("FirstName"),
                })}
                label={RegisterTranslate("FirstName")}
                error={errors.first_name?.message}
                icon="User"
              />
              <TextInput
                register={register("last_name", {
                  required: ErrorsTranslate("LastName"),
                })}
                label={RegisterTranslate("LastName")}
                error={errors.last_name?.message}
                icon="User"
              />
              <DateInput
                label={RegisterTranslate("BirthDate")}
                register={register("birth_date", {
                  required: ErrorsTranslate("BirthDate"),
                  validate: validateDate,
                })}
                error={errors.birth_date?.message}
                icon="Calendar"
                className="lg:col-span-2"
              />
              <PhoneInput
                register={register("phone", {
                  required: ErrorsTranslate("PhoneNumber"),
                  validate: (value) => validatePhoneNumber(value.toString()),
                })}
                label={RegisterTranslate("PhoneNumber")}
                error={errors.phone?.message}
                icon="Phone"
                
              />
              <hr className="mt-3 bg-white h-0.5 rounded-full opacity-25 lg:col-span-2" />
              <TextInput
                register={register("username", {
                  required: ErrorsTranslate("Username"),
                })}
                label={RegisterTranslate("Username")}
                error={errors.username?.message}
                icon="User"
              />
              <TextInput
                register={register("email", {
                  required: ErrorsTranslate("Email"),
                  validate: validateEmail,
                })}
                label={RegisterTranslate("Email")}
                error={errors.email?.message}
                icon="Mail"
              />
              <PasswordInput
                register={register("password", {
                  required: ErrorsTranslate("Password"),
                  validate: (value: string) =>
                    validatePassword(value, watch("first_name")),
                })}
                label={RegisterTranslate("Password")}
                error={errors.password?.message}
                icon="Lock"
              />
              <PasswordInput
                register={register("re_password", {
                  required: ErrorsTranslate("RePassword"),
                  validate: (value: string) =>
                    value === watch("password") || "Passwords do not match",
                })}
                label={RegisterTranslate("RePassword")}
                error={errors.re_password?.message}
                icon="Lock"
              />

              {isChecked ? (
                <div>
                  <label className="flex items-center w-5/6 pl-1 mx-auto mb-3">
                    <input
                      type="checkbox"
                      checked={true}
                      readOnly
                      
                      className="w-5 h-5 mr-3 "
                      {...register("myCheckbox", { required: "Required" })}
                    />
                    {RegisterTranslate("Terms&Conditions")}
                  </label>
                  {errors.myCheckbox && (
                    <p>{ErrorsTranslate("Terms&Conditions")}</p>
                  )}
                  <button
                    type="submit"
                    className="w-full mb-8 py-3 bg-[#3B157880] bg-opacity-50 rounded-full border-2 border-[#09FBD3BF] border-opacity-75 lg:col-span-2"
                  >
                    {ButtonsTranslate("Continue")}
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleTerms}
                  className="w-full mb-8 py-3 bg-[#3B157880] bg-opacity-50 rounded-full border-2 border-[#09FBD3BF] border-opacity-75 lg:col-span-2"
                >
                  {ButtonsTranslate("Continue")}
                </button>
              )}
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="terms"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.1 }}
          >
            <TermsAndConditions
              handleTerms={() => {
                setOpenTerms(!openTerms);
                setIsChecked(!isChecked);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SignupForm;
