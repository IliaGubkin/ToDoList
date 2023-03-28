import { useContext } from "react"
import { Context } from "../../pages/ExamplePage"

export function TestingGround() {
    const {context, setContext} = useContext(Context);

    const promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("s"), 2000)
        setTimeout(() => reject("loil"), 1000)
    })
console.log(fetch("https://ru.yougile.com/team/ce85dc48a829/%D0%A1%D1%82%D0%B0%D0%B6%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0#chat:57f012420d7c"))
    promise.then(
        result => {
            console.log(result)
        },
        error => {
            console.log(error)
        }

    )

    function init() {
        var name = "Mozilla"; // name - локальная переменная, созданная в init
        function displayName() { // displayName() - внутренняя функция, замыкание
            alert (name); // displayName() использует переменную, объявленную в родительской функции
        }
        displayName();
    }
    init();

    return(
        <>
        <button onClick={() => setContext("test")}>button</button>
            {context}
        </>
    )
}