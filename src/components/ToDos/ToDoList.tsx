import { useState } from "react";
import { CloseButton } from "./CloseButton";
import { ToDoAuthor } from "./ToDoAuthor";
import { ToDoComplete } from "./ToDoComplete";
import { ToDoId } from "./ToDoId";
import { ToDoTitle } from "./ToDoTitle";
import { IToDo, IToDoList } from "./Types";


export function ToDoList({ toDoList, setToDoList, toDoListPaginator, setCompleted, completed }: IToDoList) {
  const [edit, setEdit] = useState(null);
  const [titleValue, setTitleValue] = useState("");
  
  function editToDo(id: number, title: string) {
    setEdit(id);
    setTitleValue(title);
  }

  function deleteToDo(id: number) {
    let newTodo: IToDo[] = [...toDoList].filter((item: IToDo) => item.id != id);
    setToDoList(newTodo);
  }

  function saveToDo(id: number) {
    let newTodo = [...toDoList].map((item: IToDo) => {
      if (item.id == id) {
        item.title = titleValue;
      }
      return item;
    });
    setToDoList(newTodo);
    setEdit(null);
  }

  return (
    <div >
      <table>
        <tr>
          <th>
            <ToDoId toDoList={toDoListPaginator} />
          </th>
          <th>
            <ToDoAuthor toDoList={toDoListPaginator} />
          </th>
          <th className="table__complete">
            <ToDoComplete toDoList={toDoListPaginator} setCompleted={setCompleted} completed={completed} />
          </th>
          <th>
            <ToDoTitle toDoList={toDoListPaginator} edit={edit} setTitleValue={setTitleValue} titleValue={titleValue} saveToDo={saveToDo} editToDo={editToDo} />
          </th>
          <th>
            <CloseButton toDoList={toDoListPaginator} deleteToDo={deleteToDo} />
          </th>
        </tr>
      </table>
    </div>
  );
}