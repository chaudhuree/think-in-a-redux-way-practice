import { combineReducers } from "redux";
import bookReducer from "./BookFeature/bookReducer";

const rootReducer = combineReducers({
   books: bookReducer,
});

export default rootReducer;
