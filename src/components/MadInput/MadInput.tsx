import { useRef, useState } from "react";
import { IMadInput, MadInputStyled } from "./style";
import {KeyboardEvent} from "react";

export function MadInput({ size, color, borderColor, func }: IMadInput) {
    const [inputValue, setInputValue] = useState("");
    const madRef = useRef(null)
    if (madRef.current) {
        madRef.current.style.color =
            madRef.current.style.borderColor = inputValue.length >= 4 ? borderColor : "black"
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
          if (event.key == "Enter") {
            func()
          }
    };
    return (
        <div onKeyDown={handleKeyDown} tabIndex={0}>
            <MadInputStyled ref={madRef} size={size} color={color} value={inputValue} onChange={(element: any) => setInputValue(element.target.value)} onClick={handleKeyDown} />
            {inputValue.length >= 4 ? <p className="madinput-warning">Желательная длина менее 4 символов</p> : ""}
        </div>
    )
}