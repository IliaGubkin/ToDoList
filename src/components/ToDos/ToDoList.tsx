import { useEffect, useState } from "react";
import { CloseButton } from "./CloseButton";
import { ToDoAuthor } from "./ToDoAuthor";
import { ToDoComplete } from "./ToDoComplete";
import { ToDoId } from "./ToDoId";
import { ToDoTitle } from "./ToDoTitle";
import { IToDo, IToDoList } from "./Types";
import { setTitleValue, setEdit } from "../../store/toDoList/actions";
import { useDispatch, useSelector } from "react-redux";
import { setToDoListPaginator } from "../../store/toDoItem/actions";
import { setToDoList } from "../../store/toDoItem/actions";
import { TableRow } from "../TableRow";


export function ToDoList() {
  const state = useSelector(state => state);
  const dispatch = useDispatch()
  const titleValue = state.toDoList.titleValue
  const completedTask = state.toDoItem.completedTask
  const toDoListPaginator = state.toDoItem.toDoListPaginator

  function deleteToDo(id: number) {
    const newTodo: IToDo[] = completedTask.filter((item: IToDo) => item.id != id);
    dispatch(setToDoList(newTodo));
  }

  function saveToDo(id: number) {
    const newTodo = completedTask.map((item: IToDo) => { // todo неправильно spread 
      if (item.id == id) {
        item.title = titleValue;
      }
      return item;
    });

    dispatch(setToDoList(newTodo));
    dispatch(setEdit(null));
  }

  return (
    <table className="table">
        <thead>
          <tr>
            <TableRow data={["Id", "Author", "Complete", "Title"]} />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableRow data={[<ToDoId toDoList={toDoListPaginator} />,<ToDoAuthor toDoList={toDoListPaginator} />,  <ToDoComplete toDoList={toDoListPaginator} />, <ToDoTitle toDoList={toDoListPaginator} saveToDo={saveToDo} />, <CloseButton toDoList={toDoListPaginator} deleteToDo={deleteToDo} />]} />
          </tr>
        </tbody>
    </table>
  );
}