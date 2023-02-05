import { useState } from "react";
import { Header } from "../Header/Header";
import { AddToDo } from "../AddToDo/AddToDo";
import { ToDoList } from "../ToDoList/ToDoList";

export function ToDo() {
    const [toDoList, setToDoList] = useState([]);

    return (
        <>
          <Header />
          <ToDoList toDolist={toDoList} setToDoList={setToDoList} />
          <AddToDo toDoList={toDoList} setToDoList={setToDoList} />
        </>
      )
}