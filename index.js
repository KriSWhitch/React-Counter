import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main/index";
import Header from "./components/Header/index";

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
