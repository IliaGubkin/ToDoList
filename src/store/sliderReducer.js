const defaultState = {
    animals: [],
    animalArray: [],
    detailedMode: false,
    animalIndex: 0,
    animalImgIndex: 0,
    previewMode: true
}

export function sliderReducer(state = defaultState, action) {
    switch (action.type) {
        case 'SET_ANIMALS':
            return { ...state, animals: action.payload }
        case 'SET_ANIMAL_ARRAY':
            return { ...state, animalArray: action.payload }
        case 'SET_DETAILED_MODE':
            return { ...state, detailedMode: action.payload }
        case 'SET_ANIMAL_INDEX':
            return { ...state, animalIndex: action.payload }
        case 'SET_ANIMAL_IMG_INDEX':
            return { ...state, animalImgIndex: action.payload }
        case 'SET_PREVIEW_MODE':
            return { ...state, previewMode: action.payload }
        default:
            return state
    }
}

export const setAnimals = (animals) => (dispatch) => {
    dispatch({ type: "SET_ANIMALS", payload: animals });
};

export const setAnimalArray = (animalArray) => (dispatch) => {
    dispatch({ type: "SET_ANIMAL_ARRAY", payload: animalArray });
};

export const setDetailedMode = (detailedMode) => (dispatch) => {
    dispatch({ type: "SET_DETAILED_MODE", payload: detailedMode });
};

export const setAnimalIndexAction = (animalIndex) => (dispatch) => {
    dispatch({ type: "SET_ANIMAL_INDEX", payload: animalIndex });
};

export const setAnimalImgIndexAction = (animalImgIndex) => (dispatch) => {
    dispatch({ type: "SET_ANIMAL_IMG_INDEX", payload: animalImgIndex });
};

export const setPreviewMode = (previewMode) => (dispatch) => {
    dispatch({ type: "SET_PREVIEW_MODE", payload: previewMode });
};