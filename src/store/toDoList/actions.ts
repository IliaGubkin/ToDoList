export function setEdit(edit: null) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_EDIT", payload: edit });
    }
};

export function setTitleValue(titleValue: string) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_TITLE_VALUE", payload: titleValue });
    }
};