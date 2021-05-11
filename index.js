import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main/index";

const App = () => <Main />;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
