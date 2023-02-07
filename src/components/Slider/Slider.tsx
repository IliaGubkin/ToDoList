import { useState } from "react"
import { AnimalImg } from "../AnimalImg/AnimalImg";
import { PreviewButton } from "../PreviewButton/PreviewButton";

export function Slider(props: any) {
    let [animalIndex, setAnimalIndex] = useState(0);
    let [previewMode, SetPreviewMode] = useState(true);
    let typeOfAnimal: any = props.type;

    function previousAnimalImg() {
        animalIndex--;
        setAnimalIndex(animalIndex);
    }

    function nextAnimalImg() {
        animalIndex++;
        setAnimalIndex(animalIndex);
    }

    return (
        <div className="slider" >
            {animalIndex > 0 &&
                <>
                    { previewMode && 
                    <AnimalImg className="slider__preview-img" typeOfAnimal={typeOfAnimal} index={animalIndex - 1} />}
                    <button className="slider__next-button" onClick={previousAnimalImg}>{"<"}</button>
                </>
            }
                <div className="slider-main">
                    <h2 className="slider-main__animal-breed">{typeOfAnimal[animalIndex].breed}</h2>
                    <AnimalImg className="slider-main__img" typeOfAnimal={typeOfAnimal} index={animalIndex} />
                    <PreviewButton previewMode={previewMode} SetPreviewMode={SetPreviewMode} />
                </div>
            {animalIndex < typeOfAnimal.length - 1 &&
                <>          
                    <button className="slider__next-button" onClick={nextAnimalImg}>{">"}</button>
                    { previewMode && 
                    <AnimalImg className="slider__preview-img" typeOfAnimal={typeOfAnimal} index={animalIndex + 1} />}
                </>
            }
           
        </div>
    )
}



