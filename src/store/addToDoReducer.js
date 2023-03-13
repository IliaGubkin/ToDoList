const defaultState = {
    inputValue: "",
    toDoId: 1
}

export function addToDoReducer(state = defaultState, action) {
    switch (action.type) {
        case 'SET_INPUT_VALUE':
            return { ...state, inputValue: action.payload }
        case 'SET_TODO_ID':
            return { ...state, toDoId: action.payload }
        default:
            return state
    }
}


export const setInputValue = (inputValue) => (dispatch) => {
    dispatch({ type: "SET_INPUT_VALUE", payload: inputValue });
};

export const setToDoId = (toDoId) => (dispatch) => {
    dispatch({ type: "SET_TODO_ID", payload: toDoId });
};