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
    let animalsValues = Object.values(animals).map(el => el.type).flat(); // называть el, i, item, elem, element
    const [sortedAnimals, setSortedAnimals] = useState(animalsValues); //todo метод flat

    return(
        <>
            <CatalogColumns sortedAnimals={sortedAnimals} setSortedAnimals={setSortedAnimals}/>
        </>
    )
}