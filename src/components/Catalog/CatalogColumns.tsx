import animals from "../Slider/animals.json";
import { v1 as uuidv1 } from "uuid"
import { CatalogColumn } from "./CatalogColumn";
import { Link } from "react-router-dom";
import { catsOrDogs } from "../Helpers";
import { IAnimal, ICatalogColumns } from "./Types";
import { useSelector } from "react-redux";


const iconNavigate = <svg width="39" height="28" viewBox="0 0 39 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 0.5H0.5V27.5H38.5V15C38.5 6.99187 32.0081 0.5 24 0.5Z" fill="#FFE4C4" stroke="#FF00C7" />
    <path d="M16.8891 21.6556C12.9191 21.6556 9.71693 19.1896 7.48662 16.0919C6.48039 14.6944 6.39331 13.718 6.39331 12.0831C6.39331 10.693 6.95341 10.6083 8.09401 9.84789C9.10048 9.17692 10.7878 8.71454 11.9935 8.53592C13.7182 8.28041 16.4805 7.83228 18.2132 8.43873C20.5763 9.26583 21.7064 10.7326 23.0116 12.6905" stroke="#2400FF" stroke-width="3" stroke-linecap="round" />
    <path d="M26.2916 5.6933C26.2916 7.49766 25.9235 9.08874 25.1496 10.7225C24.8595 11.335 24.3236 12.1063 24.3236 12.7998C24.3236 13.3126 24.4672 14.6167 23.5583 14.1118C22.5703 13.5629 20.7299 13.5651 19.6224 13.5651C18.2725 13.5651 17.0946 13.7838 15.7958 13.7838" stroke="#00FF19" stroke-width="3" stroke-linecap="round" />
</svg>

export function CatalogColumns({ arrowIcon, sortAnimals }: ICatalogColumns) {
    const state = useSelector(state => state)
    const sortedAnimals = state.catalog.sortedAnimals
    const arr = Object.keys(animals["dogs"]["type"][0]).filter((e) => e !== "img") // всегда с приведением типов сравнение 
    //todo поправить на flat массив всех животных, из него брать список id и отказаться от dogs или cats и переделать все под id сделать универсальную функцию, желательно slider/1

    return (
        <div className="catalog">
            <div className="catalog-columns">
                {arr.map((e: string) => <CatalogColumn arrowIcon={arrowIcon} sortAnimals={sortAnimals} animalFeature={e} key={uuidv1()} />, { arrowIcon })}
            </div>
            <div className="catalog-link">
                {sortedAnimals.map((e: IAnimal) => <Link to={`/catalog/${catsOrDogs(e.id)}/${catsOrDogs(e.id) === "cats" ? e.id - 4 : e.id}`} key={e.id}>{iconNavigate}</Link>)}
            </div>
            <>
                
            </>
        </div>
    )
}