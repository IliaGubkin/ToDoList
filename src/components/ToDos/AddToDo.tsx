import { useState } from "react"
import { IAddToDo } from "./Types";

export function AddToDo({ toDoList, setToDoList }: IAddToDo) {
    const [inputValue, setInputValue] = useState("");
    const [toDoId, setToDoId] = useState(1);

    if (toDoId) {
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
        <div className="add-todo">
            <input className="input" placeholder="placeholder" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <div>
                <button className="add-todo__clear" onClick={() => {
                    localStorage.clear(); //remove
                    setToDoList([])
                    localStorage.setItem("toDoId", "0");
                }}>X</button>
            </div>
            <button className="add-button" onClick={saveToDo}>добавить</button>
        </div>
    )
}