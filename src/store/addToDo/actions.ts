export function setInputValue(inputValue: string) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_INPUT_VALUE", payload: inputValue });
    }
};

export function setToDoId(toDoId: number) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_TODO_ID", payload: toDoId });
    }
};