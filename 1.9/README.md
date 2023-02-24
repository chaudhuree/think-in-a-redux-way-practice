<h2 align="center">to make the state immutable we have to destructure it in deeper level</h2>

```
// initial state
const initialState = {
    value: 0,
    properties: {
        a: 5,
        b: 6,
    },
};
```

```
(action.type === ITEST) {
        const updatedState = {
            ...state,
            properties: {
                ...state.properties,
                b: state.properties.b + 1,
            },
        };

        return updatedState;
```