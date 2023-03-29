import { IAction } from "../Types"

interface ISlider {
    animals: object,
    animalArray: object,
    detailedMode: boolean,
    animalIndex: number,
    animalImgIndex: number,
    previewMode: boolean
}

const defaultState: ISlider = {
    animals: [],
    animalArray: [],
    detailedMode: false,
    animalIndex: 0,
    animalImgIndex: 0,
    previewMode: true
}

export function sliderReducer(state = defaultState, action: IAction) {
    switch (action.type) {
        case 'SET_ANIMALS':
            return { ...state, animals: action.payload }
        case 'SET_ANIMAL_ARRAY':
            return { ...state, animalArray: action.payload }
        case 'SET_DETAILED_MODE':
            return { ...state, detailedMode: action.payload }
        case 'SET_ANIMAL_INDEX':
            return { ...state, animalIndex: action.payload }
        case 'SET_ANIMAL_IMG_INDEX':
            return { ...state, animalImgIndex: action.payload }
        case 'SET_PREVIEW_MODE':
            return { ...state, previewMode: action.payload }
        default:
            return state
    }
}