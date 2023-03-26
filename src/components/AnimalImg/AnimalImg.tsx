import { IAnimalImg } from "./Types";

export function AnimalImg({ className, typeOfAnimal }: IAnimalImg) {
    return (
        <>
            <img className={className} src={typeOfAnimal} />
        </>
    )
}