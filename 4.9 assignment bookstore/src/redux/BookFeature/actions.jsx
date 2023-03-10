import { FETCH_BOOKS, ADD_BOOK, DELETE_BOOK,UPDATE_BOOK } from "./actionTypes";

export const fetchBooksFromServer = (booksFromServer) => {
   return {
      type: FETCH_BOOKS,
      payload: booksFromServer,
   };
};

export const addBook = (bookData) => {
   return {
      type: ADD_BOOK,
      payload: {
         name: bookData.name,
         author: bookData.author,
         thumbnail: bookData.thumbnail,
         price: bookData.price,
         rating: bookData.rating,
         featured: bookData.featured,
      },
   };
};

export const deleteBook = (bookID) => {
   return {
      type: DELETE_BOOK,
      payload: bookID,
   };
};


export const updateBook = (bookData) => {
   return {
      type: UPDATE_BOOK,
      payload: bookData
   };
};
