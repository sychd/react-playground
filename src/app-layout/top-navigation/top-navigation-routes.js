import React from "react";
import { Route } from "react-router-dom";
import "./top-navigation.scss";
import { CounterPage } from "../../counter/counter-page/counter-page";
import { About } from "../../about/about";


export function TopNavigationRoutes() {
    return (
        <React.Fragment>
            <Route path="/counter/" exact component={CounterPage} />
            <Route path="/about/" component={About} />
        </React.Fragment>
    );
}