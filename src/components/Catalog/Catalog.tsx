import { useEffect, useState } from "react"
import animals from "../Slider/animals.json"; //todo импорт из git компоненты
import { IAnimals } from "../Slider/Types";
import { CatalogColumns } from "./CatalogColumns"
import { IAnimal } from "./Types";
import { setSorted, setPressedButton, setSortedAnimals } from "../../store/catalog/catalogActions";
import { useDispatch, useSelector } from "react-redux";

const arrowDown = <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.67253 15.3778C3.88121 15.5587 4.19699 15.5361 4.37784 15.3275L7.32503 11.9269C7.50589 11.7182 7.48333 11.4024 7.27465 11.2216C7.06597 11.0407 6.7502 11.0633 6.56934 11.2719L3.94962 14.2947L0.926864 11.675C0.718187 11.4941 0.402409 11.5167 0.221555 11.7253C0.0407005 11.934 0.0632561 12.2498 0.271934 12.4307L3.67253 15.3778ZM2.50127 1.03562L3.50127 15.0356L4.49873 14.9644L3.49873 0.964376L2.50127 1.03562Z" fill="black" />
</svg>

const arrowUp = <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.12007 0.514636C1.85201 0.448331 1.58095 0.611889 1.51465 0.879952L0.43414 5.24831C0.367835 5.51637 0.531393 5.78743 0.799457 5.85373C1.06752 5.92004 1.33858 5.75648 1.40489 5.48842L2.36533 1.60544L6.24832 2.56589C6.51638 2.63219 6.78744 2.46863 6.85374 2.20057C6.92005 1.93251 6.75649 1.66145 6.48843 1.59514L2.12007 0.514636ZM9.67945 12.7591L2.42812 0.741691L1.57192 1.25833L8.82324 13.2757L9.67945 12.7591Z" fill="black" />
</svg>

let arrowIcon: JSX.Element;

export function Catalog() {
    const animalsValues: IAnimals = Object.values(animals).map(el => el.type).flat(); // называть el, i, item, elem, element
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const sorted = state.catalog.sorted
    const sortedAnimals = state.catalog.sortedAnimals
    useEffect(()=> dispatch(setSortedAnimals(animalsValues)), [])

    function sortAnimals(feature: string) { //todo вынести в отдельную компоненту
        if (sorted != feature) {
            sortedAnimals.sort((a: IAnimal, b: IAnimal) => {
                arrowIcon = arrowDown;
                if (typeof a[feature] == "string") {
                    return (a[feature]).localeCompare(b[feature]);
                } else {
                    return a[feature] - b[feature];
                }
            });
            dispatch(setSorted(feature))
        } else {
            arrowIcon = arrowUp;
            sortedAnimals.reverse();
            unsetFilter()
        }
        dispatch(setPressedButton(feature))
    }

    function unsetFilter() {
        dispatch(setSorted(""))
    }

    return (
        <>
            <CatalogColumns arrowIcon={arrowIcon} sortAnimals={sortAnimals} />
        </>
    )
}