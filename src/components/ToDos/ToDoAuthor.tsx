import { FC } from "react";
import { IToDo, TSingleToDo } from "./Types";

// Дженерики
export const ToDoAuthor: FC<{toDoList: TSingleToDo}> = ({toDoList}) => {
  return (
    <div className="todo-author">
      {
        toDoList.map((element: IToDo) => (
          <span className="todo-author__item" key={element.id}>Ilya</span>
        ))
      }
    </div>
  )
}