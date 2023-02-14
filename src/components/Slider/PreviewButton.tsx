import { useState } from "react"

export function PreviewButton(props: any) {
    let [previewButtonText, SetPreviewButtonText] = useState("Отключить превью")

    function deactivatePreviewMode() {
        if (props.previewMode) {
            props.SetPreviewMode(false)
            SetPreviewButtonText("Включить превью")
 
        } else {
            props.SetPreviewMode(true)
            SetPreviewButtonText("Отключить превью")
           
        }
    }

    return (
        <>
            <button onClick={deactivatePreviewMode}>{previewButtonText}</button>
        </>
    )
}



