export function setPreviewButtonText(previewButtonText: string) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_PREVIEW_BUTTON", payload: previewButtonText });
    }
};