import { useEffect, useState } from "react"
import { AnimalImg } from "../AnimalImg/AnimalImg";
import { PreviewButton } from "../PreviewButton/PreviewButton";
import { Link, useParams } from "react-router-dom";
import { nextAnimalImg, previousAnimalImg } from "../Helpers";
import axios from "axios"


export function Slider() {
    const [animalIndex, setAnimalIndex] = useState(0);
    const [previewMode, SetPreviewMode] = useState(true);
    const [animals, setAnimals] = useState();
    const [animalArray, setAnimalArray] = useState([]);
    let { animal } = useParams();
    let nextAnimalIndex = animalIndex;
    let previousAnimalIndex = animalIndex - 1;

    nextAnimalIndex = (nextAnimalIndex < animalArray.length - 1) ? animalIndex + 1 : 0;
    previousAnimalIndex = (previousAnimalIndex >= 0) ? animalIndex - 1 : animalArray.length - 1;

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/IliaGubkin/ToDoList/master/src/components/Slider/animals.json')
            .then(function (response) {
                setAnimals(response.data)
            })
    }, [])

    useEffect(() => {
        if (animals) {
            // @ts-ignore
            setAnimalArray(animals[animal]["type"])
        }
    }, [animals]);

    return (
        <div className="slider" >
            {animalArray[previousAnimalIndex] ? <>
                <>
                    {previewMode &&
                        // @ts-ignore
                        <AnimalImg className="slider__preview-img" typeOfAnimal={animalArray[previousAnimalIndex].img} />}
                    <button className="slider__next-button" onClick={() => previousAnimalImg(animalIndex, setAnimalIndex, animalArray)}>{"<"}</button>
                </>
                <div className="slider-main">
                    {/* @ts-ignore */}
                    <h2 className="slider-main__animal-breed">{animalArray[animalIndex]?.breed}</h2>
                    {/* @ts-ignore */}
                    <Link to={`/slider/${animal}/${animalIndex}`} className="navigation-header__link"><AnimalImg className="slider-main__img" typeOfAnimal={animalArray[animalIndex].img} /></Link>
                    <PreviewButton previewMode={previewMode} SetPreviewMode={SetPreviewMode} />
                </div>
                <>
                    <button className="slider__next-button" onClick={() => nextAnimalImg(animalIndex, setAnimalIndex, animalArray)}>{">"}</button>
                    {previewMode &&
                        // @ts-ignore
                        <AnimalImg className="slider__preview-img" typeOfAnimal={animalArray[nextAnimalIndex].img} />}
                </>
            </> :
                <h1 style={{fontSize: "30px", textAlign: "center"}}>Загрузка...</h1>}
        </div>
    )
}