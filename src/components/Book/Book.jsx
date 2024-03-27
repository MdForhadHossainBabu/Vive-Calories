import { IoStarOutline } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';
import { createContext } from 'react';

const Book = ({ book }) => {
   console.log(book);
   const bookData = useLocation();
  //  console.log(bookData);
 

  
  const {author,bookId, bookName, category, image, rating,tags} = book;
  const navigate = useNavigate();

  const handleClickedData = (book, bookId) => {
  navigate(`/book/${bookId}`, { state: {book } });
}

  const handleAddData = () => {
    
  }


  const addBookData = createContext(book);
  return (
    <div>
      <div
        onClick={() => handleClickedData(book, bookId)}
        className="flex flex-col border-2 items-center py-6 h-[33rem] rounded-xl"
      >
        <div className="py-5">
          <img className="w-full h-[14rem] " src={image} alt="" />
        </div>
        <div>
          <div className="flex gap-6 ">
            <button className="border-2  px-4 py-1 text-green-500 font-bold rounded-xl border-green-500">
              {tags[0]}
            </button>
            <button className="border-2 px-4 py-1 text-green-500 font-bold rounded-xl border-green-500">
              {tags[1]}
            </button>
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <h2 className="text-2xl font-bold">{bookName}</h2>
            <h4 className="text-sm ">By : {author}</h4>
          </div>
          <div className="my-5">
            <hr />
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-lg">{category}</h1>
            <div className="flex gap-2 items-center">
              <h1 className="text-lg">{rating}</h1>
              <IoStarOutline />
            </div>
          </div>
        </div>
      </div>
      
    
    </div>
  );
};

export default Book;