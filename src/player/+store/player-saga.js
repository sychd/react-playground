import { GP_PLAYER_ACTIONS } from "./player-actions";
import { takeLatest, takeEvery, put } from "redux-saga/effects";
import "babel-polyfill";

const actions = GP_PLAYER_ACTIONS;

function* handleVolumeChange() {
    console.log('handleVolumeChange saga');
    yield put({type: actions.VOLUME_CHANGE_SUCCESS});
}

export function* playerSaga() {
    yield takeLatest(actions.VOLUME_CHANGE, handleVolumeChange);
    console.log("Player saga init");
}