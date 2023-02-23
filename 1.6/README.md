<p align="center"><u><b>work flow</b></u></p>
<hr/>

- add tailwind css cdn link in index.html
- add redux cdn link in index.html

<hr/><br/>
<ol>
   <li>create initial state   </li>

   <li>create reducer function</li>
   
   <li>create store</li>
   <li>dispatch action</li>
   <li>subscribed</li>
<ol>

```
//initial state
const initialState = {
 value: 0,
};
```

```
//reducer function
   function counterReducer(state = initialState, action) {
    if (action.type === "increment") {
        return {
            ...state,
            value: state.value + 1,
        };
    } else if (action.type === "decrement") {
        return {
            ...state,
            value: state.value - 1,
        };
    } else {
        return state;
    }
}
```

```
//create store
const store = Redux.createStore(counterReducer);
```

```
//dispatch action
 store.dispatch({
        type: "increment",
    });
```

```
//subscribed
//it takes the updated state and update the UI
const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

// update UI initially
render();

store.subscribe(render);
```
