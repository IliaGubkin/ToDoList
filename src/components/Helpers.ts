export function animalMoving(caught: boolean, jumpHeight: number, boneHeight: number, setBoneMove: any, setAnimalMove: any ) {
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

export function play(source: string) {
    let audio = new Audio(source);
    audio.play();
}