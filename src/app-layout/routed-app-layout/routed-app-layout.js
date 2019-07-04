import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { TopNavigation } from "../top-navigation/top-navigation";
import { TopNavigationRoutes } from "../top-navigation/top-navigation-routes";
import "./routed-app-layout.scss";

export function RoutedAppLayout() {
    return (
        <Router>
            <div className="app-layout">
                {TopNavigation()}
                <hr className="app-layout__separator" />
                {TopNavigationRoutes()}
            </div>
        </Router>
    );
}
