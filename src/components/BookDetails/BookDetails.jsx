import { useLoaderData, useParams } from "react-router-dom";
import { saveBook } from "../utils";

const BookDetails = () => {
  
  // console.log(reads);
  // console.log(wishes);

  const handleAddToRead = e => {
  
      saveBook(e)
    // console.log(e);
  }

  const handleAddToWishlist = e => {

    // console.log(e);
  }
 const books = useLoaderData();
 // console.log(books);
 const { bookId } = useParams();
 const idInt = parseInt(bookId);
 const book = books.find(book => book.bookId === idInt);
 // console.log(book);
 const {
   image,
   author,
   bookName,
   rating,
   review,
   tags,
   totalPages,
   yearOfPublishing,
   category,
 } = book;
  
 return (
   <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-24 lg:mx-32">
     <div className="border px-12 py-12  bg-gray-400 rounded-xl">
       <img className="lg:h-96 w-[] h-52 px-28" src={image} alt="" />
     </div>
     <div>
       <div className="space-y-4">
         <h1 className="text-4xl font-bold">{bookName}</h1>
         <p className="font-bold opacity-80">By : {author}</p>
       </div>
       <div className="mt-5">
         {/* category  */}
         <h1 className="text-3xl font-bold">{category}</h1>
         <p>{review}</p>
       </div>
       <div className="flex gap-4 items-center">
         <div>
           <h1 className="text-xl font-bold">Tag : </h1>
         </div>
         <div className="flex gap-3">
           <button className="border-2 px-6 py-1 font-bold text-green-500 rounded-lg">
             #{tags[0]}
           </button>
           <button className="border-2 px-6 py-1 font-bold text-green-500 rounded-lg">
             #{tags[1]}
           </button>
         </div>
       </div>
       <div className="flex gap-2 mt-12">
        
           <div className="font-medium opacity-80">
             <div>Number of Pages</div>
             <div>Publisher</div>
             <div>Year of publishing</div>
             <div>Rating </div>
           </div>
           <div className="font-medium">
             <div>:</div>
             <div>:</div>
             <div>:</div>
             <div>:</div>
           </div>

           <div className="font-medium">
             <div>{totalPages}</div>
             <div>{category}</div>
             <div>{yearOfPublishing}</div>
             <div>{rating}</div>
           </div>
       
    </div>
    <div className="mt-8 flex gap-4">
     <button onClick={()=>handleAddToRead(book)} className="border-2 px-12 font-bold py-2 rounded-lg">Read</button>
     <button onClick={()=>handleAddToWishlist(book)} className="border-2 px-12 font-bold py-2 bg-blue-400 text-white rounded-lg">Wishlist</button>
    </div>
   </div>
   </div>
 );
};

export default BookDetails;