import { IAnimals } from "../Slider/Types"

interface IBoneKind {
    boneImg: string,
    boneHeight: number
}

export interface IAnimalItem {
    bone: IBoneKind,
    type: IAnimals
}

export interface IBone {
    boneMove: string,
    animalArray: IAnimalItem
}