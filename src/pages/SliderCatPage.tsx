import { Slider } from "../components/Slider/Slider";
import cats from "../components/Slider/cats.json"

export function SliderCatPage() {
    return (
        <>
            <Slider type={cats}/>
        </>
    )
}