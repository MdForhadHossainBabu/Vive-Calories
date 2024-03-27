import { useEffect, useState } from "react";
import Book from "../Book/Book";
const Books = () => {

 const [books, setBooks] = useState([]);


 useEffect(() => {
  fetch('/book.json')
    .then(res => res.json())
    .then(data => setBooks(data));
 },[])


 return (
   <>
     <h1 className="text-4xl text-center mx-12 mt-6 font-bold">Books</h1>

     <div className="grid grid-cols-1 lg:grid-cols-3 mx-12 my-6 gap-6 rounded-lg">
       {books.map(book => (
         <Book key={book.bookId} book={book} data={book}></Book>
       ))}
     </div>
   </>
 );
};

export default Books;