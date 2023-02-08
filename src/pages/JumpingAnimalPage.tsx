import { AnimalImg } from "../components/AnimalImg/AnimalImg";
import { useParams } from "react-router-dom"

export function JumpingAnimalPage (props: any) {
  let {animal, index} = useParams();
  let typeOfAnimal = animal == "dogs" ? props.animalArray[0] : props.animalArray[1];

    return(
      <div>
        <div className="jump">
          <AnimalImg className="jump-animal"  typeOfAnimal={typeOfAnimal[Number(index)].img}/>
        </div>
      </div>
    )
}