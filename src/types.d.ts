declare namespace SpaceState {
    interface StateData<T> {
        initialState: T | null;
        state: T | null;
        previousState: T | null;
    }

    interface CreatedState<T> {
        stateHash: string;
        currentState: T;
        previousState: T | null;
    }

    interface Store {
        state: Array<CreatedState<any>>;
        numberOfStates: number;
    }

    type UpdateFn<T> = (previousState: T) => T;
    type NewState<T> = T | UpdateFn<T>;
}
