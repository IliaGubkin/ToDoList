export function setSorted(sorted) {
    return (dispatch) => {
        dispatch({ type: "SET_SORTED", payload: sorted });
    }
};

export function setPressedButton(pressedButton) {
    return (dispatch) => {
        dispatch({ type: "SET_MOVE", payload: pressedButton });
    }
};

export function setSortedAnimals(sortedAnimals) {
    return (dispatch) => {
        dispatch({ type: "SET_SORTED_ANIMALS", payload: sortedAnimals });
    }
};
