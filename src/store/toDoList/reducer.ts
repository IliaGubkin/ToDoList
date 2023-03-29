import { IAction } from "../Types"

interface IToDoList {
    edit: null,
    titleValue: string
}

const defaultState: IToDoList = {
    edit: null,
    titleValue: ""
}

export function toDoListReducer(state = defaultState, action: IAction) {
    switch (action.type) {
        case 'SET_EDIT':
            return { ...state, edit: action.payload }
        case 'SET_TITLE_VALUE':
            return { ...state, titleValue: action.payload }
        default:
            return state
    }
}