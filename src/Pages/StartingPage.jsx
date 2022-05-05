import React from "react";
import { Login } from "../Components/LogIn";
import LoginWithGoogle from "../Components/LoginWGoogle";
import { SignUp } from "../Components/SignUp";

export default function StartingPage() {
  const UI = (
    <>
      <Login />
      <SignUp />
      <LoginWithGoogle />
    </>
  );
  return UI;
}
