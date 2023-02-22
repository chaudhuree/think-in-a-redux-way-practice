```
const increment = (id) => {
        const updatedCounter = state.map((c) => {
            if (c.id === id) {
                return {
                    ...c,
                    count: c.count + 1,
                };
            }
            return { ...c };
        });

        setState(updatedCounter);
    };

    const decrement = (id) => {
        const updatedCounter = state.map((c) => {
            if (c.id === id) {
                return {
                    ...c,
                    count: c.count - 1,
                };
            }
            return { ...c };
        });
        setState(updatedCounter);
    };
```

> aikhane amra dekhte pari j map use kora hoy. aitar karon hocce state take immutable banano. amra kintu mul state ta k change kortecina just oitar akta copy nea then kaj korteci.

1. app a state function aigulo declare kora hoice.
2. totalCount function a state array ta k reduce kore sum ber kore Stats component a pathano hoyeche. jeta ashole total count ta k show korbe.
3. as state/initialState akta array with two elements. so aita k map kore Counter component k duibar render kora hoice. then aitay te id, count, increment and decrement function k pass korano hoice. so, aita duita object er jonne duita alada alada counter component create korbe. but jehutu parent er state k use korce so finally data ta app.js er state a e change hobe.
4. Counter a Count a state.count er value ta k show kore.
5. button component create kora hoice jate large code duibar likha na lage.
   and er moddhe label ta k children hisebe pass kora hoice.
