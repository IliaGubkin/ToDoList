import { AnimalImg } from "../components/AnimalImg/AnimalImg";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import animals from "../components/Slider/animals.json";
import { animalMoving } from "../components/Helpers";
import { Bone } from "../components/Bone/Bone";
import { useDispatch, useSelector } from "react-redux";
import { setBoneMove, setCaught} from "../store/jumpingAnimal/actions";


export function JumpingAnimalPage() {
  const dispatch = useDispatch();
  const {animalRotate, animalMove, boneMove, caught} = (useSelector((state) => state)).animals; 
  let { animal, index } = useParams();
  const animalArray = animals[animal];
  const jumpHeight: number = animalArray["type"][Number(index)].jumpHeight * 10
  const boneHeight: number = animalArray["bone"].boneHeight * 10
  
  useEffect(() => dispatch(setCaught(jumpHeight >= boneHeight)), [])
  useEffect(() => dispatch(setBoneMove(boneHeight + "px")), [])
  
  return (
    <>
      <div className="jump" onClick={() => animalMoving(caught, jumpHeight, boneHeight, animal)}>
        <div style={{ bottom: animalMove, transition: "2s", position: "absolute", right: "45%", transform: `rotate(${animalRotate}deg)` }}>
          <AnimalImg className="jump-animal" typeOfAnimal={animalArray["type"][Number(index)].img[0]} />
        </div>
      </div>
      <Bone boneMove={boneMove} animalArray={animalArray} />
    </>
  )
}