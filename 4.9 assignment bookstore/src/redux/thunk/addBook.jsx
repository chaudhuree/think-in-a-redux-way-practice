import { addBook } from "../BookFeature/actions";
const addNewBook = (bookData) => {
   return async (dispatch, getState) => {
      const data = await fetch("http://localhost:9000/books", {
         method: "POST",
         headers: {
            "Content-Type": "application/json; charset=utf-8",
         },
         body: JSON.stringify(bookData),
      });
      const book = await data.json();

      dispatch(addBook(book));
   };
};

export default addNewBook;
