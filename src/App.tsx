import { Routes, Route } from "react-router-dom";
import { SliderPage } from "./pages/SliderPage";
import { ToDoListPage } from "./pages/ToDoListPage";
import { NavigationHeader } from "./components/layout/MainNavigation";
import { JumpingAnimalPage } from "./pages/JumpingAnimalPage";
import { Slider } from "./components/Slider/Slider";
import { CatalogPage } from "./pages/CatalogPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <NavigationHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todolist" element={<ToDoListPage />} />
        <Route path="/slider" element={<SliderPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/slider/:animal" element={<Slider />}/>
        <Route path="/slider/:animal/:index" element={<JumpingAnimalPage />}/>
      </Routes>
    </div>
  );
}

export default App;
