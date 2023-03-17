export const setSorted = (sorted) => (dispatch) => {
    dispatch({ type: "SET_SORTED", payload: sorted });
};

export const setPressedButton = (pressedButton) => (dispatch) => {
    dispatch({ type: "SET_MOVE", payload: pressedButton });
};

export const setSortedAnimals = (sortedAnimals) => (dispatch) => {
    dispatch({ type: "SET_SORTED_ANIMALS", payload: sortedAnimals });
};
