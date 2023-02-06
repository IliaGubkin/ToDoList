import { useState } from "react";
import { AddToDo } from "../AddToDo/AddToDo";
import { ToDoList } from "../ToDoList/ToDoList";

export function ToDo() {
  const [toDoList, setToDoList] = useState([]);

  return (
    <>
      <ToDoList toDolist={toDoList} setToDoList={setToDoList} />
      <AddToDo toDoList={toDoList} setToDoList={setToDoList} />
    </>
  );
}
