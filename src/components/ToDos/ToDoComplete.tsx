import { IToDo, IToDoComplete } from "./Types";

export function ToDoComplete({toDoList, setCompleted, completed}: IToDoComplete) {
  function toDoComplete(item: IToDo) {
    // сделать новое состояние с массивом либо setTimeout
    setCompleted(!completed);
    toDoList.forEach((elem: IToDo) => {
      if (item.id == elem.id) {
        (elem.completed = completed);
      }
    });
  }
//
  return (
    <div className="todo-author">
      <h3 style={{ marginBottom: "24px", marginTop: "24px" }}>Complete</h3>
      {
        toDoList.map((item: IToDo) => (
          <button className="todo-author__button" onClick={() => toDoComplete(item)}>{item.completed ? "☑" : "☐"}</button>
        ))
      }
    </div>
  )
}