import React, {useState} from "react";
import "./range.scss";

export function Range(props) {
    const [value, setValue] = useState(props.value || 0);
    const [isCtrlPressed, setIsCtrlPressed] = useState(false);

    const setPressedOnVolumeCtrl = isCtrlPressed => (event) => {
        setIsCtrlPressed(isCtrlPressed);
        valueChangeHandler(isCtrlPressed, event);
    };

    const valueChangeHandler = (isCtrlPressed, event) => {
        setValue(event.target.value);
        if (!isCtrlPressed) {
            props.onValueChange(+value);
        }
    };

    return (
        <input id={props.id} type="range" step="5" className="range"
               onMouseDown={setPressedOnVolumeCtrl(true)}
               onMouseUp={setPressedOnVolumeCtrl(false)}
               onChange={valueChangeHandler.bind(this, isCtrlPressed)}
               value={value}/>
    );
}