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

const fetchAsyncMiddleware =  (store) => (next) =>async (action) => {
  if(typeof action === 'function'){
    return action(store.dispatch,store.getState)
  }  
  next(action)
  return 
}

module.exports = {delayMiddleware,fetchAsyncMiddleware}