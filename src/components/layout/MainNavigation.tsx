import { Link, NavLink } from "react-router-dom";

export function NavigationHeader() {
  return (
      <nav className="navigation-header">
        <NavLink to="/" className="navigation-header__link">ToDoList</NavLink>
        <Link to="/slider" className="navigation-header__link">Slider</Link>
      </nav>
  );
}
