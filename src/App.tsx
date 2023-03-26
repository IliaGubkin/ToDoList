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
import { LogInWrapper } from "./components/LogInWrapper";

function App() {
  return (
    <Provider store={RootStore}>
      <div className="App">
        <NavigationHeader />
        <Routes>
          <Route path="/" element={<LogInWrapper><HomePage /></LogInWrapper>} />
          <Route path="/redux" element={<LogInWrapper><ExamplePage /></LogInWrapper>} />
          <Route path="/todolist" element={<LogInWrapper><ToDoListPage /></LogInWrapper>} />
          <Route path="/slider" element={<LogInWrapper><SliderPage /></LogInWrapper>} />
          <Route path="/catalog" element={<LogInWrapper><CatalogPage /></LogInWrapper>} />
          <Route path="/piggame" element={<LogInWrapper><PigGamePage /></LogInWrapper>} />
          <Route path="/catalog/:animal/:id" element={<LogInWrapper><Slider /></LogInWrapper>} />
          <Route path="/slider/:animal" element={<LogInWrapper><Slider /></LogInWrapper>} />
          <Route path="/slider/:animal/:index" element={<LogInWrapper><JumpingAnimalPage /></LogInWrapper>} />
          <Route path="/design_system" element={<LogInWrapper><DesignSystem /></LogInWrapper>} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
