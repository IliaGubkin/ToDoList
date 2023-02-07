import { Slider } from "../components/Slider/Slider";
import dogs from "../components/Slider/dogs.json"

export function SliderDogPage() {
    return (
        <>
            <Slider type={dogs}/>
        </>
    )
}