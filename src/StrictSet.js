function StrictSet(initialSet = {}) {
    let states = initialSet;

    const strictSetAPI = {
        // O(1) time | O(1) space
        // newState is the initialState
        push(newState) {
            const keyOfNewState = Object.keys(newState)[0];
            states[keyOfNewState] = newState[keyOfNewState];
        },
        // O(1) time | O(1) space
        // newState is { "iuef7udf87efw878gw": [ "Aditya", "Jake", "Ellie" ] }
        updateState(newState) {
            const keyOfNewState = Object.keys(newState)[0];
            const isFound = keyOfNewState in states;

            if (isFound) {
                states[keyOfNewState] = newState[keyOfNewState];
            }
        },
        getStateById(id) {
            return states[id];
        },
    };

    return strictSetAPI;
}

module.exports = { StrictSet };
