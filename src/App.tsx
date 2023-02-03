import { useState } from "react";
import { Header } from "./components/Header/Header";
import { AddToDo } from "./components/AddToDo/AddToDo";
import { ToDoList } from "./components/ToDoList/ToDoList";

function App() {
  const [toDoList, setToDoList] = useState([]);

  return (
    <div className="App">
      <Header />
      <ToDoList toDolist={toDoList} setToDoList={setToDoList} />
      <AddToDo toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  )
}

export default App;
