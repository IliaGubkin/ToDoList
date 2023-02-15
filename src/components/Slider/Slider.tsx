import { useEffect, useState } from "react"
import { AnimalImg } from "../AnimalImg/AnimalImg";
import { PreviewButton } from "./PreviewButton";
import { Link, useParams } from "react-router-dom";
import { nextAnimalImg, previousAnimalImg } from "../Helpers";
import axios from "axios";
// import animalse from "../Slider/animals.json";

export function Slider() {
    let { animal } = useParams();
    const { id } = useParams();
    const [animalIndex, setAnimalIndex] = useState(0);
    const [animalImgIndex, setAnimalImgIndex] = useState(0);
    const [previewMode, SetPreviewMode] = useState(true);
    const [detailedMode, SetDetailedMode] = useState(false);
    const [animals, setAnimals] = useState();
    // @ts-ignore
    const [animalArray, setAnimalArray] = useState([]);
    let nextAnimalIndex = animalIndex;
    let previousAnimalIndex = animalIndex - 1;

    nextAnimalIndex = (nextAnimalIndex < animalArray.length - 1) ? animalIndex + 1 : 0;
    previousAnimalIndex = (previousAnimalIndex >= 0) ? animalIndex - 1 : animalArray.length - 1;

    let nextAnimalImgIndex = animalImgIndex;
    let previousAnimalImgIndex = animalImgIndex - 1;
    
    useEffect(() => {
    if(Number(id) <= 4 && Number(id) >= 0) {
        SetDetailedMode(true)
        setAnimalIndex(Number(id) - 1)
    } else if (Number(id) >= 4 && Number(id) <= 8) {
        animal = "cats";
        SetDetailedMode(true)
        setAnimalIndex(Number(id) - 1)
    }}, [])

    if(animalArray[animalIndex]) {
        // @ts-ignore
    nextAnimalImgIndex = (nextAnimalImgIndex < animalArray[animalIndex].img.length - 1) ? animalImgIndex + 1 : 0;
    // @ts-ignore
    previousAnimalImgIndex = (previousAnimalImgIndex >= 0) ? animalImgIndex - 1 : animalArray[animalIndex].img.length - 1;
    }
    // @ts-ignore
   
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
                        <AnimalImg className="slider__preview-img" typeOfAnimal={detailedMode ? animalArray[animalIndex].img[previousAnimalImgIndex] : animalArray[previousAnimalIndex].img[0]} />}
                    <button className="slider__next-button" onClick={() => {
                        detailedMode ?
                            // @ts-ignore
                            previousAnimalImg(animalImgIndex, setAnimalImgIndex, animalArray[animalIndex].img) :
                            previousAnimalImg(animalIndex, setAnimalIndex, animalArray)
                    }}>{"<"}</button>
                </>
                <div className="slider-main">
                    {/* @ts-ignore */}
                    <h2 className="slider-main__animal-breed">{animalArray[animalIndex]?.breed}</h2>
                    {/* @ts-ignore */}
                    <Link to={`/slider/${animal}/${animalIndex}`} className="navigation-header__link"><AnimalImg className="slider-main__img" typeOfAnimal={detailedMode ? animalArray[animalIndex].img[animalImgIndex] : animalArray[animalIndex].img[0]} /></Link>
                    <PreviewButton previewMode={previewMode} SetPreviewMode={SetPreviewMode} />
                    <button onClick={() => { SetDetailedMode(!detailedMode) }}>{detailedMode ? "Вернутся ко всем породам" : "Перейти к животному"}</button>
                </div>
                <>
                    <button className="slider__next-button" onClick={() => {
                        detailedMode ?
                            // @ts-ignore
                            nextAnimalImg(animalImgIndex, setAnimalImgIndex, animalArray[animalIndex].img) :
                            nextAnimalImg(animalIndex, setAnimalIndex, animalArray)
                    }
                    }>{">"}</button>
                    {previewMode &&
                        // @ts-ignore
                        <AnimalImg className="slider__preview-img" typeOfAnimal={detailedMode ? animalArray[animalIndex].img[nextAnimalImgIndex] : animalArray[nextAnimalIndex].img[0]} />}
                </>
            </> :
                <h1 style={{ fontSize: "30px", textAlign: "center" }}>Загрузка...</h1>}
        </div>
    )
}