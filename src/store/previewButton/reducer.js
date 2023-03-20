const defaultState = {
    previewButtonText: "Отключить превью"
}

export function previewButtonReducer(state = defaultState, action) {
    switch (action.type) {
        case 'SET_PREVIEW_BUTTON':
            return { ...state, previewButtonText: action.payload }
        default:
            return state
    }
}