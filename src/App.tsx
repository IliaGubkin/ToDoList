import { Routes, Route, useParams } from "react-router-dom";
import { AnimalNavigationPage } from "./pages/AnimalNavigationPage";
import { ToDoListPage } from "./pages/ToDoListPage";
import { NavigationHeader } from "./components/layout/MainNavigation";
import { JumpingAnimalPage } from "./pages/JumpingAnimalPage";
import { Slider } from "./components/Slider/Slider";
import dogs from "./components/Slider/dogs.json"
import cats from "./components/Slider/cats.json"

function App() {
  return (
    <div className="App">
      <NavigationHeader />
      <Routes>
        <Route path="/" element={<ToDoListPage />} />
        <Route path="/slider" element={<AnimalNavigationPage />} />
        <Route path="/slider/:animal" element={<Slider animalArray={[dogs, cats]}/>}/>
        <Route path="/slider/:animal/:index" element={<JumpingAnimalPage animalArray={[dogs, cats]} />}/>
      </Routes>
    </div>
  );
}

export default App;
