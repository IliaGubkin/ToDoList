import { Routes, Route } from "react-router-dom";
import { AnimalNavigationPage } from "./pages/AnimalNavigationPage";
import { ToDoListPage } from "./pages/ToDoListPage";
import { NavigationHeader } from "./components/layout/MainNavigation";
import { SliderDogPage } from "./pages/SliderDogPage";
import { SliderCatPage } from "./pages/SliderCatPage";

function App() {
  return (
    <div className="App">
      <NavigationHeader />
      <Routes>
        <Route path="/" element={<ToDoListPage />} />
        <Route path="/slider" element={<AnimalNavigationPage />} />
        <Route path="/slider/dogs" element={<SliderDogPage />}/>
        <Route path="/slider/cats" element={<SliderCatPage />}/>
      </Routes>
    </div>
  );
}

export default App;
