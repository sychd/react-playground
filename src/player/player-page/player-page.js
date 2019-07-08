import React from 'react';
import "./player-page.scss";
import { PlayerControls } from '../player-controls/player-controls';
import { PlayerSongList } from '../player-song-list/player-song-list';


export class PlayerPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="player-page">
                <h2 className="player-page__header">Player Page</h2>
                <div className="player-page__content">
                    <PlayerControls></PlayerControls>
                    <PlayerSongList></PlayerSongList>
                </div>
            </div>
        );
    }
}
