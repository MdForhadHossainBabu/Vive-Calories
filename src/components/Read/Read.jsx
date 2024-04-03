import { useEffect, useState } from "react";
import { readData } from "../utils";
import ReadSingle from "./ReadSingle";

const Read = () => {
 const [books, setBooks] = useState([]);
console.log(books);

 useEffect(() => {
  const storedBooks = readData();
  setBooks(storedBooks);
 },[])
 return (
  <div className="flex gap-2">
   {
    books.map(book => <ReadSingle key={book.bookId} single={book}></ReadSingle>)
   }
  </div>
 );
};

export default Read;