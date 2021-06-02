import { StrictSet } from "./StrictSet.js";
/**
 * The createStore function creates an instance of store that stores the state of
 * complete application, and returns some methods to make changes to app states
 * predictably, keeping in mind to keep all respective states in sync.
 *
 * It has a 'push' method which is used to add a new state to store.
 *
 * The state key in store is can array of objects of the type:
 * { key: string, data: any } -> the data key actually store the data of that state
 *
 * Only one instance of store is created which is considered as the one and only
 * source of authentic data.
 *
 * @returns {object} storeAPI
 */
export function createStore() {
    /**
     * What store would look like
     * in a typical JS application
     *
     * store = {
     *    states: {
     *        "dufg78dfvdj74r734" : "someone's name",
     *        "gya73jhv7fg56sdf5" : 2
     *        "jgvj7634nbaxewhr2" : false
     *        "knsa56asd7v6v76as" : ["open", "closed", "loading"]
     *    }
     * }
     */
    let store = { states: StrictSet() };

    const storeAPI = {
        /**
         * @param {object} state
         */
        push(state) {
            store.states.push(state);
        },
        updateState(state) {
            store.states.updateState(state);
        },
        getState(id) {
            const state = store.states.getStateById(id);
            return state;
        },
    };

    return storeAPI;
}
