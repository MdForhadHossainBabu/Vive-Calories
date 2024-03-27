import { useLocation } from "react-router-dom";

const BookDetail = () => {
 // const book = useLoaderData();
 // console.log(book);


 const bookData = useLocation();
//  console.log(bookData.state.book);
 const {
   author,
   image,
   category,
   publisher,
   rating,
   review,
   bookName,
   tags,
   totalPages,
   yearOfPublishing,
 } = bookData.state.book;
 
 return (
   <div className="flex-col lg:flex-row flex gap-12 mx-12">
     <div className=" px-6lg:py-12">
       <img className="lg:w-[25rem] sm:w-[14rem] md:w-[20rem] px-12 py-12 bg-slate-200 rounded-lg" src={image} alt="" />
     </div>
     <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{bookName}</h1>
       <h4 className="text-lg">
         By : <span className="text-sm font-bold">{author}</span>
       </h4>
       <h2 className="text-3xl font-bold">{category}</h2>
       <h6>{review}</h6>

       <span className="flex items-center gap-4">
         <span className="text-2xl font-bold"> Tag: </span>
         <span className="flex gap-3">
           <button className="border-2 lg:px-8 px-2 py-1.5 text-green-400 border-green-500 hover:bg-green-400 hover:text-white font-extrabold rounded-lg">
             #{tags[0]}
           </button>
           <button className="border-2 px-3 lg:px-8 py-1.5 text-green-400 border-green-500 hover:bg-green-400 hover:text-white font-extrabold rounded-lg">
             #{tags[1]}
           </button>
         </span>
       </span>

       <div className="flex gap-12 mt-12">
         <div className="font-medium">
           <h1>Number of Pages</h1>
           <h1>Publisher</h1>
           <h1>Year of publishing</h1>
           <h1>Rating</h1>
     </div>
     <div>
      <h1>:</h1>
      <h1>:</h1>
      <h1>:</h1>
      <h1>:</h1>
     </div>
         <div className="font-bold">
      <h1>{ totalPages}</h1>
      <h1>{publisher}</h1>
      <h1>{yearOfPublishing}</h1>
      <h1>{rating}</h1>
         </div>
       </div>
       <div className="flex gap-8">
         <button className="border-2 px-12 py-4 font-medium text-xl rounded-lg">Read</button>
         <button className="border-2 px-12 py-4 font-medium text-xl rounded-lg">Wishlist</button>
       </div>
     </div>
   </div>
 );
};

export default BookDetail;