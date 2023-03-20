export const setAnimalRotate = (animalRotate) => (dispatch) => {
    dispatch({ type: "SET_ROTATE", payload: animalRotate });
};

export const setAnimalMove = (animalMove) => (dispatch) => {
    dispatch({ type: "SET_MOVE", payload: animalMove });
};

export const setBoneMove = (boneMove) => (dispatch) => {
    dispatch({ type: "SET_BONE_MOVE", payload: boneMove });
};

export const setCaught = (caught) => (dispatch) => {
    dispatch({ type: "SET_CAUGHT", payload: caught });
};

export const setBoneHeight = (boneHeigth) => (dispatch) => {
    dispatch({ type: "SET_BONE_HEIGHT", payload: boneHeigth });
};