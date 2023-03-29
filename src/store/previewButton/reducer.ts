import { IAction } from "../Types"

const defaultState: {previewButtonText:  string} = {
    previewButtonText: "Отключить превью"
}

export function previewButtonReducer(state = defaultState, action: IAction) {
    switch (action.type) {
        case 'SET_PREVIEW_BUTTON':
            return { ...state, previewButtonText: action.payload }
        default:
            return state
    }
}