import { AnimalImg } from "../components/AnimalImg/AnimalImg";

export function JumpingDogPage (props: any) {
    return(
        <>
        dog
      <AnimalImg className="slider-main__img" typeOfAnimal={props.typeOfAnimal} index={props.animalIndex} />
        </>
    )
}