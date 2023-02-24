import { createStore } from 'redux';
import flightBookingReducer from './booking/bookingReducer';
const store = createStore(flightBookingReducer)
export default store;