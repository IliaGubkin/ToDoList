import { MadButton } from "../components/MadButton/MadButton";
navigate("/slider")
export function DesignSystem() {
    return(
        <>
            <MadButton size="lg" importance={"primary"} icon={"arrowDown"} />
            <MadButton size="md" importance={"secondary"} icon={"arrowUp"} />
            <MadButton size="sm" importance={"active"} icon={"none"} />
        </>
    )
}