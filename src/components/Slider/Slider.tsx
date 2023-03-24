import { useEffect, useState } from "react"
import { AnimalImg } from "../AnimalImg/AnimalImg";
import { PreviewButton } from "./PreviewButton";
import { Link, useParams } from "react-router-dom";
import { nextAnimalImg, previousAnimalImg } from "../Helpers";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAnimals, setAnimalArray, setDetailedMode, setAnimalIndexAction, setAnimalImgIndexAction } from "../../store/slider/actions";
import { CatFacts } from "./CatFacts";
// import animalse from "../Slider/animals.json";

export function Slider() {
    let { animal } = useParams();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { 
        animals, 
        animalArray, 
        detailedMode, 
        animalIndex, 
        animalImgIndex, 
        previewMode 
    } = useSelector((state) => state).slider;
    const setAnimalIndex = (index: number) => (dispatch(setAnimalIndexAction(index)))
    const setAnimalImgIndex = (index: number) => (dispatch(setAnimalImgIndexAction(index)))
   

    let nextAnimalIndex = animalIndex;
    let previousAnimalIndex = animalIndex - 1;

    nextAnimalIndex = (nextAnimalIndex < animalArray.length - 1) ? animalIndex + 1 : 0;
    previousAnimalIndex = (previousAnimalIndex >= 0) ? animalIndex - 1 : animalArray.length - 1;

    let nextAnimalImgIndex = animalImgIndex;
    let previousAnimalImgIndex = animalImgIndex - 1;

    useEffect(() => {
        if (Number(id) <= 4 && Number(id) >= 0) {
            dispatch(setDetailedMode(true))
            setAnimalIndex(Number(id) - 1)
        } else if (Number(id) >= 4 && Number(id) <= 8) {
            animal = "cats";
            dispatch(setDetailedMode(true))
            setAnimalIndex(Number(id) - 1)
        }
    }, [])

    if (animalArray[animalIndex]) {
        nextAnimalImgIndex = (nextAnimalImgIndex < animalArray[animalIndex].img.length - 1) ? animalImgIndex + 1 : 0;
        previousAnimalImgIndex = (previousAnimalImgIndex >= 0) ? animalImgIndex - 1 : animalArray[animalIndex].img.length - 1;
    }

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/IliaGubkin/ToDoList/master/src/components/Slider/animals.json')
            .then(function (response) {
                dispatch(setAnimals(response.data))
            })
    }, [])

    useEffect(() => {
        if (animals[animal]) {
            dispatch(setAnimalArray(animals[animal]["type"]))
        }
    }, [animals]);


    return (
        <>
        {/* <CatFacts /> */}
        <div className="slider" >
            {animalArray[previousAnimalIndex] ? <>
                <>
                    {previewMode &&
                        <AnimalImg className="slider__preview-img" typeOfAnimal={detailedMode ? animalArray[animalIndex].img[previousAnimalImgIndex] : animalArray[previousAnimalIndex].img[0]} />}
                    <button className="slider__next-button" onClick={() => {
                        detailedMode ?
                            previousAnimalImg({ animalIndex: animalImgIndex, setAnimalIndex: setAnimalImgIndex, animalArrayImg: animalArray[animalIndex].img }) :
                            previousAnimalImg({ animalIndex, setAnimalIndex, animalArrayImg: animalArray })
                    }}>{"<"}</button>
                    {/* // todo сделать отдельной компонентой */}
                </>
                <div className="slider-main">
                    <h2 className="slider-main__animal-breed">{animalArray[animalIndex]?.breed}</h2>
                    <Link to={`/slider/${animal}/${animalIndex}`} className="navigation-header__link"><AnimalImg className="slider-main__img" typeOfAnimal={detailedMode ? animalArray[animalIndex].img[animalImgIndex] : animalArray[animalIndex].img[0]} /></Link>
                    <PreviewButton />
                    <button onClick={() => { dispatch(setDetailedMode(!detailedMode)) }}>{detailedMode ? "Вернутся ко всем породам" : "Перейти к животному"}</button>
                </div>
                <>
                    <button className="slider__next-button" onClick={() => {
                        detailedMode ?
                            nextAnimalImg({ animalIndex: animalImgIndex, setAnimalIndex: setAnimalImgIndex, animalArrayImg: animalArray[animalIndex].img }) :
                            nextAnimalImg({ animalIndex, setAnimalIndex, animalArrayImg: animalArray })
                    }
                    }>{">"}</button>
                    {/* // todo сделать отдельной компонентой */}
                    {previewMode &&
                        <AnimalImg className="slider__preview-img" typeOfAnimal={detailedMode ? animalArray[animalIndex].img[nextAnimalImgIndex] : animalArray[nextAnimalIndex].img[0]} />}
                </>
            </> :
                <h1 style={{ fontSize: "30px", textAlign: "center" }}>Загрузка...</h1>}
        </div>
        </>
    )
}