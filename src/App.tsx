import { Routes, Route, useParams } from "react-router-dom";
import { AnimalNavigationPage } from "./pages/AnimalNavigationPage";
import { ToDoListPage } from "./pages/ToDoListPage";
import { NavigationHeader } from "./components/layout/MainNavigation";
import { JumpingAnimalPage } from "./pages/JumpingAnimalPage";
import { Slider } from "./components/Slider/Slider";
import animals from "./components/Slider/animals.json"
import cats from "./components/Slider/cats.json"

function App() {
  return (
    <div className="App">
      <NavigationHeader />
      <Routes>
        <Route path="/" element={<ToDoListPage />} />
        <Route path="/slider" element={<AnimalNavigationPage />} />
        <Route path="/slider/:animal" element={<Slider animalArray={[animals, cats]}/>}/>
        <Route path="/slider/:animal/:index" element={<JumpingAnimalPage animalArray={[animals, cats]} />}/>
      </Routes>
    </div>
  );
}

export default App;
