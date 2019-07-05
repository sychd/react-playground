import React from 'react';
import "./music-player-page.scss";
import { MusicPlayerControls } from '../music-player-controls/music-player-controls';
import { MusicPlayerSongList } from '../music-player-song-list/music-player-song-list';


export class MusicPlayerPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="music-player-page">
                <h2 className="music-player-page__header">Music Player Page</h2>
                <div className="music-player-page__content">
                    <MusicPlayerControls></MusicPlayerControls>
                    <MusicPlayerSongList></MusicPlayerSongList>
                </div>
            </div>
        );
    }
}
