import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
// import { shallowEqual, useSelector } from "react-redux";
// import { Layout } from "../_metronic/layout";
// import BasePage from "./BasePage";
// import { Logout, AuthPage } from "./modules/Auth";
// import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import App from "./App";
import Login from "./components/Auth/Login";

export function Routes() {
  //   const { isAuthorized } = useSelector(
  //     ({ auth }) => ({
  //       isAuthorized: auth.user != null,
  //     }),
  //     shallowEqual
  //   );

  return (
    <Switch>
      {/* {window.localStorage.getItem("access") === null ? ( */}
      {/* /*Render auth page when user at `/auth` and not authorized.*/}
      {/* // <Route> */}
      {/* //   <AuthPage /> */}
      {/* // </Route> */}
      // ) : ({/* /*Otherwise redirect to root page (`/`)*/}
      {/* // <Redirect from="/auth" to="/" /> */}
      {/* //   )} */}
      <Route exact path="/" component={App} />
      {/* <Route component={ErrorsPage} /> */}
      <Route exact path="/login" component={Login} />
      {/* )} */}
    </Switch>
  );
}
