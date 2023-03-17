export const setInputValue = (inputValue) => (dispatch) => {
    dispatch({ type: "SET_INPUT_VALUE", payload: inputValue });
};

export const setToDoId = (toDoId) => (dispatch) => {
    dispatch({ type: "SET_TODO_ID", payload: toDoId });
};