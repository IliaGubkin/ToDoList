import { useState } from "react"
import dogs from "./dogs.json"

export function Slider() {
    let [dogImg, setDogImg] = useState(0);
    let dogBreed = Object.keys(dogs[dogImg])[0]

    function DogImg(props: any) {
        let dogsArray = Object.values(dogs[props.index])
        console.log(dogsArray)
        return (
            <>
                <img className={props.className} src={dogsArray[0]} />
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
                <div>
                    <h2 className="slider__dog-breed">{dogBreed}</h2>
                    <DogImg className="slider__main-img" index={dogImg} />
                </div>
            {dogImg < dogs.length - 1 &&
                <>          
                    <button className="slider__next-button" onClick={nextDogImg}>{">"}</button>
                    <DogImg className="slider__preview-img" index={dogImg + 1} />
                </>
            }
        </div>
    )
}