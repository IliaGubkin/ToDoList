import { useSelector } from "react-redux";
import { AnimalFeature } from "./AnimalFeature";
import { CatalogHeader } from "./CatalogHeader";
import { ICatalogColumn } from "./Types";

export function CatalogColumn({sortAnimals, animalFeature, arrowIcon}: ICatalogColumn) {
    return (
        <div className="catalog__item">
            <CatalogHeader sortAnimals={sortAnimals} headerTitle={animalFeature} arrowIcon={arrowIcon}/>
            <AnimalFeature animalFeature={animalFeature} />
        </div>

    )
}
