import { useState } from "react"
import dogs from "./dogs.json"

export function Slider() {
    let [dogImg, setDogImg] = useState(0);

    function DogImg(props: any) {
        return (
            <>
                <img className={props.className} src={dogs[props.index]} />
            </>
        )
    }

    function previousDogImg() {
        dogImg--
        setDogImg(dogImg);
    }

    function nextDogImg() {
        dogImg++
        setDogImg(dogImg);
    }

    return (
        <div className="slider" >
            {dogImg > 0 &&
                <>
                    <DogImg className="slider__preview-img" index={dogImg - 1} />
                    <button className="slider__next-button" onClick={previousDogImg}>{"<"}</button>
                </>
            }
            <DogImg className="slider__main-img" index={dogImg} />
            {dogImg < dogs.length - 1 &&
                <>          
                    <button className="slider__next-button" onClick={nextDogImg}>{">"}</button>
                    <DogImg className="slider__preview-img" index={dogImg + 1} />
                </>
            }
        </div>
    )
}