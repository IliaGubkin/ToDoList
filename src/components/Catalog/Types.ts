export interface IAnimal {
   id: number,
   [animalFeature: string]: string,
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
    sortedAnimals: IAnimal[], // как избежать дублирования? -оставить так (желательно) либо extends от одного, когда много
    animalFeature: string
}

export interface ICatalogColumns extends ISortFeatures {
    setSortedAnimals?: (elem: IAnimal[]) => void,
    sortedAnimals: IAnimal[]
}

export interface ICatalogColumn extends ISortFeatures{
    sortedAnimals: IAnimal[],
    animalFeature: string
}

export interface ICatalogHeader extends ISortFeatures{
    headerTitle: string
}
