export function animalMoving(caught: boolean, jumpHeight: number, boneHeight: number, setBoneMove: any, setAnimalMove: any, setAnimalRotate: any) {
  if (caught) {
    jumpHeight = boneHeight;
    setTimeout(() => {
      setBoneMove("0px")
      play("https://github.com/IliaGubkin/ToDoList/blob/320c8db32450ac0374b4f4d717b49a01998ea90f/src/newAudio/bark.mp3?raw=true");
    }, 4000)
  }

  setAnimalRotate("15deg");

  setTimeout(() => {
    setAnimalMove(jumpHeight + "px");
    setAnimalRotate("0");
  }, 1000)

  setTimeout(() => {
    setAnimalMove("0px");
    setAnimalRotate("-15deg");
  }, 4000)

  setTimeout(() => {
    setAnimalRotate("0");
  }, 5000)
}

export function play(source: string) {
  let audio = new Audio(source);
  audio.play();
}

export function previousAnimalImg(animalIndex: number, setAnimalIndex: any, animalArray: any) {
  animalIndex > 0 ? setAnimalIndex(animalIndex - 1) : setAnimalIndex(animalArray.length - 1);
}

export function nextAnimalImg(animalIndex: number, setAnimalIndex: any, animalArray: any) {
  animalIndex < animalArray.length - 1 ? setAnimalIndex(animalIndex + 1) : setAnimalIndex(0);
}

export function catsOrDogs(id: string) {
  if (Number(id) <= 4 && Number(id) >= 0) {
    return "dogs";
  } else if (Number(id) > 4 && Number(id) <= 8) {
    return "cats";
  }
}