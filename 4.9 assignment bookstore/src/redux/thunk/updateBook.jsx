import { updateBook } from "../BookFeature/actions";
const updateServerBook = (bookData) => {
   return async (dispatch) => {
      const data = await fetch(`http://localhost:9000/books/${bookData.id}`, {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json; charset=utf-8",
         },
         body: JSON.stringify(bookData),
      });
      const book = await data.json();

      dispatch(updateBook(book));
   };
};

export default updateServerBook;
