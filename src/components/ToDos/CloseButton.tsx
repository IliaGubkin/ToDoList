import { ICloseButton, IToDo } from "./Types"

export function CloseButton({toDoList, deleteToDo}: ICloseButton) {
  return (
    <div className="todo-close">
      {toDoList.map((item: IToDo) => (
        <div key={item.id}>
          <button className="delete-button" onClick={() => deleteToDo(item.id)}>Удалить</button>
        </div>))
      }
    </div>
  )
  }