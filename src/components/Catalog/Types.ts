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
}

export interface IAnimalFeature {
    animalFeature: string,
    catalogInput: string
}

export interface ICatalogColumns extends ISortFeatures {
    setSortedAnimals?: (elem: IAnimals) => void,
}

export interface ICatalogColumn extends ISortFeatures{
    animalFeature: string
}

export interface ICatalogHeader extends ISortFeatures{
    headerTitle: string
}
