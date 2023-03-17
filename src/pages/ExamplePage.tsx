import React, { useState } from "react"
import { TestingGround } from "../components/TestingGround/TestingGround";

export interface IContext {
    context: string,
    setContext: (elem: string) => void
}

export const Context = React.createContext<IContext | null>(null)

export function ExamplePage() {
    const [context, setContext] = useState("asd");
    return (
        <>
            <Context.Provider value={{ context, setContext }}>
                <h1>{context}</h1>
                <TestingGround />
            </Context.Provider>
             {/* <TestingGround context={context} setContext={setContext} /> */}
        </>
    )
}