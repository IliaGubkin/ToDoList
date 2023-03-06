import { FC } from "react";
import { TSingleToDo } from "./Types";

// Дженерики
export const ToDoAuthor: FC<{toDoList: TSingleToDo}> = ({toDoList}) => {
  return (
    <div className="todo-author">
      <h3 style={{marginBottom: "40px"}}>Author</h3>
      {
        toDoList.map(() => (
          <span className="todo-author__item">Ilya</span>
        ))
      }
    </div>
  )
}