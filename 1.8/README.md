<p>pure function is a function that can give always same output for same input</p>

<b>scripts:</b>
```
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://unpkg.com/redux@latest/dist/redux.min.js"></script>
```

<pre>view>action>store </pre>

<u>redux data flow:</u>

<ol>
<li>action identifiers</li>
<li>action creators</li>
<li>initial state</li>
<li>reducers</li>
<li>store</li>
<li>view</li>
</ol>

<ol>
<li>const INCREMENT = "increment"; <br>
const DECREMENT = "decrement";</li>
<li>const increment = (value) => { <br>
    return { <br>
        type: INCREMENT, <br>
        payload: value, <br>
    };   <br>
}; <br>
</li>
<li>const initialState = {<br>
    value: 0,<br>
};<br></li>
<li>
function counterReducer(state = <br>initialState, action) {<br>
    if (action.type === INCREMENT) {<br>
        return {<br>
            ...state,<br>
            value: state.value + action.<br>payload,<br>
        };<br>
    } else if (action.type === DECREMENT) {<br>
        return {<br>
            ...state,<br>
            value: state.value - action.<br>payload,<br>
        };<br>
    } else {<br>
        return state;<br>
    }<br>
}<br>
</li>
<li>
const store = Redux.createStore(counterReducer); <br></li>
<li>store.subscribe(render);</li>
<li>const render = () => {<br>
    const state = store.getState();<br>
    document.getElementById("value").innerHTML = <br>state.value;<br>
};<br>
</ol>