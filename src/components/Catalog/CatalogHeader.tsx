import { ICatalogHeader } from "./Types";

export function CatalogHeader({ sortAnimals, headerTitle, arrowIcon, pressedButton }: ICatalogHeader) {
    return (
        <div className="sort-header" onClick={() => {sortAnimals(headerTitle)}}>
            {headerTitle} {headerTitle === pressedButton ?
                arrowIcon : ""}
        </div>
    )
}