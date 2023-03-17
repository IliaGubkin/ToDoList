import { useDispatch, useSelector } from "react-redux";
import { IToDo, IToDoComplete } from "./Types";

export function ToDoComplete({toDoList}: IToDoComplete) {
  function toDoComplete(item: IToDo) {
    // сделать новое состояние с массивом либо setTimeout
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const completed = state.toDoItem.completed
    dispatch(setCompleted(!completed));
    toDoList.forEach((elem: IToDo) => {
      if (item.id == elem.id) {
        (elem.completed = completed);
      }
    });
  }
//
  return (
    <div className="todo-author">
      {
        toDoList.map((item: IToDo) => (
          <div className="todo-author__button" onClick={() => toDoComplete(item)} key={item.id}>{item.completed ? "☑" : "☐"}</div>
        ))
      }
    </div>
  )
}