import { SelectCats, SelectDogs } from "../SelectAnimal/SelectAnimal";

export function AnimalNavigation() {
    return (
        <>
            <div className="dogs">
                <SelectDogs />
                <SelectCats />
            </div>
        </>
    )
}