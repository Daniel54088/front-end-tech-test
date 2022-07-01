import { combineReducers } from "redux";
import exampleReducer from "./exampleReducer";

const rootReducer = combineReducers({
    post: exampleReducer
})

export default rootReducer;