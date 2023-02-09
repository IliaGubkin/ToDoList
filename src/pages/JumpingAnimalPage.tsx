import { AnimalImg } from "../components/AnimalImg/AnimalImg";
import { useParams } from "react-router-dom"
import { useState } from "react";
import animals from "../components/Slider/animals.json";
import { play } from "../components/Helpers";
import { animalMoving } from "../components/Helpers";

export function JumpingAnimalPage(props: any) {
  let { animal, index } = useParams();
  // @ts-ignore
  const animalArray = animals[animal];
  let jumpHeight: number = animalArray["type"][Number(index)].jumpHeight * 10
  const boneHeight: number = animalArray["bone"].boneHeight * 10
  const caught: boolean = jumpHeight >= boneHeight;

  const [animalMove, setAnimalMove] = useState("0px");
  const [boneMove, setBoneMove] = useState(boneHeight + "px");

  return (
    <>
      <div className="jump" onClick={() => animalMoving(caught, jumpHeight, boneHeight, setBoneMove, setAnimalMove )}>
        <div style={{ bottom: animalMove, transition: "bottom 2s", position: "absolute", right: "45%" }}>
          <AnimalImg className="jump-animal" typeOfAnimal={animalArray["type"][Number(index)].img} />
        </div>
      </div>
      <div style={{ bottom: boneMove, transition: "bottom 2s", position: "absolute", right: "45%" }}>
        <img className="jump-bone" src={animalArray["bone"].boneImg}></img>
      </div>
    </>
  )
}