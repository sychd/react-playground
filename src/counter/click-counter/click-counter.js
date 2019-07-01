import React, { useState, useEffect } from 'react';
import "./click-counter.scss";

export function ClickCounter(props) {
    const [count, setCount] = useState(props.count || 0);


    useEffect(() => {
        console.log('Render has been occured');
    });

    useEffect(() => {
        console.log('Count has been changed');
    }, [count]);

    return (
        <div class="click-counter">
            <button class="click-counter__control" onClick={() => setCount(count - 1)}>-</button>
                <div class="click-counter__result">{count}</div>
            <button class="click-counter__control" onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}
