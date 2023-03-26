export function setSorted(sorted) {
    (dispatch) => {
        dispatch({ type: "SET_SORTED", payload: sorted });
    }
};

export function setPressedButton(pressedButton) {
    (dispatch) => {
        dispatch({ type: "SET_MOVE", payload: pressedButton });
    }
};

export function setSortedAnimals(sortedAnimals) {
    (dispatch) => {
        dispatch({ type: "SET_SORTED_ANIMALS", payload: sortedAnimals });
    }
};
