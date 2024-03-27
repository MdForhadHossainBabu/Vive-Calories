import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';


const ListedBooks = ({ data }) => {
  console.log(data);
  const handleAddData = e => {
    console.log('handleAddData');
  };
  return (
    <div>
      <h3 className="text-5xl font-bold bg-gray-300 py-8 mx-12 rounded-md text-center">
        Books
      </h3>
      <div className=" text-center my-6">
        <button className=" text-xl border-2 px-7 py-2 font-medium bg-green-500 text-white rounded-xl">
          <span className="flex items-center">
            sort by <IoIosArrowDown className="ml-6"></IoIosArrowDown>
          </span>
        </button>
      </div>

      {/* tabs */}
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap font-bold dark:bg-gray-100 dark:text-gray-800">
        <Link
          to="  "
          className="px-5 py-3 space-x-2 border-b-2 dark:border-gray-600 dark:text-gray-600"
        >
          <span>Read</span>
        </Link>
        <Link
          to={`wishlist`}
          className="px-5 py-3 space-x-2 border-2 border-b-0 font-bold rounded-t-md dark:border-gray-600 dark:text-gray-900"
        >
          <button onClick={() => handleAddData(e)}>Wishlist</button>
        </Link>
      </div>
    </div>
  );
};

export default ListedBooks;
