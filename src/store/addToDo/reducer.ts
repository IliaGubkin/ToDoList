import { IAction } from "../Types"

interface IAddToDo {
    inputValue: string,
    toDoId: number
}

const defaultState: IAddToDo = {
    inputValue: "",
    toDoId: 1
}

export function addToDoReducer(state = defaultState, action: IAction ) {
    switch (action.type) {
        case 'SET_INPUT_VALUE':
            return { ...state, inputValue: action.payload }
        case 'SET_TODO_ID':
            return { ...state, toDoId: action.payload }
        default:
            return state
    }
}