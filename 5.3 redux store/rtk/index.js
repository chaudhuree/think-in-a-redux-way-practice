const store=require('./app/store');
const {counterActions}=require('./features/counter/counterSlice');

//! JSON.stringify() ->> first value is the object to be converted to a string, second value is a function that will be used to replace values, third value is the number of spaces to use as indentation

console.log(JSON.stringify(store.getState(), null, 1));

store.subscribe(() => console.log(store.getState()));

store.dispatch(counterActions.increment(5));
store.dispatch(counterActions.decrement());
store.dispatch(counterActions.increment(5));