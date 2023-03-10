import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/thunk/fetchBooks";
import Book from "./Book";

export default function Booklist({setId}) {
   const dispatch = useDispatch();
   const books = useSelector((state) => state.books);
   console.log(books);
  
   useEffect(() => {
      dispatch(fetchBooks);
   }, [dispatch]);

   const [noFilter, setNoFilter] = useState(true);
   const [filter, setFilter] = useState("all");

   // filtering functions
   const filterBy = (book) => {
      
      switch (filter.toLowerCase()) {
         case "all":
            return book;
         case "featured":
            return  book.featured;
         default:
            return true;
   }
   };
   return (
      <div className="order-2 xl:-order-1">
         <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
               <button
                  className={`filter-btn ${noFilter && "active-filter"}`}
                  onClick={() => setFilter("all")}
                  id="lws-filterAll"
               >
                  All
               </button>
               <button
                  className={`filter-btn ${!noFilter && "active-filter"}`}
                  id="lws-filterFeatured"
                  onClick={() => setFilter("featured")}
               >
                  Featured
               </button>
            </div>
         </div>
         <div className="lws-bookContainer">
            {books.length > 0
               ? books?.filter(filterBy).map((book) => <Book bookData={book} key={book.id} setId={setId} />)
               : "No book found - make sure the server is up and running"}
         </div>
      </div>
   );
}
