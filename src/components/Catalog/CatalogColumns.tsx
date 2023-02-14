import animals from "../Slider/animals.json";
import { v1 as uuidv1 } from "uuid"
import { CatalogColumn } from "./CatalogColumn";

interface IAnimal {
    setSortedAnimals: React.Dispatch<React.SetStateAction<({
        id: number;
        breed: string;
        name: string;
        img: string[];
        jumpHeight: number;
        color: string;
    } | {
        id: number;
        breed: string;
        name: string;
        img: string[];
        jumpHeight: number;
        color: string;
    })[]>>,
    sortedAnimals: object[]
}

export function CatalogColumns({ setSortedAnimals, sortedAnimals }: {
    setSortedAnimals: React.Dispatch<React.SetStateAction<({
        id: number;
        breed: string;
        name: string;
        img: string[];
        jumpHeight: number;
        color: string;
    } | {
        id: number;
        breed: string;
        name: string;
        img: string[];
        jumpHeight: number;
        color: string;
    })[]>>, sortedAnimals: object[]
}) {

    const arr = Object.keys(animals["dogs"]["type"][0]).filter((e) => e !== "img") // всегда с приведением типов сравнение 

    console.log(arr)
    return (
        <div className="catalog">
            {arr.map((e: any) => <CatalogColumn sortedAnimals={sortedAnimals} setSortedAnimals={setSortedAnimals} animalFeature={e} key={uuidv1()} />)}
        </div>
    )
}