import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import ThunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";
const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(ThunkMiddleware))
);

export default store;
