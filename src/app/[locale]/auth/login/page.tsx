"use client";

import React from "react";
import LoginForm from "@/components/login/LoginForm";

function LoginPage() {
  return (
    <>
      <div className="px-[10%] lg:w-[35%] lg:bg-black lg:bg-opacity-20 lg:p-5 rounded-lg">
        <LoginForm />
      </div>
    </>
  );
}

export default LoginPage;
