export function setAnimalRotate(animalRotate) {
    (dispatch) => {
        dispatch({ type: "SET_ROTATE", payload: animalRotate });
    }
};

export function setAnimalMove(animalMove) {
    (dispatch) => {
        dispatch({ type: "SET_MOVE", payload: animalMove });
    }
};

export function setBoneMove(boneMove) {
    (dispatch) => {
        dispatch({ type: "SET_BONE_MOVE", payload: boneMove });
    }
};

export function setCaught(caught) {
    (dispatch) => {
        dispatch({ type: "SET_CAUGHT", payload: caught });
    }
};

export function setBoneHeight(boneHeigth) {
    (dispatch) => {
        dispatch({ type: "SET_BONE_HEIGHT", payload: boneHeigth });
    }
};