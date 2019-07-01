import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/main.scss";
import { ClickCounter } from "./counter/click-counter/click-counter";

function AppComponent() {
  return (
    <div>
      <ClickCounter count={100} />
    </div>
  );
}

var mountNode = document.querySelector("#app");
ReactDOM.render(<AppComponent />, mountNode);