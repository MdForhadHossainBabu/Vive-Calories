import { useEffect, useState } from "react";
import SingleData from "./SingleData";
import { useNavigation } from "react-router-dom";
import Loader from "../Loader/Loader";

const SingleBooks = () => {

  const navigation = useNavigation();

 const [books, setBooks] = useState([]);
 useEffect(() => {
  fetch('/book.json')
   .then(res => res.json())
  .then(data =>setBooks(data))
 },[])
 if (navigation.state === 'loading') return <Loader />
 return (
   <div>
     <div className="my-7">
       <h1 className="text-5xl text-center font-bold">Book</h1>
     </div>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:ml-12 px-2 ">
       {books.map(book => (
         <SingleData key={book.bookId} book={book}></SingleData>
       ))}
     </div>
   </div>
 );
};

export default SingleBooks;