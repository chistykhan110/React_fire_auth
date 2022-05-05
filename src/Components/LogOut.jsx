import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";
export default function LogOut() {
  const btn_log_out = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <button className="bg-green-500 my-2 p-1 rounded " onClick={btn_log_out}>
      Logout
    </button>
  );
}
