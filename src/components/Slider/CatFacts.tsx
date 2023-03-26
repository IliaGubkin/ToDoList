import axios from "axios";
import { useState } from "react";

export function CatFacts() {
    const [fact, setFact] = useState("");
    const [testAsync, setTestAsync] = useState("");

    const facts = fetch('https://catfact.ninja/fact')
        .then((response) => {
            return response.json();
        }).then(
            result => result
        )

    function showFact() {
        facts.then((result: string) => setFact(result.fact))
    }

    async function asyncShowFact() {
        const respornse = await axios.get("https://catfact.ninja/fact")
        setTestAsync(respornse.data.fact)
    }

    return (
        <>
            <button onClick={() => showFact()}>Показать факт</button>
            <button onClick={() => asyncShowFact()}>Показать факт</button>
            <h3>{fact}</h3>
            <h3>{testAsync}</h3>
        </>
    )
}