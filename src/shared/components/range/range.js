import React, {useState} from "react";
import "./range.scss";

export function Range(props) {
    const [value, setValue] = useState(props.value || 0);
    const [isVolumeCtrlPressed, setIsVolumeCtrlPressed] = useState(false);

    const setPressedOnVolumeCtrl = isVolumeCtrlPressed => (event) => {
        setIsVolumeCtrlPressed(isVolumeCtrlPressed);
        valueChangeHandler(isVolumeCtrlPressed, event);
    };

    const valueChangeHandler = (isVolumeCtrlPressed, event) => {
        setValue(event.target.value);
        if (!isVolumeCtrlPressed) {
            props.onValueChange(value);
        }
    };

    return (
        <input id={props.id} type="range" step="5" className="range"
               onMouseDown={setPressedOnVolumeCtrl(true)}
               onMouseUp={setPressedOnVolumeCtrl(false)}
               onChange={valueChangeHandler.bind(this, isVolumeCtrlPressed)}
               value={value}/>
    );
}