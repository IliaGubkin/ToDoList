export function setInputValue(inputValue) {
    return (dispatch) => {
        dispatch({ type: "SET_INPUT_VALUE", payload: inputValue });
    }
};

export function setToDoId(toDoId) {
    return (dispatch) => {
        dispatch({ type: "SET_TODO_ID", payload: toDoId });
    }
};