import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { counterReducer } from "./counterReducer";
import { jumpingAnimalReducer } from "./jumpingAnimalReducer";
import { pigGameReducer } from "./pigGameReducer";
import { sliderReducer } from "./sliderReducer";
import { catalogReducer } from "./catalogReducer"; 
import { previewButtonReducer } from "./previewButtonReducer";
import { addToDoReducer } from "./addToDoReducer";
import { toDoListReducer } from "./toDoList";
import { toDoItemReducer } from "./ToDoItemReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
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
