import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Header from "./components/Header/index";
import About from "./components/About/index";
import Home from "./components/Home/index";
import ErrorPage from "./components/ErrorPage/index";
import Counters from "./components/Counters/index";
import Authorization from "./components/Authorization/index";
import AuthorizationReduxContainer from "./containers/AuthorizationReduxContainer";
import AuthorizationSuccessContainer from "./containers/AuthorizationSuccessContainer";
import rootReducer from "./redux/reducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/counters" component={Counters} />
        <Route path="/login" component={Authorization} />
        <Route
          exact
          path="/login-redux"
          component={AuthorizationReduxContainer}
        />
        <Route
          path="/login-redux/success"
          component={AuthorizationSuccessContainer}
        />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
