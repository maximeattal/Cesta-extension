/* global chrome */

import "./App.css";
import React, { useEffect, useContext, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Context from "./Context"
import Main from "./components/main/Main";
import Login from "./components/signIn/Login";
import SignUp from "./components/signUp/SignUp";
import Private from "./components/main/Private";
import ForgotPwd from "./components/signIn/ForgotPwd";
const App = () => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  useEffect(() => {
    if(user) {
      navigate("/private/main")
    }
    else {
      navigate("/")
    }
  }, [user])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpwd" element={<ForgotPwd />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/main" element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
