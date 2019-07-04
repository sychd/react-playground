import React from "react";
import { Route } from "react-router-dom";
import "./top-navigation.scss";
import { CounterPage } from "~counter/counter-page/counter-page";
import { MusicPlayerPage } from "~music-player/music-player-page/music-player-page";
import { AboutPage } from "~about/about-page";


export function TopNavigationRoutes() {
    return (
        <React.Fragment>
            <Route path="/counter/" exact component={CounterPage} />
            <Route path="/about/" component={AboutPage} />
            <Route path="/music-player/" component={MusicPlayerPage} />
        </React.Fragment>
    );
}