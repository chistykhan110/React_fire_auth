import React from "react";
import LogOut from "../Components/LogOut";

export default function HomePage() {
  const UI = (
    <>
      <div>Hello this is protected home page</div>
      <LogOut />
    </>
  );
  return UI;
}
