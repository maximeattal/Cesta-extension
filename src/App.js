/* global chrome */

import "./App.css";
import React, { useEffect, useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Context from "./Context"
import Main from "./components/Main";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Private from "./components/Private";
import ForgotPwd from "./components/ForgotPwd";
const App = () => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  useEffect(() => {
    if(user) {
      console.log(user)
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
        {/* <Route path="/main" element={<Main />} /> */}
      </Routes>
    </div>
  );
};

export default App;
