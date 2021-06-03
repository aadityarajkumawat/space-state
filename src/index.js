const { createStore } = require("./store");
const { v4: uid } = require("uuid");

const store = createStore();

function initState(key, initialState) {
    const state = { [key]: initialState };
    store.push(state);
    return state;
}

/**
 * This is used to create state instance it takes an initialState
 * as its only parameter and instantly pushes that state to store.
 *
 * It exposes two API methods which are called getState and setState,
 * which are used to retrive and update state value.
 *
 * The setState function takes a parameter which can either be a state
 * value or it can be a function which has the to be previous state as
 * it parameter and leverage the access of that state value. This can
 * be helpful in cases when we want to push new items to an array state.
 *
 * @param {object} initialState
 * @returns ````getState, setState````
 */
function createState(initialState) {
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

module.exports = { createState };
