import { Link } from "react-router-dom";

export function NavigationHeader() {
  return (
      <nav className="navigation-header">
        <Link to="/" className="navigation-header__link">Home</Link>
        <Link to="/todolist" className="navigation-header__link">ToDoList</Link>
        <Link to="/slider" className="navigation-header__link">Slider</Link>
        <Link to="/catalog" className="navigation-header__link">Catalog</Link>
      </nav>
  );
}
