import { GP_PLAYER_ACTIONS } from "./player-actions";

const actions = GP_PLAYER_ACTIONS;

const playerState = {
    volume: 0,
    isPaused: true
};

export function playerReducer(state = playerState, action) {
    switch(action.type) {
        case actions.SET_VOLUME:
            state = Object.assign({}, state, { volume: action.payload });
            break;
        case actions.SET_PLAY_STATE:
            state = Object.assign({}, state, { isPaused: action.payload });
            break;
    }

    return state;
}