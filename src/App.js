/* global chrome */

import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/")
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
