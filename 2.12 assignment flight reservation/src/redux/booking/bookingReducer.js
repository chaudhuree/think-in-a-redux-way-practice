import { ADD_BOOKING, REMOVE_BOOKING } from "./actionType"

const initialState = {
    bookings :[]
}

const flightBookingReducer = (state = initialState, action)=>{

    switch(action.type){
        case ADD_BOOKING:
            return {
                ...state,
                bookings: [...state.bookings, action.payload]
            }
        case REMOVE_BOOKING:
            return {
                ...state,
                bookings : state.bookings.filter((book)=>book.bookingId !== action.payload)
            }
        default:
            return {
                ...state
            }
    }
}
export default flightBookingReducer;