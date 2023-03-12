const { DECREMENT, INCREMENT } = require("./actionTypes");

const increment = (value) => {
    return {
        type: INCREMENT,
        payload:value
    };
};

const decrement = (value) => {
    return {
        type: DECREMENT,
        payload:value
    };
};

module.exports = {
    increment,
    decrement,
};
