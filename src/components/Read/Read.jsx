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
  <div className="flex gap-2">
   {
    books.map(book => <ReadSingle key={book.bookId} book={book}></ReadSingle>)
   }
  </div>
 );
};

export default Read;