import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.con";

//Internal Imports
import { PrivetRoute } from "./Hooks/PrivetRoute";
import HomePage from "./Pages/HomePage";
//
export default function App() {
  const app = initializeApp(firebaseConfig);
  const UI = (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivetRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  return UI;
}
