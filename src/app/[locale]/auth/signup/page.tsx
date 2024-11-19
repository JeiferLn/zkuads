"use client";
import SignupForm from "@/components/signup/SignupForm";
import { useErrorStore } from "@/stores/useErrorStore";
import React from "react";

const SignupPage = () => {
  const message = useErrorStore((state) => state.setError);

  return (
    <div>
      <div className="w-full flex">
        <div className="w-[95%] mx-auto lg:w-1/2 lg:pl-[2%] relative lg:mt-0">
          <SignupForm handleCreate={() => message({
            messageError: "Account created successfully",
          })} />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
