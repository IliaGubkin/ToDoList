import { useState } from "react"
import { AnimalImg } from "../AnimalImg/AnimalImg";
import { PreviewButton } from "../PreviewButton/PreviewButton";
import { Routes, Route, Link } from "react-router-dom";
import { JumpingDogPage } from "../../pages/JumpingDogPage";
import { JumpingCatPage } from "../../pages/JumpingCatPage";

export function Slider(props: any) {
    let [animalIndex, setAnimalIndex] = useState(0);
    let [previewMode, SetPreviewMode] = useState(true);
    let typeOfAnimal: any = props.type;
    let nextAnimalIndex = animalIndex;
    let previousAnimalIndex = animalIndex - 1;
    
    nextAnimalIndex = (nextAnimalIndex < typeOfAnimal.length -1) ? animalIndex + 1 : 0;
    previousAnimalIndex = (previousAnimalIndex >= 0) ? animalIndex - 1 : typeOfAnimal.length -1;
   
    function previousAnimalImg() {
        if(animalIndex > 0) {
            animalIndex--;
        } else {
            animalIndex = typeOfAnimal.length - 1;
        }

        setAnimalIndex(animalIndex);
    }

    function nextAnimalImg() {
        if(animalIndex < typeOfAnimal.length - 1) {
            animalIndex++;
        } else {
            animalIndex = 0;
        }

        setAnimalIndex(animalIndex);
    }

    return (
        <div className="slider" >
            <>
                { previewMode && 
                <AnimalImg className="slider__preview-img" typeOfAnimal={typeOfAnimal} index={previousAnimalIndex} />}
                <button className="slider__next-button" onClick={previousAnimalImg}>{"<"}</button>
            </>
            <div className="slider-main">
                <h2 className="slider-main__animal-breed">{typeOfAnimal[animalIndex].breed}</h2>
                <AnimalImg className="slider-main__img" typeOfAnimal={typeOfAnimal} index={animalIndex} />
                <PreviewButton previewMode={previewMode} SetPreviewMode={SetPreviewMode} />      
                <Link to="/slider/dogs/jump" className="navigation-header__link">Dogs Jump</Link>
                <Link to="/slider/cats/jump" className="navigation-header__link">Cats Jump</Link>
            </div>
            <>          
                <button className="slider__next-button" onClick={nextAnimalImg}>{">"}</button>
                { previewMode && 
                <AnimalImg className="slider__preview-img" typeOfAnimal={typeOfAnimal} index={nextAnimalIndex} />}
            </>
        </div>
    )
}



