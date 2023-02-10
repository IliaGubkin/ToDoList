import { Routes, Route } from "react-router-dom";
import { AnimalNavigationPage } from "./pages/AnimalNavigationPage";
import { ToDoListPage } from "./pages/ToDoListPage";
import { NavigationHeader } from "./components/layout/MainNavigation";
import { JumpingAnimalPage } from "./pages/JumpingAnimalPage";
import { Slider } from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <NavigationHeader />
      <Routes>
        <Route path="/" element={<ToDoListPage />} />
        <Route path="/slider" element={<AnimalNavigationPage />} />
        <Route path="/slider/:animal" element={<Slider />}/>
        <Route path="/slider/:animal/:index" element={<JumpingAnimalPage />}/>
      </Routes>
    </div>
  );
}

export default App;
