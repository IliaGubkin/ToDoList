import { IAnimal } from "../Catalog/Types"

export interface IPreviewButton {
    previewMode: boolean,
    SetPreviewMode: (elem: boolean) => void
}

export type IAnimals = IAnimal[]