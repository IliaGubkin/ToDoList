import { IAnimals } from "../Slider/Types"

export interface IAnimal {
   id: number,
   breed: string,
   name: string,
   img: string[],
   jumpHeight: number,
   color: string
}
interface ISortFeatures {
    sortAnimals: (elem: string) => void,
    arrowIcon: JSX.Element,
    pressedButton: string,
}

export interface IAnimalFeature {
    sortedAnimals: IAnimals, // как избежать дублирования? -оставить так (желательно) либо extends от одного, когда много
    animalFeature: string
}

export interface ICatalogColumns extends ISortFeatures {
    setSortedAnimals?: (elem: IAnimals) => void,
    sortedAnimals: IAnimals
}

export interface ICatalogColumn extends ISortFeatures{
    sortedAnimals: IAnimals,
    animalFeature: string
}

export interface ICatalogHeader extends ISortFeatures{
    headerTitle: string
}
