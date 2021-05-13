import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../../pages/About/index";
import Home from "../../pages/Home/index";
import ErrorPage from "../../pages/ErrorPage/index";
import Counters from "../../pages/Counters/index";
import Authorization from "../../pages/Authorization/index";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/counters" component={Counters} />
      <Route exact path="/login" component={Authorization} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </main>
);

export default Main;
