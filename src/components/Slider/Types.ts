import { IAnimal } from "../Catalog/Types"

export interface IPreviewButton {
    previewMode: boolean,
    setPreviewMode: (elem: boolean) => void
}

export type IAnimals = IAnimal[]