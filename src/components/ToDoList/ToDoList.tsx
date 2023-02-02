import { useState } from "react"

function ToDoList({ todo, settodo }: any) {
    let [edit, setEdit] = useState(null);
    let [value, setValue] = useState("");

    function editToDo(id: any, title: any) {
        setEdit(id)
        setValue(title)
    }
    function deleteToDo(id: any) {
        let newTodo = [...todo].filter((item: any) => item.id != id);
        settodo(newTodo)

    }
    function saveToDo(id: any) {
        let newTodo = [...todo].map((item: any) => {
            if (item.id == id) {
                item.title = value
            }
            return item
        })
        settodo(newTodo)
        setEdit(null)
    }

    return (
        <div>{
            todo.map((item: any) => (
                <div key={item.id}>
                    {
                        edit == item.id ?
                            <span>
                                <button onClick={() => saveToDo(item.id)}>save</button>

                            </span>
                            : <span>
                                <button onClick={() => deleteToDo(item.id)}>x</button>
                            </span>

                    }
                    {edit == item.id ?
                        <span>
                            <input onChange={(e: any) => setValue(e.target.value)} value={value} />

                        </span> :
                        <span>

                            <span onClick={() => editToDo(item.id, item.title)}>{item.title}</span>
                        </span>
                    }
                </div>
            ))
        }
        </div>
    )
}

export default ToDoList