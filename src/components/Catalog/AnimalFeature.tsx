import { useSelector } from "react-redux"
import { IAnimal, IAnimalFeature } from "./Types"

export function AnimalFeature({ animalFeature }: IAnimalFeature) {
    const state = useSelector(state => state)
    const sortedAnimals = state.catalog.sortedAnimals


    return (
        <>
            {
                (sortedAnimals.map((elem: IAnimal) => {
                    return (
                            <tr>
                                <td key={elem.id}>
                                    {String(elem[animalFeature]).length < 12 ? elem[animalFeature] : elem[animalFeature].slice(0, 5) + "..."}
                                </td>
                            </tr>
                    )
                }))
            }
        </>
    )
}