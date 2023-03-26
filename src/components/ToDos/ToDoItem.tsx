import { useEffect } from "react";
import { AddToDo } from "./AddToDo";
import { ToDoList } from "./ToDoList";
import axios from "axios";
import { IToDo } from "./Types";
import { CompleteFilter } from "../CompleteFilter/CompleteFilter";
import { setToDoList, setPageNumber, setToDoListPaginator, setCompletedTask } from "../../store/toDoItem/actions";
import { useDispatch, useSelector } from "react-redux";

export function ToDo() {
  const dispatch = useDispatch();
  const {toDoList, pageNumber, toDoListPaginator, completedTask} = useSelector((state) => state).toDoItem;

  useEffect(() => {
    if (localStorage.todo.length == 2) {
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
          dispatch(setToDoList(response.data))
        })
    }
  }, [])

  function paginatorPage() {
    completedTask.filter((element: IToDo, index: number) => index >= pageNumber * 10 - 10 && index < pageNumber * 10)
  };

  localStorage.setItem("todo", JSON.stringify(toDoList));

  useEffect(() => { dispatch(setToDoListPaginator(paginatorPage()))}, [pageNumber, toDoList, completedTask])

  useEffect(() => {  dispatch(setToDoListPaginator(paginatorPage())) }, [])

  useEffect(() => { dispatch(setCompletedTask(toDoList)) }, [toDoList])

  function setPaginator(index: number) {
    dispatch(setPageNumber(index + 1));
  }

  function editCompleted() {
    const test = toDoList.filter((element: IToDo) => element.completed)
    dispatch(setCompletedTask(test))
  }

  function editInCompleted() {
    dispatch(setCompletedTask(toDoList.filter((element: IToDo) => !element.completed)))
  }

  //Функция которая будет обновлять todolist на toDoList с противоположным completed

  return (
    <div className="todolist">
      <div className="todolist__filter-and-add">
        <CompleteFilter editCompleted={editCompleted} editInCompleted={editInCompleted} />
        <AddToDo />
      </div>
      <ToDoList toDoListPaginator={toDoListPaginator} />
      <div>
        {completedTask.filter((element: IToDo, index: number) => !(index % 10)).map((element: IToDo, index: number) =>
          <button className="todoList__paginator-button" onClick={() => setPaginator(index)} key={element.id}>{index + 1}</button>)
        }
      </div>
    </div>
  );
}