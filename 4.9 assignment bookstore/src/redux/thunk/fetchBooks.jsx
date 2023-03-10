import { fetchBooksFromServer } from "../BookFeature/actions";
const fetchBooks = async (dispatch, getState) => {
   const data = await fetch("http://localhost:9000/books");
   const books = await data.json();

   dispatch(fetchBooksFromServer(books));
};

export default fetchBooks;
