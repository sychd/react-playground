import React from "react";
import { Route } from "react-router-dom";
import "./top-navigation.scss";
import { CounterPage } from "~counter/counter-page/counter-page";
import { PlayerPage } from "~player/player-page/player-page";
import { AboutPage } from "~about/about-page";


export function TopNavigationRoutes() {
    return (
        <React.Fragment>
            <Route path="/counter/" exact component={CounterPage} />
            <Route path="/about/" component={AboutPage} />
            <Route path="/player/" component={PlayerPage} />
        </React.Fragment>
    );
}