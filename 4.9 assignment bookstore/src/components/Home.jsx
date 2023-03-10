import React, { useState } from "react";
import { useSelector } from "react-redux";
import BookAddEdit from "./BookAddEdit";
import Booklist from "./Booklist";

export default function Home() {
   const books = useSelector((state) => state.books);
   const [id,setId]=useState(null);
   // console.log(id,books.length);
   const book = books.find((book) => book.id === id);
   console.log(book);
   return (
      <main className="py-12 2xl:px-6">
         <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
            <Booklist setId={setId}/>
            <BookAddEdit book={book} setId={setId}/>
         </div>
      </main>
   );
}
