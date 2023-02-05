export function SelectScreen({setScreen}: any) { // аргументы и пропсы
    return (
        <div className="choose-form">
            <button className="choose-form__button" onClick={() => setScreen("slider")}>Slider</button>
            <button className="choose-form__button" onClick={() => setScreen("toDoList")}>ToDoList</button>
        </div>
    )
}