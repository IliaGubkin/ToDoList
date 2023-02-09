import { useState } from "react"
import { AnimalImg } from "../AnimalImg/AnimalImg";
import { PreviewButton } from "../PreviewButton/PreviewButton";
import { Link, useParams } from "react-router-dom";
import animals from "./animals.json"


export function Slider(props: any) {
    let [animalIndex, setAnimalIndex] = useState(0);
    let [previewMode, SetPreviewMode] = useState(true);
    let { animal } = useParams();
    let nextAnimalIndex = animalIndex;
    let previousAnimalIndex = animalIndex - 1;
    // @ts-ignore
    let animalArray = animals[animal]["type"];
    console.log(animals)
    nextAnimalIndex = (nextAnimalIndex < animalArray.length - 1) ? animalIndex + 1 : 0;
    previousAnimalIndex = (previousAnimalIndex >= 0) ? animalIndex - 1 : animalArray.length - 1;

    function previousAnimalImg() {
        if (animalIndex > 0) {
            animalIndex--;
        } else {
            animalIndex = animalArray.length - 1;
        }

        setAnimalIndex(animalIndex);
    }

    function nextAnimalImg() {
        if (animalIndex < animalArray.length - 1) {
            animalIndex++;
        } else {
            animalIndex = 0;
        }

        setAnimalIndex(animalIndex);
    }

    return (
        <div className="slider" >
            <>
                {previewMode &&
                    <AnimalImg className="slider__preview-img" typeOfAnimal={animalArray[previousAnimalIndex].img} />}
                <button className="slider__next-button" onClick={previousAnimalImg}>{"<"}</button>
            </>
            <div className="slider-main">
                <h2 className="slider-main__animal-breed">{animalArray[animalIndex].breed}</h2>
                <Link to={`/slider/${animal}/${animalIndex}`} className="navigation-header__link"><AnimalImg className="slider-main__img" typeOfAnimal={animalArray[animalIndex].img} /></Link>
                <PreviewButton previewMode={previewMode} SetPreviewMode={SetPreviewMode} />
            </div>
            <>
                <button className="slider__next-button" onClick={nextAnimalImg}>{">"}</button>
                {previewMode &&
                    <AnimalImg className="slider__preview-img" typeOfAnimal={animalArray[nextAnimalIndex].img} />}
            </>
        </div>
    )
}