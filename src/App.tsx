import { Routes, Route } from "react-router-dom";
import { SliderPage } from "./pages/SliderPage";
import { ToDoListPage } from "./pages/ToDoListPage";
import { NavigationHeader } from "./components/layout/MainNavigation";
import { JumpingAnimalPage } from "./pages/JumpingAnimalPage";
import { Slider } from "./components/Slider/Slider";
import { CatalogPage } from "./pages/CatalogPage";
import { HomePage } from "./pages/HomePage";
import { PigGamePage } from "./pages/PigGamePage";
import { ExamplePage } from "./pages/ExamplePage";
import { Provider } from "react-redux";
import { RootStore } from "./store/RootReducer";
import { DesignSystem } from "./pages/DesignSystem";

function App() {
  return (
    <Provider store={RootStore}>
    <div className="App">
      <NavigationHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/redux" element={<ExamplePage />} />
        <Route path="/todolist" element={<ToDoListPage />} />
        <Route path="/slider" element={<SliderPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/piggame" element={<PigGamePage />} />
        <Route path="/catalog/:animal/:id" element={<Slider />} />
        <Route path="/slider/:animal" element={<Slider />} />
        <Route path="/slider/:animal/:index" element={<JumpingAnimalPage />} />
        <Route path="/design_system" element={<DesignSystem />} />
      </Routes>
    </div>
       </Provider>
  );
}

export default App;
