import { AnimalImg } from "../AnimalImg/AnimalImg";
import { useParams } from "react-router-dom"
import { useState } from "react";
import animals from "../Slider/animals.json";
import { animalMoving } from "../Helpers";
import { Bone } from "../Bone/Bone";

export function JumpingAnimal() {
    let { animal, index } = useParams();
    // @ts-ignore
    const animalArray = animals[animal];
    const [animalRotate, setAnimalRotate] = useState("0");
    const jumpHeight: number = animalArray["type"][Number(index)].jumpHeight * 10
    const boneHeight: number = animalArray["bone"].boneHeight * 10
    const caught: boolean = jumpHeight >= boneHeight;
  
    const [animalMove, setAnimalMove] = useState("0px");
    const [boneMove, setBoneMove] = useState(boneHeight + "px");
  

    return (
      <>
        <div className="jump" onClick={() => animalMoving(caught, jumpHeight, boneHeight, setBoneMove, setAnimalMove, setAnimalRotate)}>
          <div style={{ bottom: animalMove, transition: "2s", position: "absolute", right: "45%", transform: `rotate(${animalRotate})`}}>
            <AnimalImg className="jump-animal" typeOfAnimal={animalArray["type"][Number(index)].img} />
          </div>
        </div>
        <Bone boneMove={boneMove} animalArray={animalArray} />
      </>
    )
}