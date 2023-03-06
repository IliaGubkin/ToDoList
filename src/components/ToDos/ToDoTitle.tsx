import { IToDo, IToDoTitle } from "./Types";

export function ToDoTitle({ toDoList, edit, setTitleValue, titleValue, saveToDo, editToDo }: IToDoTitle) {
  return (
    <div className="todo-title">
      <h3 style={{ marginBottom: "40px" }}>Title</h3>
      {
        toDoList.map((item: IToDo) => (
          <span key={item.id} className="todo-title__item" style={{ textDecoration: "none" }}>
            {edit == item.id ? (
              <span>
                <span>
                  <input className="input" onChange={(elem: React.FormEvent<HTMLInputElement>) => setTitleValue(elem.currentTarget.value)} value={titleValue} />
                  <button className="save-button" onClick={() => saveToDo(item.id)}>save</button>
                </span>
              </span>
            ) : (
              <span>
                <span onClick={() => editToDo(item.id, item.title)}>{item.title}</span>
              </span>
            )}
          </span>
        ))
      }
    </div>
  )
}