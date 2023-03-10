import React from "react";

export default function Filter() {
   const productElements = document.getElementsByClassName("book-card");

   const handleSearch = (e) => {
      const query = e.target.value.toLowerCase();
      for (let i = 0; i < productElements.length; i++) {
         const productTitle = productElements[i]
            .querySelector(".lws-bookName")
            .textContent.toLowerCase();
         if (productTitle.includes(query)) {
            productElements[i].style.display = "flex";
         } else {
            productElements[i].style.display = "none";
         }
      }
   };

   return (
      <form className="flex items-center">
         <div className="group relative rounded-md bg-white">
            <svg
               width="20"
               height="20"
               fill="currentColor"
               className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
            >
               <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
               ></path>
            </svg>
            <input
               type="text"
               placeholder="Filter books..."
               className="search"
               id="lws-searchBook"
               onChange={(e) => handleSearch(e)}
            />
         </div>
      </form>
   );
}
