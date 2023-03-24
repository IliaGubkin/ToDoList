import { useNavigate } from "react-router-dom";
import { arrowDown, arrowUp } from "../Catalog/Catalog"

interface IIcons {
    arrowDown: JSX.Element,
    arrowUp: JSX.Element,
    none: string
}

interface IIcons {
    arrowDown: JSX.Element,
    arrowUp: JSX.Element,
    none: string
}

enum Sizeasd {
    lg = "50px 50px 50px 50px",
    md = "30px 30px 30px 30px",
    sm = "10px 10px 10px 10px"
}

type Size = keyof typeof Sizeasd;

const Icons: IIcons = {
    arrowDown: arrowDown,
    arrowUp: arrowUp,
    none: ""
}

type Icon = keyof typeof Icons

interface Importances {
    primary: string,
    secondary: string,
    active: string,
    disabled: string
}

enum Importancesad {
    primary = "#F28E1C",
    secondary = "white",
    active = "purple",
    disabled = "disabled"
}

type Importance = keyof Importances

interface IMadButton {
    size: Size,
    importance: Importance,
    icon: Icon,
    func: () => void
}


export function MadButton({ size, importance, icon, func }: IMadButton) {
    const navigate = useNavigate()
    return (
        <button style={{ padding: Sizeasd[size], backgroundColor: Importancesad[importance] }} onClick={() => }>{Icons[icon]}</button>
    )
}