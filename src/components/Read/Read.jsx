import { useEffect, useState } from "react";
import { getData } from "../utils";
import ReadSingle from "./ReadSingle";

const Read = () => {
 const [books, setBooks] = useState([]);
// console.log(books);

 useEffect(() => {
  const storedBooks = getData();
  setBooks(storedBooks);
 }, [])
 // console.log(books);
 return (
  <div>
   {
    books.map(book => <ReadSingle key={book.bookId} book={book}></ReadSingle>)
   }
  </div>
 );
};

export default Read;