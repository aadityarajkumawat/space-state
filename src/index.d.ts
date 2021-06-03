type InitialState = string | number | Array<any> | object;

type UpdaterFn<T> = (currentState: T) => T;

type GetState<T> = () => T;
type SetState<T> = (newState: T | UpdaterFn<T>) => void;

interface CreateStoreAPI<T> {
    getState: GetState<T>;
    setState: SetState<T>;
}

declare function createStore<T>(initialState: T): CreateStoreAPI<T>;
