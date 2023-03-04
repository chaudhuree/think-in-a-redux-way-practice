const { createStore,applyMiddleware } = require("redux");
const {delayMiddleware,fetchAsyncMiddleware}=require('./middleware')
const {fetchTodos}=require('./function')
//initial state
const initialState={
  todos: []
}

//reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case "todos/todoLoaded":
      return {
        ...state,
        todos:[...state.todos, ...action.payload]
      }
    default:
      return state;
  }
};

//store
const store = createStore(todoReducer,applyMiddleware(delayMiddleware,fetchAsyncMiddleware));

//subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

//dispatch actions
// store.dispatch({
//   type: "todos/todoAdded",
//   payload: "Learn Redux With Nodejs"
// });
store.dispatch(fetchTodos);