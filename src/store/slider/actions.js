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