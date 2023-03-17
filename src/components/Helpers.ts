import { IAnimals } from "./Slider/Types";
import { setAnimalMove, setBoneMove, setAnimalRotate } from "../store/jumpingAnimal/jumpingAnimalActions";
import { RootStore } from "../store/RootReducer";

type TAnimalArrayImg = string | IAnimals;
export function animalMoving(caught: boolean, jumpHeight: number, boneHeight: number) {
  if (caught) {
    jumpHeight = boneHeight;
    setTimeout(() => {
      RootStore.dispatch(setBoneMove("0px"))
      play("https://github.com/IliaGubkin/ToDoList/blob/320c8db32450ac0374b4f4d717b49a01998ea90f/src/newAudio/bark.mp3?raw=true");
    }, 4000)
  }
  
  RootStore.dispatch(setAnimalRotate(15));

  setTimeout(() => {
    RootStore.dispatch(setAnimalRotate(0));
    RootStore.dispatch(setAnimalMove(jumpHeight + "px"));
  }, 1000)

  setTimeout(() => {
    RootStore.dispatch(setAnimalRotate(-15));
    RootStore.dispatch(setAnimalMove("0px"));
  }, 4000)

  setTimeout(() => {
    RootStore.dispatch(setAnimalRotate(0));
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
