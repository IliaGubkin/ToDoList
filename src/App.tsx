import { Routes, Route } from "react-router-dom";
import { SliderPage } from "./pages/SliderPage";
import { ToDoListPage } from "./pages/ToDoListPage";
import { NavigationHeader } from "./components/layout/MainNavigation";

function App() {
  return (
    <div className="App">
      <NavigationHeader />
      <Routes>
        <Route path="/" element={<ToDoListPage />} />
        <Route path="/slider" element={<SliderPage />} />
      </Routes>
    </div>
  );
}

export default App;
