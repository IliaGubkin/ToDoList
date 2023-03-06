import { AnimalFeature } from "./AnimalFeature";
import { CatalogHeader } from "./CatalogHeader";
import { ICatalogColumn } from "./Types";

export function CatalogColumn({sortAnimals, animalFeature, arrowIcon, pressedButton, sortedAnimals}: ICatalogColumn) {
    return (
        <div className="catalog__item">
            <CatalogHeader sortAnimals={sortAnimals} headerTitle={animalFeature} arrowIcon={arrowIcon} pressedButton={pressedButton}/>
            <AnimalFeature sortedAnimals={sortedAnimals} animalFeature={animalFeature} />
        </div>

    )
}
