import { useState } from "react";
import { ToDo } from "./components/ToDo/ToDo";
import { SelectScreen } from "./components/SelectScreen/SelectScreen";
import { Slider } from "./components/Slider/Slider";

function App() {
  const [screen, setScreen] = useState("");

 console.log(screen)

  return (
    <div className="App">
      {screen == "" ?
        <div>
          <SelectScreen setScreen={setScreen}/>
        </div>
        : (screen == "slider" ?
          <Slider />
          : <ToDo />
        )
      }
    </div>
  )
}

export default App;
