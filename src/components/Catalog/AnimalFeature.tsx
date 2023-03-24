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
                        <table>
                            <tr>
                                <td key={elem.id}>
                                    {elem[animalFeature]}
                                </td>
                            </tr>
                        </table>
                    )
                }))
            }
        </>
    )
}