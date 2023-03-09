import { IAnimal, IAnimalFeature } from "./Types"

export function AnimalFeature({ sortedAnimals, animalFeature }: IAnimalFeature) {
    return (
        <>
            {
                (sortedAnimals.map((elem: IAnimal) => {
                    return (
                        <div className="catalog" key={elem.id} style={{ marginTop: "15px" }}>
                            {elem[animalFeature]}
                        </div>
                    )
                }))}
        </>
    )
}