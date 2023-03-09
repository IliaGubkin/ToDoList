import { Routes, Route } from "react-router-dom";
import { SliderPage } from "./pages/SliderPage";
import { ToDoListPage } from "./pages/ToDoListPage";
import { NavigationHeader } from "./components/layout/MainNavigation";
import { JumpingAnimalPage } from "./pages/JumpingAnimalPage";
import { Slider } from "./components/Slider/Slider";
import { CatalogPage } from "./pages/CatalogPage";
import { HomePage } from "./pages/HomePage";
import { PigGamePage } from "./pages/PigGamePage";
import { ReduxExamplePage } from "./pages/ReduxExamplePage";
import { Provider } from "react-redux";
import { RootStore } from "./store/RootReducer";

function App() {
  return (
    <Provider store={RootStore}>
    <div className="App">
      <NavigationHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/redux" element={<ReduxExamplePage />} />
        <Route path="/todolist" element={<ToDoListPage />} />
        <Route path="/slider" element={<SliderPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/piggame" element={<PigGamePage />} />
        <Route path="/catalog/:animal/:id" element={<Slider />} />
        <Route path="/slider/:animal" element={<Slider />} />
        <Route path="/slider/:animal/:index" element={<JumpingAnimalPage />} />
      </Routes>
    </div>
       </Provider>
  );
}

export default App;
