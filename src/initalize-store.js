import { combineReducers, createStore, applyMiddleware } from "redux";
import { playerReducer } from "./player/+store/player-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { playerSaga } from "./player/+store/player-saga";

export function initializeStore() {
    const appReducer = combineReducers({
        player: playerReducer
    });
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        appReducer,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware)
        )
    );

    sagaMiddleware.run(playerSaga);

    return store;
}
