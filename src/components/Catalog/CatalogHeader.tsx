import { useSelector } from "react-redux";
import { ICatalogHeader } from "./Types";

export function CatalogHeader({ sortAnimals, headerTitle, arrowIcon }: ICatalogHeader) {
    const state = useSelector(state => state)
    const pressedButton = state.catalog.pressedButton
    return (
        <div onClick={() => {sortAnimals(headerTitle)}}>
           {headerTitle} {headerTitle === pressedButton ?
                arrowIcon : ""}
        </div>
    )
}