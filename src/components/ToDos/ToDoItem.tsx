import { useEffect } from "react";
import { AddToDo } from "./AddToDo";
import { ToDoList } from "./ToDoList";
import axios from "axios";
import { IToDo } from "./Types";
import { CompleteFilter } from "../CompleteFilter/CompleteFilter";
import { setToDoList, setPageNumber, setToDoListPaginator, setCompletedTask } from "../../store/ToDoItemReducer";
import { useDispatch, useSelector } from "react-redux";

export function ToDo() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const toDoList = state.toDoItem.toDoList
  const pageNumber = state.toDoItem.pageNumber
  const toDoListPaginator = state.toDoItem.toDoListPaginator
  const completedTask = state.toDoItem.completedTask
  const setToDoListPaginatora = (elem: any) => dispatch(setToDoListPaginator(elem))

  useEffect(() => {
    if (localStorage.todo.length == 2) {
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
          dispatch(setToDoList(response.data))
        })
    }
  }, [])

  const paginatorPage = () => toDoList.filter((element: IToDo, index: number) => index >= pageNumber * 10 - 10 && index < pageNumber * 10);

  localStorage.setItem("todo", JSON.stringify(toDoList));

  useEffect(() => {setToDoListPaginatora(paginatorPage())}, [pageNumber, toDoList])
  useEffect(() => {setToDoListPaginatora(paginatorPage())}, [])
  useEffect(() => {dispatch(setCompletedTask(toDoList))}, [])

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
        <CompleteFilter editCompleted={editCompleted} editInCompleted={editInCompleted}/>
        <AddToDo />
      </div>
      <ToDoList setToDoList={setToDoListPaginatora} toDoListPaginator={toDoListPaginator} />
      <div>
        {completedTask.filter((element: IToDo, index: number) => !(index % 10)).map((element: IToDo, index: number) =>
          <button className="todoList__paginator-button" onClick={() => setPaginator(index)} key={element.id}>{index + 1}</button>)
        }
      </div>
    </div>
  );
}
