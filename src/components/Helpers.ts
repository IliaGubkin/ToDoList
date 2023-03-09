import { IAnimals } from "./Slider/Types";

type TAnimalArrayImg = string | IAnimals;
export function animalMoving(caught: boolean, jumpHeight: number, boneHeight: number, setBoneMove: (elem: string) => void, setAnimalMove: (elem: string) => void, setAnimalRotate: () => void) {
  if (caught) {
    jumpHeight = boneHeight;
    setTimeout(() => {
      setBoneMove("0px")
      play("https://github.com/IliaGubkin/ToDoList/blob/320c8db32450ac0374b4f4d717b49a01998ea90f/src/newAudio/bark.mp3?raw=true");
    }, 4000)
  }

  setAnimalRotate()

  setTimeout(() => {
    setAnimalMove(jumpHeight + "px");
  }, 1000)

  setTimeout(() => {
    setAnimalMove("0px");
  }, 4000)

  setTimeout(() => {
  }, 5000)
}

export function play(source: string) {
  let audio = new Audio(source);
  audio.play();
}

interface IAnimalImg {
  animalIndex: number,
  setAnimalIndex: (elem: number) => void,
  animalArrayImg: TAnimalArrayImg
}

export function previousAnimalImg({animalIndex, setAnimalIndex, animalArrayImg}: IAnimalImg) {
  animalIndex > 0 ? setAnimalIndex(animalIndex - 1) : setAnimalIndex(animalArrayImg.length - 1);
}

export function nextAnimalImg({animalIndex, setAnimalIndex, animalArrayImg}: IAnimalImg) {
  animalIndex < animalArrayImg.length - 1 ? setAnimalIndex(animalIndex + 1) : setAnimalIndex(0);
}

export function catsOrDogs(id: number) {
  if (Number(id) <= 4 && Number(id) >= 0) {
    return "dogs";
  } else if (Number(id) > 4 && Number(id) <= 8) {
    return "cats";
  }
}
