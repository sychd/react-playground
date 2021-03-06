import React from "react";
import { Link } from "react-router-dom";
import "./top-navigation.scss";




export function TopNavigation() {
    const links = [
        { path: "/counter/", title: "Counter" },
        { path: "/about/", title: "About" },
        { path: "/player/", title: "Music player" }
    ];

    return (
        <nav className="top-navigation">
            <ul className="top-navigation__list">
                {links.map(({ path, title }) =>
                    <li className="top-navigation__item" key={title}>
                        <Link to={path}>{title}</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
