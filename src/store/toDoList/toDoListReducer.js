const defaultState = {
    edit: null,
    titleValue: ""
}

export function toDoListReducer(state = defaultState, action) {
    switch (action.type) {
        case 'SET_EDIT':
            return { ...state, edit: action.payload }
        case 'SET_TITLE_VALUE':
            return { ...state, titleValue: action.payload }
        default:
            return state
    }
}