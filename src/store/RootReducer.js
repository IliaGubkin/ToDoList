import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { jumpingAnimalReducer } from "./jumpingAnimal/jumpingAnimalReducer";
import { pigGameReducer } from "./pigGame/pigGameReducer";
import { sliderReducer } from "./slider/sliderReducer";
import { catalogReducer } from "./catalog/catalogReducer"; 
import { previewButtonReducer } from "./previewButton/previewButtonReducer";
import { addToDoReducer } from "./addToDo/addToDoReducer";
import { toDoListReducer } from "./toDoList/toDoListReducer";
import { toDoItemReducer } from "./toDoItem/toDoItemReducer";

const rootReducer = combineReducers({
    slider: sliderReducer,
    animals: jumpingAnimalReducer,
    pigGame: pigGameReducer,
    catalog: catalogReducer,
    previewButton: previewButtonReducer, 
    addToDo: addToDoReducer,
    toDoList: toDoListReducer,
    toDoItem: toDoItemReducer
  });
  
  export const RootStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
