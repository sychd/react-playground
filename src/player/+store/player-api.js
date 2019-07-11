import {CONFIG} from "~shared/config";

export const PlayerApi = {
    switchPlayState: () => {
        return fetch(`${CONFIG.API_URL}/public-api/users?access-token=ZtPlFc_BKfkI-6QxxYOc7nGhOuh38s0n93Ym`, {mode: 'cors'})
            .catch(fetchErrorHandler);
    },
    setVolume: () => {
        return Promise.reject();
        return fetch(`${CONFIG.API_URL}/public-api/users?access-token=ZtPlFc_BKfkI-6QxxYOc7nGhOuh38s0n93Ym`, {mode: 'cors'})
            .catch(fetchErrorHandler);
    },
    getVolume: () => {
        return fetch(`${CONFIG.API_URL}/public-api/users?access-token=ZtPlFc_BKfkI-6QxxYOc7nGhOuh38s0n93Ym`, {mode: 'cors'})
            .then(() => 35)
            .catch(fetchErrorHandler);
    },
    getPausedState: () => {
        return fetch(`${CONFIG.API_URL}/public-api/users?access-token=ZtPlFc_BKfkI-6QxxYOc7nGhOuh38s0n93Ym`, {mode: 'cors'})
            .then(() => true)
            .catch(fetchErrorHandler);
    },
    initializePlayerModule: () => {
        return Promise.all([PlayerApi.getPausedState(), PlayerApi.getVolume()])
            .then(([isPaused, volume]) => ({isPaused, volume}))
            .catch(fetchErrorHandler);
    }
};

function fetchErrorHandler(error) {
    console.error("Fetch error", error);
}