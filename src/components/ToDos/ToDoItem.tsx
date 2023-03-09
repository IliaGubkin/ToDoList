import { useEffect, useState } from "react";
import { AddToDo } from "./AddToDo";
import { ToDoList } from "./ToDoList";
import axios from "axios";
import { IToDo } from "./Types";
import { CompleteFilter } from "../CompleteFilter/CompleteFilter";

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
  const [completed, setCompleted] = useState(false);//Убрать

  localStorage.setItem("todo", JSON.stringify(toDoList));

  useEffect(() => {settoDoListPaginator(paginatorPage())}, [pageNumber, toDoList])

  function setPaginator(index: number) {
    setPageNumber((index + 1))
  }
  
  const [completedTask, setCompletedTask] = useState(toDoList);

  function editCompleted() {
    let test = toDoList.filter((element: IToDo) => element.completed)
    setCompletedTask(test)
    console.log(test)
  }

  function editInCompleted() {
    setCompletedTask(toDoList.filter((element: IToDo) => !element.completed))
  }

//Функция которая будет обновлять todolist на toDoList с противоположным completed

  return (
    <div className="todolist">
      <div className="todolist__filter-and-add">
        <CompleteFilter editCompleted={editCompleted} editInCompleted={editInCompleted}/>
        <AddToDo toDoList={toDoList} setToDoList={setToDoList} />
      </div>
      <ToDoList toDoList={completedTask} setToDoList={setToDoList} toDoListPaginator={toDoListPaginator} completed={completed} setCompleted={setCompleted} />
      <div>
        {completedTask.filter((element: IToDo, index: number) => !(index % 10)).map((element: IToDo, index: number) =>
          <button className="todoList__paginator-button" onClick={() => setPaginator(index)}>{index + 1}</button>)
        }
      </div>
    </div>
  );
}
