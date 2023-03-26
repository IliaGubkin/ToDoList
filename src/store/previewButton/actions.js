export function setPreviewButtonText(previewButtonText) {
    (dispatch) => {
        dispatch({ type: "SET_PREVIEW_BUTTON", payload: previewButtonText });
    }
};