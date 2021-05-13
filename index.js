import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main/index";
import Header from "./components/Header/index";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
