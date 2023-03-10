import { ADD_BOOK, DELETE_BOOK, FETCH_BOOKS, UPDATE_BOOK } from "./actionTypes";

import { initialState } from "./initialState";

const bookReducer = (state = initialState, action) => {
   const newId = (state) => {
      const newID =
         state.reduce((maxID, book) => {
            return book.id > maxID ? book.id : maxID;
         }, 0) + 1;
      return newID;
   };
   switch (action.type) {
      case FETCH_BOOKS: {
         return [...state, ...action.payload];
      }

      case ADD_BOOK: {
         const newBook = {
            name: action.payload.name,
            author: action.payload.author,
            thumbnail: action.payload.thumbnail,
            price: action.payload.price,
            rating: action.payload.rating,
            featured: action.payload.featured,
            id: newId(state),
         };
         return [...state, newBook];
      }
      case DELETE_BOOK: {
         return state.filter((book) => book.id !== action.payload);
      }
      case UPDATE_BOOK: {
         const { id, name, author, thumbnail, price, rating, featured } = action.payload;
         const updatedBook = {
            id,
            name,
            author,
            thumbnail,
            price,
            rating,
            featured,
         };
         const updatedState = state.map((book) =>
            book.id === updatedBook.id ? updatedBook : book
         );
         return updatedState;
      }
      default:
         return state;
   }
};

export default bookReducer;
