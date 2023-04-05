import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCompleted } from "../../store/toDoItem/actions";
import { IToDo, IToDoComplete } from "./Types";

export function ToDoComplete({ toDoList }: IToDoComplete) {
  const state = useSelector((state) => state);
  const completed = state.toDoItem.completed
  const dispatch = useDispatch();
  const [toDo, setTodo] = useState({})

  function toDoComplete(item: IToDo) {
    dispatch(setCompleted(!item.completed));
    setTodo(item);
  }

  toDoList.forEach((elem: IToDo) => {
    if (toDo.id == elem.id) {
      (elem.completed = completed);
    }
  })

  return (
    <div className="todo-author">
      {
        toDoList.map((item: IToDo) => (
          <div className="todo-author__button" onClick={() => {
            toDoComplete(item);
          }} key={item.id}>{item.completed ? "☑" : "☐"}</div>
        ))
      }
    </div>
  )
}