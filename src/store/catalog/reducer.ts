import { IAction } from "../Types"

interface ICatalog {
    sorted: string,
    pressedButton: string,
    sortedAnimals: object,
    catalogInput: string
}

const defaultState: ICatalog = {
    sorted: "id",
    pressedButton: "",
    sortedAnimals: [],
    catalogInput: ""
}

export function catalogReducer(state = defaultState, action: IAction) {
    switch (action.type) {
        case 'SET_SORTED':
            return { ...state, sorted: action.payload }
        case 'SET_MOVE':
            return { ...state, pressedButton: action.payload }
        case 'SET_SORTED_ANIMALS':
            return { ...state, sortedAnimals: action.payload }
        case 'SET_CATALOG_INPUT':
            return { ...state, catalogInput: action.payload }
        default:
            return state
    }
}