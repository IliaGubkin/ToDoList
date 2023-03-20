import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { jumpingAnimalReducer } from "./jumpingAnimal/reducer";
import { pigGameReducer } from "./pigGame/reducer";
import { sliderReducer } from "./slider/reducer";
import { catalogReducer } from "./catalog/reducer"; 
import { previewButtonReducer } from "./previewButton/reducer";
import { addToDoReducer } from "./addToDo/reducer";
import { toDoListReducer } from "./toDoList/reducer";
import { toDoItemReducer } from "./toDoItem/reducer";

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
