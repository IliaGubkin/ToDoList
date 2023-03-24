import { IToDo, IToDoTitle } from "./Types";
import { useDispatch, useSelector } from "react-redux";
import { setTitleValue, setEdit } from "../../store/toDoList/actions";

export function ToDoTitle({ toDoList, saveToDo }: IToDoTitle) {
  const {titleValue, edit} = useSelector(state => state).toDoList;
  const dispatch = useDispatch()

  function editToDo(id: number, title: string) {
    dispatch(setEdit(id));
    dispatch(setTitleValue(title));
  }

  return (
    <div className="todo-title">
      {
        toDoList.map((item: IToDo) => (
          <span key={item.id} className="todo-title__item" style={{ textDecoration: "none" }}>
            {edit == item.id ? (
                <span>
                  <input className="input" onChange={(elem: React.FormEvent<HTMLInputElement>) => dispatch(setTitleValue(elem.currentTarget.value))} value={titleValue} />
                  <button className="save-button" onClick={() => saveToDo(item.id)}>save</button>
                </span>
            ) : (
              <span>
                <span className="todo-title__item__text"  onClick={() => editToDo(item.id, item.title)}>{item.title}</span>
              </span>
            )}
          </span>
        ))
      }
    </div>
  )
}