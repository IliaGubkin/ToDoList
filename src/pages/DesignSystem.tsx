import { useNavigate } from "react-router-dom";
import { MadButton } from "../components/MadButton/MadButton";
import { MadInput } from "../components/MadInput/MadInput";

export function DesignSystem() {
    const navigate = useNavigate()
    const handleClick = () => {
        window.location.replace('https://google.com/');
    };
    
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <MadButton size="lg" importance={"primary"} icon={"arrowDown"} func={() => console.log("lul")} />
            <MadButton size="md" importance={"secondary"} icon={"arrowUp"} func={() => navigate("/slider")} />
            <MadButton size="sm" importance={"primary"} icon={"arrowDown"} func={() => handleClick()} />
            <MadButton size="sm" importance={"active"} icon={"none"} func={() => alert("я попап окно")} />
            <MadInput size="lg" color="none" borderColor="red" func={() => alert("я попап окно")} />
            <MadInput size="md" color="green0" borderColor="red" func={() => console.log("lul")} />
            <MadInput size="sm" color="shadyBlue0" borderColor="red" func={() => navigate("/slider")} />
        </div>
    )
}
