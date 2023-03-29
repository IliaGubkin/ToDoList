export function setSorted(sorted: string) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_SORTED", payload: sorted });
    }
};

export function setPressedButton(pressedButton: string) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_MOVE", payload: pressedButton });
    }
};

export function setSortedAnimals(sortedAnimals: object) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_SORTED_ANIMALS", payload: sortedAnimals });
    }
};

export function setCatalogInput(catalogInput: string) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_CATALOG_INPUT", payload: catalogInput });
    }
};
