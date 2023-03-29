export function setAnimals(animals: object) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_ANIMALS", payload: animals });
    }
};

export function setAnimalArray(animalArray: object) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_ANIMAL_ARRAY", payload: animalArray });
    }
};

export function setDetailedMode(detailedMode: boolean) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_DETAILED_MODE", payload: detailedMode });
    }
};

export function setAnimalIndexAction(animalIndex: number) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_ANIMAL_INDEX", payload: animalIndex });
    }
};

export function setAnimalImgIndexAction(animalImgIndex: number) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_ANIMAL_IMG_INDEX", payload: animalImgIndex });
    }
};

export function setPreviewMode(previewMode: boolean) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_PREVIEW_MODE", payload: previewMode });
    }
};