import { Link } from "react-router-dom";

export function NavigationHeader() {
  class Links {
    path: string;
    title: string;
    constructor(path: string, title: string) {
      this.path = path;
      this.title = title;
    }
  }
  const header = [new Links("/", "Home"), new Links("/todolist", "ToDoList"), new Links("/slider", "Slider"), new Links("/catalog", "Catalog")];

  return (
      <nav className="navigation-header">
        {header.map((elem) => <Link to={elem.path} className="navigation-header__link">{elem.title}</Link>)}
      </nav>
  );
}
