import React from 'react';
import "./player-page.scss";
import { PlayerControls } from '../player-controls/player-controls';
import { PlayerSongList } from '../player-song-list/player-song-list';

export class PlayerPage extends React.Component {
    constructor(props) {
        super(props);
        const { onPlayPauseClick, onNextClick, onPreviousClick, onVolumeInput, volume } = props;
        Object.assign(this, { onPlayPauseClick, onNextClick, onPreviousClick, onVolumeInput });
    }

    render() {
        return (
            <div className="player-page">
                <h2 className="player-page__header">Player Page</h2>
                <div className="player-page__content">
                    <PlayerControls
                        onPlayPauseClick={() => 1}
                        onNextClick={() => 1}
                        onPreviousClick={() => 1}
                        volume={this.props.volume}
                        onVolumeInput={this.onVolumeInput}
                    ></PlayerControls>
                    <PlayerSongList></PlayerSongList>
                </div>
            </div>
        );
    }
}
