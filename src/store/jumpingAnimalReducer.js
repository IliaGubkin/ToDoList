const defaultState = {
    animalRotate: 0,
    animalMove: "0px",
    boneMove: "0px"
}

export function jumpingAnimalReducer(state = defaultState, action) {
    switch (action.type) {
        case 'SET_ROTATE':
            return { ...state, animalRotate: action.payload }
        case 'SET_MOVE':
            return { ...state, animalMove: action.payload }
        case 'SET_BONE_MOVE':
            return { ...state, boneMove: action.payload }
        default:
            return state
    }
}


export const setAnimalRotate = (animalRotate) => (dispatch) => {
    dispatch({ type: "SET_ROTATE", payload: animalRotate });
};

export const setAnimalMove = (animalMove) => (dispatch) => {
    dispatch({ type: "SET_MOVE", payload: animalMove });
};

export const setBoneMove = (boneMove) => (dispatch) => {
    dispatch({ type: "SET_BONE_MOVE", payload: boneMove });
};
