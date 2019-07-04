import React from "react";
import { Link } from "react-router-dom";
import "./top-navigation.scss";


export function TopNavigation() {
    return (
        <nav className="top-navigation">
            <ul className="top-navigation__list">
                <li className="top-navigation__item">
                    <Link to="/counter/">Counter</Link>
                </li>
                <li className="top-navigation__item">
                    <Link to="/about/">About</Link>
                </li>
            </ul>
        </nav>
    );
}
