export function setAnimals(animals) {
    return (dispatch) => {
        dispatch({ type: "SET_ANIMALS", payload: animals });
    }
};

export function setAnimalArray(animalArray) {
    return (dispatch) => {
        dispatch({ type: "SET_ANIMAL_ARRAY", payload: animalArray });
    }
};

export function setDetailedMode(detailedMode) {
    return (dispatch) => {
        dispatch({ type: "SET_DETAILED_MODE", payload: detailedMode });
    }
};

export function setAnimalIndexAction(animalIndex) {
    return (dispatch) => {
        dispatch({ type: "SET_ANIMAL_INDEX", payload: animalIndex });
    }
};

export function setAnimalImgIndexAction(animalImgIndex) {
    return (dispatch) => {
        dispatch({ type: "SET_ANIMAL_IMG_INDEX", payload: animalImgIndex });
    }
};

export function setPreviewMode(previewMode) {
    return (dispatch) => {
        dispatch({ type: "SET_PREVIEW_MODE", payload: previewMode });
    }
};