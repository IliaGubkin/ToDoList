import { useEffect, useState } from "react";
import { AddToDo } from "./AddToDo";
import { ToDoList } from "./ToDoList";
import axios from "axios";
import { IToDo } from "./Types";

export function ToDo() {
  useEffect(() => {
    if (localStorage.todo.length == 2) {
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
          setToDoList(response.data)
        })
    }
  }, [])
  
  const [toDoList, setToDoList] = useState(localStorage.todo ? JSON.parse(localStorage.todo) : []);
  const [pageNumber, setPageNumber] = useState(1);
  const paginatorPage = () => toDoList.filter((element: IToDo, index: number) => index >= pageNumber * 10 - 10 && index < pageNumber * 10);
  const [toDoListPaginator, settoDoListPaginator] = useState(paginatorPage());
  const [completed, setCompleted] = useState(false);

  localStorage.setItem("todo", JSON.stringify(toDoList));

  useEffect(() => {settoDoListPaginator(paginatorPage())}, [pageNumber, toDoList])
 
  function setPaginator(index: number) {
    setPageNumber((index + 1))
  }

  return (
    <div className="todolist">
      <div>
        <AddToDo toDoList={toDoList} setToDoList={setToDoList} />
        <ToDoList toDoList={toDoList} setToDoList={setToDoList} toDoListPaginator={toDoListPaginator} completed={completed} setCompleted={setCompleted}/>
        <div>
          {toDoList.filter((element: IToDo, index: number) => !(index % 10)).map((element: IToDo, index: number) =>
            <button className="todoList__paginator-button" onClick={() => setPaginator(index)}>{index + 1}</button>)
          }
        </div>
      </div>
      <div>
        <button onClick={() => {
          localStorage.clear();
          setToDoList([])
          localStorage.setItem("toDoId", "0");
        }}>Очистить localStorage</button>
      </div>
    </div>
  );
}
