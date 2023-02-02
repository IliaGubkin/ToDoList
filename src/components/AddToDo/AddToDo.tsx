import { useState } from "react"
import { v1 as uuidv1 } from "uuid"

function AddToDo({ todo, settodo }: any) {
    const [value, setValue] = useState("");

    function saveToDo() {
        settodo([
            ...todo,
            {
                id: uuidv1(),
                title: value,
            }
        ])
        setValue("");
    }

    return (
        <div>
            <div>
                <button onClick={() => saveToDo()}>+</button>
                <input placeholder="Новый пункт" value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
        </div>
    )
}

export default AddToDo