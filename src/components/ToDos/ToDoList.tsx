import { useState } from "react";

export function ToDoList({ toDolist, setToDoList }: any) {
  let [edit, setEdit] = useState(null);
  let [value, setTitleValue] = useState("");

  function editToDo(id: any, title: string) {
    setEdit(id);
    setTitleValue(title);
  }

  function CloseButton({ id, deleteToDo }: any) {
    return (
      <span>
        <button className="delete-button" onClick={() => deleteToDo(id)}>x</button>
      </span>)
  }

  function deleteToDo(id: any) {
    let newTodo = [...toDolist].filter((item: any) => item.id != id);
    setToDoList(newTodo);
  }

  function saveToDo(id: any) {
    let newTodo = [...toDolist].map((item: any) => {
      if (item.id == id) {
        item.title = value;
      }
      return item;
    });
    setToDoList(newTodo);
    setEdit(null);
  }

  return (
    <div>
      {toDolist.map((item: any) => (
        <div key={item.id}>
          {edit == item.id ? (
            <span>
              <CloseButton id={item.id} deleteToDo={deleteToDo} />
              <span>
                <input className="input" onChange={(e: any) => setTitleValue(e.target.value)} value={value} />
              </span>
            </span>
          ) : (
            <CloseButton id={item.id} deleteToDo={deleteToDo} />
          )}
          {edit == item.id ? (
            <span>
              <button className="save-button" onClick={() => saveToDo(item.id)}>save</button>
            </span>
          ) : (
            <span>
              <span onClick={() => editToDo(item.id, item.title)}>{item.title}</span>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}