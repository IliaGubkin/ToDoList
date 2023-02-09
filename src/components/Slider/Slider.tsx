import { useEffect, useState } from "react"
import { AnimalImg } from "../AnimalImg/AnimalImg";
import { PreviewButton } from "../PreviewButton/PreviewButton";
import { Link, useParams } from "react-router-dom";
// import animals from "./animals.json";
import axios from "axios"


export function Slider(props: any) {
    const [animalIndex, setAnimalIndex] = useState(0);
    const [previewMode, SetPreviewMode] = useState(true);
    const [animals, setAnimals] = useState(undefined);
    const [animalArray, setAnimalArray] = useState([]);
    
    useEffect (() => {
    axios.get('https://raw.githubusercontent.com/IliaGubkin/ToDoList/master/src/components/Slider/animals.json')
    .then(function (response) {
      
      setAnimals(response.data)
    })
    .catch(function (error) {
    })
    .then(function () {
    });
    },[]
    )
   

    let { animal } = useParams();
    let nextAnimalIndex = animalIndex;
    let previousAnimalIndex = animalIndex - 1;

    nextAnimalIndex = (nextAnimalIndex < animalArray.length - 1) ? animalIndex + 1 : 0;
    previousAnimalIndex = (previousAnimalIndex >= 0) ? animalIndex - 1 : animalArray.length - 1;
    
    useEffect(() => {
          //@ts-ignore
    console.log(animals)
          //@ts-ignore
        if(animal && animals[animal]){
            // @ts-ignore
            setAnimalArray(animals[animal]["type"])
        }
      
    }, [animals]);
      
    function previousAnimalImg(animalArray: any) {
        if (animalIndex > 0) {
           setAnimalIndex(animalIndex-1);
        } else {
            setAnimalIndex(animalArray.length - 1);
        }

        setAnimalIndex(animalIndex);
    }

    function nextAnimalImg(animalArray: any) {
        if (animalIndex < animalArray.length - 1) {
            setAnimalIndex(animalIndex + 1);
        } else {
            setAnimalIndex(0);
        }

        setAnimalIndex(animalIndex);
    }

    return (
        <div className="slider" >
            {animals && <>
            <>
                {previewMode &&
                // @ts-ignore
                    <AnimalImg className="slider__preview-img" typeOfAnimal={animalArray[previousAnimalIndex].img} />}
                <button className="slider__next-button" onClick={() => previousAnimalImg(animalArray)}>{"<"}</button>
            </>
            <div className="slider-main">
            {/* @ts-ignore */}
                <h2 className="slider-main__animal-breed">{animalArray[animalIndex]?.breed}</h2>
                  {/* @ts-ignore */}
                <Link to={`/slider/${animal}/${animalIndex}`} className="navigation-header__link"><AnimalImg className="slider-main__img" typeOfAnimal={animalArray[animalIndex].img} /></Link>
                <PreviewButton previewMode={previewMode} SetPreviewMode={SetPreviewMode} />
            </div>
            <>
                <button className="slider__next-button" onClick={() => nextAnimalImg(animalArray)}>{">"}</button>
                {previewMode &&
                // @ts-ignore
                    <AnimalImg className="slider__preview-img" typeOfAnimal={animalArray[nextAnimalIndex].img} />}
            </>
            </>}
        </div>
    )
}