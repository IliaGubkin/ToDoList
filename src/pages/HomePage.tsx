import { Link } from "react-router-dom";

export function HomePage() {
    return (
        <div className="home-todo">
            <div className="home-todo__form">
                ToDoList
                <Link to="/todolist" ><img src="https://github.com/IliaGubkin/ToDoList/blob/013cf293c00353ab30b4a2e1fe8ea1e5eaf8c5d0/ToDoList.png?raw=true"></img></Link>
                Slider
                <Link to="/slider" ><img src="https://github.com/IliaGubkin/ToDoList/blob/013cf293c00353ab30b4a2e1fe8ea1e5eaf8c5d0/Slider.png?raw=true"></img></Link>
            </div>
            <div className="home-todo__form">
                Catalog
                <Link to="/catalog" ><img src="https://github.com/IliaGubkin/ToDoList/blob/013cf293c00353ab30b4a2e1fe8ea1e5eaf8c5d0/Catalog.png?raw=true"></img></Link>
                PigGame
                <Link to="/piggame" ><img src="https://github.com/IliaGubkin/ToDoList/blob/013cf293c00353ab30b4a2e1fe8ea1e5eaf8c5d0/PigGame.png?raw=true"></img></Link>
            </div>
        </div>
    )
}