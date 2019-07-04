import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/main.scss";
import { RoutedAppLayout } from "./app-layout/routed-app-layout/routed-app-layout";

function AppComponent() {
  return (
      <RoutedAppLayout />
  );
}

var mountNode = document.querySelector("#app");
ReactDOM.render(<AppComponent />, mountNode);