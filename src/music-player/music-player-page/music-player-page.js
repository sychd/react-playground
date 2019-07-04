import React from 'react';
import "./music-player-page.scss";


export function MusicPlayerPage() {
    return (
        <div className="music-player-page">
            <h2 className="music-player-page__header">Music Player Page</h2>
            <div className="music-player-page__controls">
                <div>
                    <button type="button">&lt;</button>
                    <button type="button">
                        Play/pause
                    </button>
                    <button type="button">&gt;</button>
                </div>
                <label htmlFor="volume">Volume:</label>
                <input id="volume" type="range"></input>
                <label htmlFor="play-song">Play song:</label>
                <div>
                    <input id="play-song" type="text"></input>
                    <button type="button">Ok</button>
                </div>
            </div>
        </div>
    );
}
