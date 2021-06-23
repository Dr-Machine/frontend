import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/Auth/Login";
import FileUpload from "./components/FileUpload";

export function Routes() {


  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/file-upload" component={FileUpload} />
    </Switch>
  );
}
