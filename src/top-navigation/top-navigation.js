import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CounterPage } from "~counter/counter-page/counter-page";
import "./top-navigation.scss";

function About() {
    return <h2 style={{textAlign : 'center'}}>About</h2>;
}

export function TopNavigation() {
    return (
        <Router>
            <div className="top-navigation">
                <nav>
                    <ul className="top-navigation__list">
                        <li className="top-navigation__item">
                            <Link to="/counter/">Counter</Link>
                        </li>
                        <li className="top-navigation__item">
                            <Link to="/about/">About</Link>
                        </li>
                    </ul>
                </nav>
                <hr className="top-navigation__separator"/>
                <Route path="/counter/" exact component={CounterPage} />
                <Route path="/about/" component={About} />
            </div>
        </Router>
    );
}
