import { useState } from "react"
import { IPreviewButton } from "./Types"

export function PreviewButton({previewMode, SetPreviewMode}: IPreviewButton) {
    let [previewButtonText, SetPreviewButtonText] = useState("Отключить превью")

    function deactivatePreviewMode() {
        if (previewMode) {
            SetPreviewMode(false)
            SetPreviewButtonText("Включить превью")
 
        } else {
            SetPreviewMode(true)
            SetPreviewButtonText("Отключить превью")
           
        }
    }

    return (
        <>
            <button onClick={deactivatePreviewMode}>{previewButtonText}</button>
        </>
    )
}



