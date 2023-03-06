import { IAnimal, IAnimalFeature } from "./Types"

export function AnimalFeature({ sortedAnimals, animalFeature }: IAnimalFeature) {
    return (
        <>
            {
                (sortedAnimals.map((e: IAnimal) => {
                    return (
                        <div className="catalog" key={e.id} style={{ marginTop: "15px" }}>
                            {e[animalFeature]}
                        </div>
                    )
                }))}
        </>
    )
}