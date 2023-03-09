import { AnimalImg } from "../AnimalImg/AnimalImg";
import { useParams } from "react-router-dom"
import { useState } from "react";
import animals from "../Slider/animals.json";
import { animalMoving } from "../Helpers";
import { Bone } from "./Bone";
import { useDispatch, useSelector } from "react-redux";
import { setAnimalRotateAction } from "../../store/jumpingAnimalReducer";


export function JumpingAnimal() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const animalRotate = state.animals.animalRotate
 
  const setAnimalRotate = () => {
    dispatch(setAnimalRotateAction(15));
   
    setTimeout(() => {
      dispatch(setAnimalRotateAction(0));
    }, 1000)

    setTimeout(() => {
      setAnimalMove("0px");
      dispatch(setAnimalRotateAction(-15));
    }, 4000)
  
    setTimeout(() => {
      dispatch(setAnimalRotateAction(0));
    }, 5000)
  };

  console.log(animalRotate)

  let { animal, index } = useParams();
  // @ts-ignore
  const animalArray = animals[animal];

  const jumpHeight: number = animalArray["type"][Number(index)].jumpHeight * 10
  const boneHeight: number = animalArray["bone"].boneHeight * 10
  const caught: boolean = jumpHeight >= boneHeight;

  const [animalMove, setAnimalMove] = useState("0px");
  const [boneMove, setBoneMove] = useState(boneHeight + "px");

  return (
    <>
      <div className="jump" onClick={() => animalMoving(caught, jumpHeight, boneHeight, setBoneMove, setAnimalMove, setAnimalRotate)}>
        <div style={{ bottom: animalMove, transition: "2s", position: "absolute", right: "45%", transform: `rotate(${animalRotate}deg)` }}>
          <AnimalImg className="jump-animal" typeOfAnimal={animalArray["type"][Number(index)].img[0]} />
        </div>
      </div>
      <Bone boneMove={boneMove} animalArray={animalArray} />
    </>
  )
}