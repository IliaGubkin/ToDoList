import { setPreviewMode } from "../../store/sliderReducer"
import { setPreviewButtonText } from "../../store/previewButtonReducer"
import { useDispatch, useSelector } from "react-redux"

export function PreviewButton() {
    const state = useSelector((state) => state);
    const previewMode = state.slider.previewMode;
    const previewButtonText = state.previewButton.previewButtonText;
    const dispatch = useDispatch()

    function deactivatePreviewMode() {
        if (previewMode) {
            dispatch(setPreviewMode(false))
            dispatch(setPreviewButtonText("Включить превью"))
        } else {
            dispatch(setPreviewMode(true))
            dispatch(setPreviewButtonText("Отключить превью"))
        }
    }

    return (
        <>
            <button onClick={deactivatePreviewMode}>{previewButtonText}</button>
        </>
    )
}



