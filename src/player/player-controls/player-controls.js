import React from 'react';
import "./player-controls.scss";


export class PlayerControls extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="player-controls">
                <div>
                    <button type="button">&lt;</button>
                    <button type="button">
                        Play/pause
                        </button>
                    <button type="button">&gt;</button>
                </div>
                <label htmlFor="volume">Volume:</label>
                <input id="volume" type="range"></input>
                {/* <label htmlFor="play-song">Play song:</label>
                <div>
                    <input id="play-song" type="text"></input>
                    <button type="button">Ok</button>
                </div> */}
            </div>
        );
    }
}
