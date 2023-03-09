const defaultState = {
    animalRotate: 0,
    animals: [],
    animalArray: []
}

export function jumpingAnimalReducer(state = defaultState, action) {
    switch (action.type) {
        case 'SET_ROTATE':
        
            return {...state, animalRotate: action.payload }
        case 'SET_MOVE':
        
            return {...state, animalRotate: action.payload }
        case 'SET_ANIMALS':
           console.log(action.payload)
            return {...state, animals: action.payload }
        case 'SET_ANIMAL_ARRAY':
        
            return {...state, animalArray: action.payload }
        default:
            return state
    }
}


export const setAnimalRotateAction = (animalRotate) => (dispatch) => {
    dispatch({ type: "SET_ROTATE", payload: animalRotate });
};

export const setAnimals = (animals) => (dispatch) => {
    dispatch({ type: "SET_ANIMALS", payload: animals });
};

export const setAnimalArray = (animalArray) => (dispatch) => {
    dispatch({ type: "SET_ANIMAL_ARRAY", payload: animalArray });
};