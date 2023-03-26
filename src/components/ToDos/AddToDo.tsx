import { setInputValue, setToDoId } from "../../store/addToDo/actions";
import { useDispatch, useSelector } from "react-redux";
import { setToDoList } from "../../store/toDoItem/actions";

export function AddToDo() {
    const state = useSelector(state => state).add;
    const dispatch = useDispatch()
    const inputValue = state.addToDo.inputValue
    const toDoList = state.toDoItem.toDoList
    const toDoId = state.addToDo.toDoId

    if (toDoId) {
        localStorage.setItem("toDoId", String(toDoId))
    }

    function saveToDo() {
        dispatch(setToDoId(Number(localStorage.toDoId) + 1));
        dispatch(setToDoList([
            ...toDoList,
            {
                id: localStorage.toDoId ? localStorage.toDoId : toDoId,
                title: inputValue,
                completed: false
            }
        ]))
        dispatch(setInputValue(""));
    }

    return (
        <div className="add-todo">
            <input className="input" placeholder="placeholder" value={inputValue} onChange={(e) => dispatch(setInputValue(e.target.value))} />
            <div>
                <button className="add-todo__clear" onClick={() => {
                    localStorage.removeItem("toDoId"); 
                    dispatch(setToDoList([]))
                    localStorage.setItem("toDoId", "0");
                }}>X</button>
            </div>
            <button className="add-button" onClick={saveToDo}>добавить</button>
        </div>
    )
}