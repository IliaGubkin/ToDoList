import { useState } from "react"
import { v1 as uuidv1 } from "uuid"

export function AddToDo({ toDoList, setToDoList }: any) {
    const [value, setInputValue] = useState("");

    function saveToDo() {
        setToDoList([
            ...toDoList,
            {
                id: uuidv1(),
                title: value,
            }
        ])
        setInputValue("");
    }

    return (
        <div>
            <div>
                <button className="add-button" onClick={saveToDo}>+</button>
                <input className="input" placeholder="Новый пункт" value={value} onChange={(e) => setInputValue(e.target.value)} />
            </div>
        </div>
    )
}