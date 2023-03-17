const defaultState = {
    sorted: "id",
    pressedButton: "",
    sortedAnimals: []
}

export function catalogReducer(state = defaultState, action) {
    switch (action.type) {
        case 'SET_SORTED':
            return { ...state, sorted: action.payload }
        case 'SET_MOVE':
            return { ...state, pressedButton: action.payload }
        case 'SET_SORTED_ANIMALS':
            return { ...state, sortedAnimals: action.payload }
        default:
            return state
    }
}