export function setAnimalRotate(animalRotate) {
    return (dispatch) => {
        dispatch({ type: "SET_ROTATE", payload: animalRotate });
    }
};

export function setAnimalMove(animalMove) {
    return (dispatch) => {
        dispatch({ type: "SET_MOVE", payload: animalMove });
    }
};

export function setBoneMove(boneMove) {
    return (dispatch) => {
        dispatch({ type: "SET_BONE_MOVE", payload: boneMove });
    }
};

export function setCaught(caught) {
    return (dispatch) => {
        dispatch({ type: "SET_CAUGHT", payload: caught });
    }
};

export function setBoneHeight(boneHeigth) {
    return (dispatch) => {
        dispatch({ type: "SET_BONE_HEIGHT", payload: boneHeigth });
    }
};