import { Routes, Route } from "react-router-dom";
import { AnimalNavigationPage } from "./pages/AnimalNavigationPage";
import { ToDoListPage } from "./pages/ToDoListPage";
import { NavigationHeader } from "./components/layout/MainNavigation";
import { SliderDogPage } from "./pages/SliderDogPage";
import { SliderCatPage } from "./pages/SliderCatPage";
import { JumpingCatPage } from "./pages/JumpingCatPage";
import { JumpingDogPage } from "./pages/JumpingDogPage";
import { useState } from "react";
import cats from "../src/components/Slider/cats.json"
import dogs from "../src/components/Slider/dogs.json"

function App(props: any) {
  let [animalIndex, setAnimalIndex] = useState(0);

   
  function previousAnimalImg() {
    if(animalIndex > 0) {
        animalIndex--;
    } else {
        animalIndex = .length - 1;
    }

    setAnimalIndex(animalIndex);
}

function nextAnimalImg() {
    if(animalIndex < typeOfAnimal.length - 1) {
        animalIndex++;
    } else {
        animalIndex = 0;
    }

    setAnimalIndex(animalIndex);
}

  return (
    <div className="App">
      <NavigationHeader />
      <Routes>
        <Route path="/" element={<ToDoListPage />} />
        <Route path="/slider" element={<AnimalNavigationPage />} />
        <Route path="/slider/dogs" element={<SliderDogPage />}/>
        <Route path="/slider/cats" element={<SliderCatPage />}/>
        <Route path="/slider/dogs/jump" element={<JumpingDogPage typeOfAnimal="" animalIndex="" />}/>
        <Route path="/slider/cats/jump" element={<JumpingCatPage />}/>
      </Routes>
    </div>
  );
}

export default App;
