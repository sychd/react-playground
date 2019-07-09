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
                    <button type="button" onClick={this.props.onPreviousClick}>&lt;</button>
                    <button type="button" onClick={this.props.onPlayPauseClick}>
                        Play/pause
                        </button>
                    <button type="button" onClick={this.props.onNextClick}>&gt;</button>
                </div>
                <label htmlFor="volume">Volume:</label>
                <input id="volume" type="range" onChange={this.props.onVolumeInput} value={this.props.volume}></input>
                {/* <label htmlFor="play-song">Play song:</label>
                <div>
                    <input id="play-song" type="text"></input>
                    <button type="button">Ok</button>
                </div> */}
            </div>
        );
    }
}
