import { useState } from "react";
import { AnimalFeature } from "./AnimalFeature";
import { CatalogHeader } from "./CatalogHeader";
import {KeyboardEvent} from "react";
import { setSortedAnimals, setCatalogInput } from "../../store/catalog/actions";
import { ICatalogColumn } from "./Types";
import { useDispatch, useSelector } from "react-redux";

export function CatalogColumn({ sortAnimals, animalFeature, arrowIcon }: ICatalogColumn) {
    const {sortedAnimals, catalogInput} = useSelector(state => state).catalog
    const [inputMode, setInputMode] = useState(true);
    const dispatch = useDispatch()

    function handleInputKeyDown(event: KeyboardEvent<HTMLDivElement>) {
        if (event.key == "Enter") {
            setInputMode(false);
        }
    }
    
    function addAnimalsRow() {
        dispatch(setSortedAnimals([...sortedAnimals, {id: 10, breed: catalogInput, name: catalogInput, img: Array(3), jumpHeight: 30, color: "Lul"}]))
    }

    return (
        <div className="catalog__item">
            <CatalogHeader sortAnimals={sortAnimals} headerTitle={animalFeature} arrowIcon={arrowIcon} />
            <AnimalFeature animalFeature={animalFeature} catalogInput={catalogInput}/>
            {inputMode ? 
            <>
            <input placeholder="Введите значение" value={catalogInput} onChange={(e) => dispatch(setCatalogInput(e.currentTarget.value))} onKeyDown={handleInputKeyDown}/> 
            <button onClick={addAnimalsRow}>Save</button>
            </>
            : 
            <></>}
        </div>

    )
}
