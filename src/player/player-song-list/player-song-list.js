import React from 'react';
import "./player-song-list.scss";


export class PlayerSongList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let songs = this.props.songs || [];

        return (
            <div className="player-song-list">
                {songs.length ? "" : <span>No songs available.</span>}
                {songs.map(song => <div key={song}>{song}</div>)}
            </div>
        );
    }
}
