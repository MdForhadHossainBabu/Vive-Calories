import { IoStarOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const SingleData = ({ book }) => {
  // console.log(book);
  const {
    bookId,
    bookName,
    category,
    publisher,
    rating,
    review,
    image,
    author,
  } = book;
  
   return (
     <Link to={`/book/${bookId}`}>
       <div className="card  bg-base-100 border">
         <figure className="border-2 rounded-lg bg-gray-200 m-3 py-12">
           <img src={image} alt="book" />
         </figure>
         <div className="flex gap-2 px-8 font-medium">
           <button className="border text-green-300 px-8 py-1 rounded-lg">
             Young Adult
           </button>
           <button className="border text-green-300 px-8 py-1 rounded-lg">
             Identify
           </button>
         </div>
         <div className="card-body">
           <h2 className="card-title font-bold">{bookName}</h2>
           <p className="text-sm opacity-80">By : {author}</p>
           <div className="card-actions flex items-center justify-between px-8">
             <div>
               <h2>{category}</h2>
             </div>
             <div className="flex items-center gap-2">
               <span>{rating}</span>
               <IoStarOutline></IoStarOutline>
             </div>
           </div>
         </div>
       </div>
     </Link>
   );
};

export default SingleData;
