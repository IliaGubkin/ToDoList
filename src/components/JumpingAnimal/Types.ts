import { IAnimal } from "../Catalog/Types"

interface IBoneKind {
    boneImg: string,
    boneHeight: number
}

export interface IAnimalItem {
    bone: IBoneKind,
    type: IAnimal[]
}

export interface IBone {
    boneMove: string,
    animalArray: IAnimalItem
}