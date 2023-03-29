export function setAnimalRotate(animalRotate: number) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_ROTATE", payload: animalRotate });
    }
};

export function setAnimalMove(animalMove: string) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_MOVE", payload: animalMove });
    }
};

export function setBoneMove(boneMove: string) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_BONE_MOVE", payload: boneMove });
    }
};

export function setCaught(caught: string) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_CAUGHT", payload: caught });
    }
};

export function setBoneHeight(boneHeigth: boolean) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_BONE_HEIGHT", payload: boneHeigth });
    }
};