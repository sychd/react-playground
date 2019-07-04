import React from 'react';
import "./click-counter.scss";

export function ClickCounter({incCounter, decCounter, counter}) {
    return (
        <div className="click-counter">
            <button className="click-counter__control" onClick={decCounter}>-</button>
                <div className="click-counter__result">{counter}</div>
            <button className="click-counter__control" onClick={incCounter}>+</button>
        </div>
    );
}
