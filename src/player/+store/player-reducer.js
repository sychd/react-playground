import { GP_PLAYER_ACTIONS } from "./player-actions";

const actions = GP_PLAYER_ACTIONS;

const playerState = {
    volume: 10
};

export function playerReducer(state = playerState, action) {
    switch(action.type) {
        case actions.VOLUME_CHANGE:
            state = Object.assign({}, state, { volume: action.payload });
            break;
    }

    return state;
}