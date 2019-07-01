import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/main.scss";
import { TopNavigation } from "./top-navigation/top-navigation";

function AppComponent() {
  return (
    <div>
      <TopNavigation />
    </div>
  );
}

var mountNode = document.querySelector("#app");
ReactDOM.render(<AppComponent />, mountNode);