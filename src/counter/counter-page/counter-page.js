import { ClickCounter } from '~counter/click-counter/click-counter';
import React, { useState, useEffect } from 'react';
import "./counter-page.scss";

const initialCounter = Math.ceil(Math.random() * 100);

export function CounterPage() {
    const [counter, setCounter] = useState(initialCounter);

    let incCounter = () => setCounter(counter + 1);
    let decCounter = () => setCounter(counter - 1);
    let resetCounter = () => setCounter(0);
 
    useEffect(() => {
        console.log('Render has been occured');
    }); 

    useEffect(() => {
        console.log('Count has been changed', counter);
    }, [counter]);

    return (
        <div className="counter-page">
            <h2 className="counter-page__header">Counter page</h2>
            <ClickCounter className="click-counter"
                incCounter={incCounter}
                decCounter={decCounter}
                counter={counter} />
            <button className="counter-page__reset-btn" onClick={resetCounter}>Reset counter</button>
        </div>
    );
}
