import React from 'react';
import './player-controls.scss';
import {Range} from "~shared/components/range/range";


export class PlayerControls extends React.Component {
    constructor(props) {
        super(props);
    }

    getPlayPauseLabel() {
        return this.props.isPaused ? '►' : '||';
    }

    render() {
        return (
            <div className="player-controls">
                <label className="player-controls__label">Controls</label>
                <div>
                    <button type="button" className="player-controls__button-ctrl"
                            onClick={this.props.onPreviousClick}>&lt;</button>
                    <button type="button" className="player-controls__button-ctrl player-controls__button-ctrl--wide"
                            onClick={this.props.onPlayPauseClick}>
                        {this.getPlayPauseLabel()}
                    </button>
                    <button type="button" className="player-controls__button-ctrl"
                            onClick={this.props.onNextClick}>&gt;</button>
                </div>
                <label htmlFor="volume" className="player-controls__label">Volume</label>
                <Range className="player-controls__range-ctrl" id="volume"
                    value={this.props.volume}
                   onValueChange={this.props.onVolumeChange}
                />
            </div>
        );
    }
}
