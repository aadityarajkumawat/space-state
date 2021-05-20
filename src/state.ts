export class State<T> {
    private stateData: SpaceState.StateData<T> = {
        initialState: null,
        state: null,
        previousState: null,
    };

    constructor(initialState: T) {
        this.stateData.initialState = initialState;
        this.stateData.state = initialState;
    }

    getState() {
        return this.stateData.state;
    }

    setState(newState: SpaceState.NewState<T>) {
        if (typeof newState === "function") {
            this.stateData.previousState = this.stateData.state;

            if (this.stateData.previousState) {
                this.stateData.state = (newState as SpaceState.UpdateFn<T>)(
                    this.stateData.previousState
                );
            } else {
                throw new Error("Previous state is not defined");
            }
        } else {
            this.stateData.previousState = this.stateData.state;
            this.stateData.state = newState;
        }
    }
}
