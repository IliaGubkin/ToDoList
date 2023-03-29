export function setPreviewButtonText(previewButtonText) {
    return (dispatch) => {
        dispatch({ type: "SET_PREVIEW_BUTTON", payload: previewButtonText });
    }
};