import React from 'react';
import "./player-page.scss";
import { PlayerControls } from '../player-controls/player-controls';
import { PlayerSongList } from '../player-song-list/player-song-list';

export class PlayerPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.initializePlayerModule();// bug - not set on first render
        const { onPlayPauseClick, onNextClick, onPreviousClick, onVolumeChange} = props;
        Object.assign(this, { onPlayPauseClick, onNextClick, onPreviousClick, onVolumeChange });
    }

    render() {
        return (
            <div className="player-page">
                <h2 className="player-page__header">Player Page</h2>
                <div className="player-page__content">
                    <PlayerControls
                        isPaused={this.props.isPaused}
                        onPlayPauseClick={this.onPlayPauseClick}
                        onNextClick={this.onNextClick}
                        onPreviousClick={this.onPreviousClick}
                        volume={this.props.volume}
                        onVolumeChange={this.onVolumeChange}
                    ></PlayerControls>
                    <PlayerSongList></PlayerSongList>
                </div>
            </div>
        );
    }
}
