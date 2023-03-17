export const setEdit = (edit) => (dispatch) => {
    dispatch({ type: "SET_EDIT", payload: edit });
};

export const setTitleValue = (titleValue) => (dispatch) => {
    dispatch({ type: "SET_TITLE_VALUE", payload: titleValue });
};