import { useContext } from "react"
import { Context } from "../../pages/ExamplePage"

export function TestingGround() {
    const {context, setContext} = useContext(Context);

    const promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("s"), 2000)
        setTimeout(() => reject("loil"), 1000)
    })

    promise.then(
        result => {
            console.log(result)
        },
        error => {
            console.log(error)
        }

    )

    return(
        <>
        <button onClick={() => setContext("test")}>button</button>
            {context}
        </>
    )
}