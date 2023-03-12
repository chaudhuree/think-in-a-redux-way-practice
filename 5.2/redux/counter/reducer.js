const { DECREMENT, INCREMENT } = require("./actionTypes");

// initial state
const initialState = {
    count: 0,
};

// reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.payload,
            };

        case DECREMENT:
            return {
                ...state,
                count: state.count - action.payload,
            };

        default:
            return state;
    }
};

module.exports = counterReducer;
