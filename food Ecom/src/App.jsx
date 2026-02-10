import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Home />
      <ToastContainer />
    </div>
  );
};

export default App;
