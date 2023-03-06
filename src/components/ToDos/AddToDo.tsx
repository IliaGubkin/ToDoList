import { useState } from "react"
import { IAddToDo } from "./Types";

export function AddToDo({ toDoList, setToDoList }: IAddToDo) {
    const [inputValue, setInputValue] = useState("");
    const [toDoId, setToDoId] = useState(1);

    if(toDoId) {
        localStorage.setItem("toDoId", String(toDoId))
    }

    function saveToDo() {
        setToDoId(Number(localStorage.toDoId) + 1);
        setToDoList([
            ...toDoList,
            {
                id: localStorage.toDoId ? localStorage.toDoId : toDoId,
                title: inputValue,
                completed: false
            }
        ])
        setInputValue("");
    }

    return (
        <div>
            <div>
                <button className="add-button" onClick={saveToDo}>Добавить</button>
                <input className="input" placeholder="Новый пункт" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </div>
        </div>
    )
}