import { Link } from "react-router-dom";

export function NavigationHeader() {
  return (
      <nav className="navigation-header">
        <Link to="/" className="navigation-header__link">ToDoList</Link>
        <Link to="/slider" className="navigation-header__link">Slider</Link>
        <Link to="/slider/dogs/jump" className="navigation-header__link">Dogs Jump</Link>
        <Link to="/slider/cats/jump" className="navigation-header__link">Cats Jump</Link>
      </nav>
  );
}
