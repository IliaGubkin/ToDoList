export function setInputValue(inputValue) {
    (dispatch) => {
        dispatch({ type: "SET_INPUT_VALUE", payload: inputValue });
    }
};

export function setToDoId(toDoId) {
    (dispatch) => {
        dispatch({ type: "SET_TODO_ID", payload: toDoId });
    }
};