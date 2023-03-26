import { useState } from "react";
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
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Author</th>
            <th>Complete</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ToDoId toDoList={toDoListPaginator} />
            </td>
            <td>
              <ToDoAuthor toDoList={toDoListPaginator} />
            </td>
            <td>
              <ToDoComplete toDoList={toDoListPaginator} />
            </td>
            <td>
              <ToDoTitle toDoList={toDoListPaginator} saveToDo={saveToDo} />
            </td>
            <td>
              <CloseButton toDoList={toDoListPaginator} deleteToDo={deleteToDo} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}