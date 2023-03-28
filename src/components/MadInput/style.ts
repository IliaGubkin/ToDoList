import { useRef } from "react";
import styled, {css} from "styled-components"

enum MadInputSize {
    lg = "700x",
    md = "250px",
    sm = "200px"
}

enum MadInputFontSize {
    lg = "30px",
    md = "20px",
    sm = "15px"
}

type Size = keyof typeof MadInputSize;


enum MadInputColor {
    none = "transparent",
    green0 = "#BEFF8C",
    ulrtaViolet0 = "#7B10AD",
    shadyBlue0 = "#6cd7ff"
}

enum MadInputBorderColor {
    red = "#FF0000",
    none = "transparent"
}

type Color = keyof typeof MadInputColor
type borderColor = keyof typeof MadInputBorderColor

export interface IMadInput {
    size: Size;
    color: Color;
    borderColor: borderColor;
    func: () => void
}

console.log()

export const MadInputStyled = styled.input`
    background-color: ${({color} : IMadInput) => MadInputColor[color]};
    width: ${({size}: IMadInput) => MadInputSize[size]};
    font-size: ${({size}: IMadInput) => MadInputFontSize[size]};
`