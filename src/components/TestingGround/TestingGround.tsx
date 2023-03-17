import { useContext } from "react"
import { Context, IContext } from "../../pages/ExamplePage"



export function TestingGround() {
    const {context, setContext} = useContext(Context);

    return(
        <>
        <button onClick={() => setContext("jopa")}>button</button>
            {context}
        </>
    )
}