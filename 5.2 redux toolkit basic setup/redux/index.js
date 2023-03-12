const store = require("./store");
const { increment, decrement } = require("./counter/actions");

// subscribe to state changes
store.subscribe(() => {
    console.log(store.getState());
});

// disptach actions
store.dispatch(increment(5));

store.dispatch(increment(5));

store.dispatch(decrement(4));
