import { AnimalImg } from "../AnimalImg/AnimalImg";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import animals from "../Slider/animals.json";
import { animalMoving } from "../Helpers";
import { Bone } from "./Bone";
import { useDispatch, useSelector } from "react-redux";
import { setBoneMove, setCaught} from "../../store/jumpingAnimal/actions";


export function JumpingAnimal() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const animalRotate = state.animals.animalRotate
  const animalMove = state.animals.animalMove
  const boneMove = state.animals.boneMove
  let { animal, index } = useParams();
  // @ts-ignore
  const animalArray = animals[animal];
  const jumpHeight: number = animalArray["type"][Number(index)].jumpHeight * 10
  const boneHeight: number = animalArray["bone"].boneHeight * 10
  const caught: boolean = state.animals.caught
  useEffect(() => {setCaught(jumpHeight >= boneHeight)}, [])

  useEffect(() => dispatch(setBoneMove(boneHeight + "px")), [])

  return (
    <>
      <div className="jump" onClick={() => animalMoving(caught, jumpHeight, boneHeight)}>
        <div style={{ bottom: animalMove, transition: "2s", position: "absolute", right: "45%", transform: `rotate(${animalRotate}deg)` }}>
          <AnimalImg className="jump-animal" typeOfAnimal={animalArray["type"][Number(index)].img[0]} />
        </div>
      </div>
      <Bone boneMove={boneMove} animalArray={animalArray} />
    </>
  )
}