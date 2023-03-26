import { Route, useNavigate } from "react-router-dom";
import { MadButton } from "../components/MadButton/MadButton";
// 
export function DesignSystem() {
    const navigate = useNavigate()
    const handleClick = () => {
        window.location.replace('https://google.com/');
    };
    return (
        <>
            <MadButton size="lg" importance={"primary"} icon={"arrowDown"} func={() => console.log("lul")} />
            <MadButton size="md" importance={"secondary"} icon={"arrowUp"} func={() => navigate("/slider")} />
            <MadButton size="sm" importance={"primary"} icon={"arrowDown"} func={() => handleClick()} />
            <MadButton size="sm" importance={"active"} icon={"none"} func={() => alert("я попап окно")} />
        </>
    )
}