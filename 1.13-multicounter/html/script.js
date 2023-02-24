//multi counter with redux and vanilla js
// select dom element
const Container = document.getElementById("container");
const AddAnotherMatch = document.getElementById("addAnotherMatch");
const Reset = document.getElementById("reset");

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADDANOTHERMATCH = "addAnotherMatch";
const RESET = "reset";


// action creators
const increment = (id, value) => {
  return {
    type: INCREMENT,
    payload: { id, value },
  };
};

const decrement = (id, value) => {
  return {
    type: DECREMENT,
    payload: { id, value },
  };
};
const addAnotherMatch = () => {
  return {
    type: ADDANOTHERMATCH,
  };
};
const reset = () => {
  return {
    type: RESET,
  };
};


// initial state
const initialState = [{
  id: 1,
  value: 0,
}];

// create reducer function
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, value: item.value + action.payload.value }
        }
        return { ...item };
      })
    case DECREMENT:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, value: item.value > action.payload.value ? item.value - action.payload.value : 0 }

        }
        return { ...item };
      })
    case ADDANOTHERMATCH:
      return [...state, { id: state.length + 1, value: 0 }]
    case RESET:
      return state.map(item => ({ ...item, value: 0 }))
    default:
      return state;
  }
}
// create store
const store = Redux.createStore(counterReducer);

// render function
function render() {
  const state = store.getState();
  console.log(state);
  let html = "";
  state.map((item) => {
    html += `
    <div class="match" id="cdcontainer">
        <div class="wrapper">
            <button class="lws-delete">
                <img src="./image/delete.svg" alt="" />
            </button>
            <h3 class="lws-matchName">Match ${item.id}</h3>
        </div>
        <div class="inc-dec">
            <form onsubmit="handleFormSubmit(event)" class="incrementForm" id="form${item.id}" data-id=${item.id} >
                <h4>Increment</h4>
                <input
                    type="number"
                    name="increment"
                    class="lws-increment"
                    data-id=${item.id}
                    />
                    
                
            </form>
            <form class="decrementForm" onsubmit="handleFormSubmit(event)">
                <h4>Decrement</h4>
                <input
                    data-id=${item.id}
                    type="number"
                    name="decrement"
                    class="lws-decrement"
                    />
                   
            </form>
        </div>
        <div class="numbers">
            <h2 class="lws-singleResult">${item.value}</h2>
        </div>
    </div>`
    Container.innerHTML = html;
  });
}
render()
// subscribe to store
store.subscribe(render);

// dispatch action
AddAnotherMatch.addEventListener("click", () => {
  store.dispatch(addAnotherMatch());
});
Reset.addEventListener("click", () => {
  store.dispatch(reset());
});

// action dispatching function for input field change
//in input field give this function onblur="HandleFunction(event, this.value)"
// function HandleFunction(event, value) {
//   event.preventDefault();
//   // console.log(value);
//   // console.log(event.target.dataset.id);
//   // console.log(event.target.name);
// if(event.target.name === "increment"){
//   store.dispatch(increment(+event.target.dataset.id, +value));
// }
// if(event.target.name === "decrement"){
//   store.dispatch(decrement(+event.target.dataset.id, +value));
// }
  
// }


function handleFormSubmit(event) {
  event.preventDefault();
  const inputVal = event.target.children[1].value;
  const inputName = event.target.children[1].name;
  const inputId = event.target.children[1].dataset.id;
  if(inputName === "increment"){
    store.dispatch(increment(+inputId, +inputVal));
  }
  if(inputName === "decrement"){
    store.dispatch(decrement(+inputId, +inputVal));
  }

}
