import React from 'react';
import "./music-player-song-list.scss";


export class MusicPlayerSongList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let songs = this.props.songs || [];

        return (
            <div className="music-player-song-list">
                {songs.length ? "" : <span>No songs available.</span>}
                {songs.map(song => <div key={song}>{song}</div>)}
            </div>
        );
    }
}
