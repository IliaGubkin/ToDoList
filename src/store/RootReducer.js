import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { counterReducer } from "./counterReducer";
import { jumpingAnimalReducer } from "./jumpingAnimalReducer";


const rootReducer = combineReducers({
    counter: counterReducer,
    animals: jumpingAnimalReducer,
  });
  
  export const RootStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
