import "babel-polyfill";
import {GP_PLAYER_ACTIONS} from "./player-actions";
import {call, put, takeLatest, select} from "redux-saga/effects";
import {PlayerApi} from "./player-api";

const actions = GP_PLAYER_ACTIONS;

function* handleVolumeChange(action) {
    try {
        yield put({type: actions.SET_VOLUME, payload: action.payload});
        yield call(PlayerApi.setVolume, action.payload);
    } catch (error) {
        yield put({type: actions.VOLUME_CHANGE_FAILURE});
        let previousVolume = yield select(({player}) => player.previousVolume);
        yield put({type: actions.SET_VOLUME, payload: previousVolume});
    }
}

function* handlePlayStateSwitch(action) {
    try {
        yield call(PlayerApi.switchPlayState);
        yield put({type: actions.SET_PLAY_STATE, payload: action.payload});
    } catch (error) {
        yield put({type: actions.SWITCH_PLAY_STATE_FAILURE});
    }
}

function* initializePlayerModule() {
    try {
        let {volume, isPaused} = yield call(PlayerApi.initializePlayerModule);
        yield put({type: actions.SET_PLAY_STATE, payload: isPaused});
        yield put({type: actions.SET_VOLUME, payload: volume});
    } catch (error) {
        yield put({type: actions.INITIALIZE_FAILURE});
    }
}

export function* playerSaga() {
    yield takeLatest(actions.INITIALIZE_MODULE, initializePlayerModule);
    yield takeLatest(actions.REQUEST_VOLUME_CHANGE, handleVolumeChange);
    yield takeLatest(actions.SWITCH_PLAY_STATE, handlePlayStateSwitch);
}