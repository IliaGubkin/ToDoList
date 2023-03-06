import { IToDo, TSingleToDo } from "./Types";

export function ToDoId({toDoList}: {toDoList: TSingleToDo}) {
    return (
      <div className="todo-id">
        <h3 style={{marginBottom: "40px"}}>Id</h3>
        {toDoList.map((item: IToDo) => (
          <span key={item.id} className="todo-title__item">
            <span className="todolist-id">{item.id}</span>
          </span>
        ))}
      </div>
    )
  }