export function setEdit(edit) {
    (dispatch) => {
        dispatch({ type: "SET_EDIT", payload: edit });
    }
};

export function setTitleValue(titleValue) {
    (dispatch) => {
        dispatch({ type: "SET_TITLE_VALUE", payload: titleValue });
    }
};