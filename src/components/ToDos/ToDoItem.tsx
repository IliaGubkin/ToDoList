import { useEffect, useState } from "react";
import { AddToDo } from "./AddToDo";
import { ToDoList } from "./ToDoList";
import axios from "axios";

export function ToDo() {
  useEffect(() => {
    if (localStorage.todo.length == 2) {
      console.log("true");
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
          setToDoList(response.data)

        })
    }
  }, [])

  const [toDoList, setToDoList] = useState(localStorage.todo ? JSON.parse(localStorage.todo) : []);

  localStorage.setItem("todo", JSON.stringify(toDoList))

  return (
    <div className="todolist">
      <div>
        <ToDoList toDolist={toDoList} setToDoList={setToDoList} />
        <AddToDo toDoList={toDoList} setToDoList={setToDoList} />
      </div>
      <div>
        <button onClick={() => {
          localStorage.clear();
          setToDoList([])
        }}>Очистить localStorage</button>
      </div>
    </div>
  );
}
