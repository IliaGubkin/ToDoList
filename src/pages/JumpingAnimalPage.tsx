import { AnimalImg } from "../components/AnimalImg/AnimalImg";
import { useParams } from "react-router-dom"
import { useState } from "react";
import animals from "../components/Slider/animals.json";

export function JumpingAnimalPage(props: any) {
  let { animal, index } = useParams();
  // @ts-ignore
  const animalArray = animals[animal];
  let jumpHeight: number = animalArray["type"][Number(index)].jumpHeight * 10
  const boneHeight: number = animalArray["bone"].boneHeight * 10
  const caught: boolean = jumpHeight >= boneHeight;

  const [animalMove, setAnimalMove] = useState("0px");
  const [boneMove, setBoneMove] = useState(boneHeight + "px");

  function play(source: string) {
    let audio = new Audio(source);
    audio.play();
  }

  function animalMoving() {
    if (caught) {
      jumpHeight = boneHeight;
      setTimeout(() => {
        setBoneMove("0px")
        play("https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3");
      }, 4000)
    }
    setAnimalMove(jumpHeight + "px");
    setTimeout(() => setAnimalMove("0px"), 4000)
  }

  return (
    <>
      <div className="jump" onClick={animalMoving}>
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