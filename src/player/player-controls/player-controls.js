import React from 'react';
import "./player-controls.scss";


export class PlayerControls extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="player-controls">
                <label className="player-controls__label">Controls</label>
                <div>
                    <button type="button" className="player-controls__button-ctrl" onClick={this.props.onPreviousClick}>&lt;</button>
                    <button type="button" className="player-controls__button-ctrl player-controls__button-ctrl--wide" onClick={this.props.onPlayPauseClick}>
                        ❚❚ ►
                    </button>
                    <button type="button" className="player-controls__button-ctrl" onClick={this.props.onNextClick}>&gt;</button>
                </div>
                <label htmlFor="volume" className="player-controls__label">Volume</label>
                <input id="volume" type="range" className="player-controls__range-ctrl" onChange={this.props.onVolumeInput} value={this.props.volume}></input>
                {/* <label htmlFor="play-song">Play song:</label>
                <div>
                    <input id="play-song" type="text"></input>
                    <button type="button">Ok</button>
                </div> */}
            </div>
        );
    }
}
