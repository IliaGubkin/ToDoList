import { setPreviewMode } from "../../store/slider/actions"
import { setPreviewButtonText } from "../../store/previewButton/actions"
import { useDispatch, useSelector } from "react-redux"

export function PreviewButton() {
    const { previewButtonText } = useSelector((state) => state).previewButton;
    const { previewMode } = useSelector((state) => state).slider;
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