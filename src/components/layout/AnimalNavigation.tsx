import { SelectCats, SelectDogs } from "../SelectAnimal/SelectAnimal";

export function AnimalNavigation() {
    return (
        <div className="animals">
            <SelectDogs />
            <SelectCats />
        </div>
    )
}