export function setEdit(edit) {
    return (dispatch) => {
        dispatch({ type: "SET_EDIT", payload: edit });
    }
};

export function setTitleValue(titleValue) {
    return (dispatch) => {
        dispatch({ type: "SET_TITLE_VALUE", payload: titleValue });
    }
};