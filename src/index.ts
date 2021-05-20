import { State } from "./state";

const store: SpaceState.Store = {
    state: [],
    numberOfStates: 0,
};

function subscribeToStore<T>(initialState: T): number {
    const stateHash = store.numberOfStates;

    const state: SpaceState.CreatedState<T> = {
        stateHash: (stateHash + 1).toString(),
        currentState: initialState,
        previousState: null,
    };

    store.state.push(state);
    store.numberOfStates++;

    return stateHash;
}

const stateTools = {
    createState: function <T>(initialState: T) {
        const newState = new State<T>(initialState);
        const stateHash = subscribeToStore(initialState);

        function updateStore(previousState: T) {
            store.state[stateHash].previousState = previousState;
            store.state[stateHash].currentState = newState.getState();
        }

        function updateState(update: SpaceState.NewState<T>) {
            const previousState = newState.getState();
            newState.setState(update);

            if (previousState) updateStore(previousState);
        }

        function getStateValue() {
            return newState.getState();
        }

        return { getStateValue, updateState };
    },
};

export const { createState } = stateTools;
