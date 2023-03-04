const fetch = require('node-fetch');
const delayMiddleware = (store) => (next) => (action) => {
  if (action.type === 'todos/todoAdded') {
    console.log('i am delaying you');
    setTimeout(() => {
      next(action)
    }, 2000)
    return;
  }
  return next(action)
}

const fetchTodosMiddleware =  (store) => (next) =>async (action) => {
  if(action.type === 'todos/fetchTodos'){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    
    const todos= await response.json();
    store.dispatch({
      type:'todos/todoLoaded',
      payload:todos
    })
    console.log(`number of fetched todos: ${store.getState().todos.length}`);
    return;
  }
  return next(action)
}

module.exports = {delayMiddleware,fetchTodosMiddleware}