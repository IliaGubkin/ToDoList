import { useState } from "react";

export function CatalogHeader(props: any) {
    const [sorted, setSorted] = useState(true)

    function sortAnimals(feature: string) { //todo вынести в отдельную компоненту
        if (sorted) { // todo добавить несортированное состояние(сортировка по id)
            props.sortedAnimals.sort((a: any, b: any) => {
                if (typeof a[feature] == "string") {
                    return (a[feature]).localeCompare(b[feature]);
                } else {
                    return a[feature] - b[feature];
                }
            });
            setSorted(false)
        } else {
            props.sortedAnimals.reverse();
            setSorted(true)
        }

        props.setSortedAnimals([...props.sortedAnimals])
    }

    return (
        <div className="sort-header" onClick={() => sortAnimals(props.animalFeature)}>
            {props.headerTitle}
        </div>
    )
}