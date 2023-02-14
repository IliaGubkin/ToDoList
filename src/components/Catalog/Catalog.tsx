import { useState } from "react"
import animals from "../Slider/animals.json"; //todo импорт из git компоненты
import { CatalogColumns } from "./CatalogColumns"

interface IUser{
    id?: number
}

interface IUsers{
    users: IUsers[]
}

export function Catalog() {
    const [sortedAnimals, setSortedAnimals] = useState([...animals["dogs"]["type"], ...animals["cats"]["type"]]); //todo метод flat

    
    return(
        <>
            <CatalogColumns sortedAnimals={sortedAnimals} setSortedAnimals={setSortedAnimals}/>
        </>
    )
}