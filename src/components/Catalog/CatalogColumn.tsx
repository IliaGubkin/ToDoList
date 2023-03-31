import { useEffect, useState } from "react";
import { AnimalFeature } from "./AnimalFeature";
import { CatalogHeader } from "./CatalogHeader";
import { KeyboardEvent } from "react";
import { setSortedAnimals, setCatalogInput, setAnimalFeatures } from "../../store/catalog/actions";
import { ICatalogColumn } from "./Types";
import { useDispatch, useSelector } from "react-redux";

export function CatalogColumn({ sortAnimals, animalFeature, arrowIcon }: ICatalogColumn) {
    return (
        <div className="catalog__item">
            <CatalogHeader sortAnimals={sortAnimals} headerTitle={animalFeature} arrowIcon={arrowIcon} />
            <AnimalFeature animalFeature={animalFeature} />
            {/* {inputMode && } */}
        </div>

    )
}
