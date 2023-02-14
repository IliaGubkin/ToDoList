import { AnimalFeature } from "./AnimalFeature";
import { CatalogHeader } from "./CatalogHeader";

export function CatalogColumn(props: any) {
    return (
        <div className="catalog__item">
            <CatalogHeader sortedAnimals={props.sortedAnimals} setSortedAnimals={props.setSortedAnimals} animalFeature={props.animalFeature} headerTitle={props.animalFeature} />
            <AnimalFeature arr={props.sortedAnimals} animalFeature={props.animalFeature} />
        </div>

    )
}
