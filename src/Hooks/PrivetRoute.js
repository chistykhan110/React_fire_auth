import { Outlet } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import StartingPage from "../Pages/StartingPage.jsx";
import LoadingPage from "../Pages/LoadingPage.jsx";
import React, { useEffect, useState } from "react";
export const PrivetRoute = () => {
  const [myAuth, set_myAuth] = useState(0);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      set_myAuth(1);
    }
    if (user == null) {
      set_myAuth(-1);
    }
  });
  return (
    <>
      {myAuth == 0 ? (
        <LoadingPage />
      ) : myAuth == 1 ? (
        <Outlet />
      ) : myAuth == -1 ? (
        <StartingPage />
      ) : (
        <div>Fundamental Error</div>
      )}
    </>
  );
};
