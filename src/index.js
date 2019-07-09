import React from "react";
import ReactDOM from "react-dom";
import { RoutedAppLayout } from "./app-layout/routed-app-layout/routed-app-layout";
import { initializeStore } from "./initalize-store";
import { Provider } from 'react-redux'
import "./assets/styles/main.scss";

const store = initializeStore();

function AppComponent() {
  return (
    <Provider store={store}>
      <RoutedAppLayout />
    </Provider>
  );
}

var mountNode = document.querySelector("#app");
ReactDOM.render(<AppComponent />, mountNode);