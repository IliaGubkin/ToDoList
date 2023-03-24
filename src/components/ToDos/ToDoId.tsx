import { IToDo, TSingleToDo } from "./Types";

export function ToDoId({toDoList}: {toDoList: TSingleToDo}) {
    return (
      <div className="todo-id">
        {toDoList.map((item: IToDo) => (
            <span key={item.id} className="todolist-id">{item.id}</span>
        ))}
      </div>
    )
  }