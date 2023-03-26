export function setAnimals(animals) {
    (dispatch) => {
        dispatch({ type: "SET_ANIMALS", payload: animals });
    }
};

export function setAnimalArray(animalArray) {
    (dispatch) => {
        dispatch({ type: "SET_ANIMAL_ARRAY", payload: animalArray });
    }
};

export function setDetailedMode(detailedMode) {
    (dispatch) => {
        dispatch({ type: "SET_DETAILED_MODE", payload: detailedMode });
    }
};

export function setAnimalIndexAction(animalIndex) {
    (dispatch) => {
        dispatch({ type: "SET_ANIMAL_INDEX", payload: animalIndex });
    }
};

export function setAnimalImgIndexAction(animalImgIndex) {
    (dispatch) => {
        dispatch({ type: "SET_ANIMAL_IMG_INDEX", payload: animalImgIndex });
    }
};

export function setPreviewMode(previewMode) {
    (dispatch) => {
        dispatch({ type: "SET_PREVIEW_MODE", payload: previewMode });
    }
};