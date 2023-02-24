import { ADD_BOOKING, REMOVE_BOOKING } from "./actionType"

const addBooking = (value)=>{
    return {
        type: ADD_BOOKING,
        payload: value,
    }
}
const removeBooking = (id)=>{
    return{
        type: REMOVE_BOOKING,
        payload: id,
    }
}

export { addBooking, removeBooking }

