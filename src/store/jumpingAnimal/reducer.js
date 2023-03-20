const defaultState = {
    animalRotate: 0,
    animalMove: "0px",
    boneMove: "0px",
    caught: undefined
}

export function jumpingAnimalReducer(state = defaultState, action) {
    switch (action.type) {
        case 'SET_ROTATE':
            return { ...state, animalRotate: action.payload }
        case 'SET_MOVE':
            return { ...state, animalMove: action.payload }
        case 'SET_BONE_MOVE':
            return { ...state, boneMove: action.payload }
        case 'SET_CAUGHT':
            return { ...state, caught: action.payload }
        case 'SET_BONE_HEIGHT':
            return { ...state, boneHeigth: action.payload }
        default:
            return state
    }
}