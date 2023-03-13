import { useState } from "react";
import { CloseButton } from "./CloseButton";
import { ToDoAuthor } from "./ToDoAuthor";
import { ToDoComplete } from "./ToDoComplete";
import { ToDoId } from "./ToDoId";
import { ToDoTitle } from "./ToDoTitle";
import { IToDo, IToDoList } from "./Types";
import { setTitleValue, setEdit } from "../../store/toDoList";
import { useDispatch, useSelector } from "react-redux";


export function ToDoList({ setToDoList, toDoListPaginator }: IToDoList) {
  const state = useSelector(state => state);
  const dispatch = useDispatch()
  const titleValue = state.toDoList.titleValue
  const completedTask = state.toDoItem.completedTask

  function deleteToDo(id: number) {
    let newTodo: IToDo[] = [...completedTask].filter((item: IToDo) => item.id != id);
    setToDoList(newTodo);
  }

  function saveToDo(id: number) {
    let newTodo = [...completedTask].map((item: IToDo) => {
      if (item.id == id) {
        item.title = titleValue;
      }
      return item;
    });
    setToDoList(newTodo);
    dispatch(setEdit(null));
  }

  return (
    <div >
      <table>
        <tbody>
        <tr>
          <th>
            <ToDoId toDoList={toDoListPaginator} />
          </th>
          <th>
            <ToDoAuthor toDoList={toDoListPaginator} />
          </th>
          <th className="table__complete">
            <ToDoComplete toDoList={toDoListPaginator} />
          </th>
          <th>
            <ToDoTitle toDoList={toDoListPaginator} saveToDo={saveToDo} />
          </th>
          <th>
            <CloseButton toDoList={toDoListPaginator} deleteToDo={deleteToDo} />
          </th>
        </tr>
        </tbody>
      </table>
    </div>
  );
}