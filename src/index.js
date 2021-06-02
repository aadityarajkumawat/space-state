import { createStore } from "./store.js";
import { v4 as uid } from "uuid";

const store = createStore();

function initState(key, initialState) {
    const state = { [key]: initialState };
    store.push(state);
    return state;
}

export function createState(initialState) {
    const key = uid();
    initState(key, initialState);

    const stateAPI = {
        getState() {
            const state = store.getState(key);
            return state;
        },
        setState(newState) {
            if (typeof newState === "function") {
                const aboutToBePrevState = store.getState(key);
                const resolvedNewState = newState(aboutToBePrevState);

                store.updateState({ [key]: resolvedNewState });
            } else {
                store.updateState({ [key]: newState });
            }
        },
    };

    return stateAPI;
}
