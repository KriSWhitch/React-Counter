import React from "react";
import { Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import About from "../../pages/About/index";
import Home from "../../pages/Home/index";
import ErrorPage from "../../pages/ErrorPage/index";
import Counters from "../../pages/Counters/index";
import Authorization from "../../pages/Authorization/index";
import AuthorizationReduxContainer from "../../containers/AuthorizationReduxContainer";
import AuthorizationSuccessContainer from "../../containers/AuthorizationSuccessContainer";
import rootReducer from "../../store/reducers";

const store = createStore(rootReducer);

const Main = () => (
  <main>
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
  </main>
);

export default Main;
