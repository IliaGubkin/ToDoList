import animals from "../Slider/animals.json";
import { v1 as uuidv1 } from "uuid"
import { CatalogColumn } from "./CatalogColumn";
import { Link } from "react-router-dom";
import { catsOrDogs } from "../Helpers";

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
   
    return (
        <div className="catalog">
            <div className="catalog-columns">
                {arr.map((e: any) => <CatalogColumn sortedAnimals={sortedAnimals} setSortedAnimals={setSortedAnimals} animalFeature={e} key={uuidv1()} />)}
            </div>
            <div className="catalog-link">
                {sortedAnimals.map((e: any) => <Link to={`/catalog/${catsOrDogs(e.id)}/${catsOrDogs(e.id) === "cats" ? e.id - 4 : e.id}`}><img src="../img/icon-navigate.png" className="catalog-link__img"></img></Link>)}
            </div>
        </div>
    )
}