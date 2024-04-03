import { LuUsers2 } from 'react-icons/lu';
import { RiPagesLine } from 'react-icons/ri';

const ReadSingle = ({ book }) => {
  console.log(book);
  const {
    bookName,
    author,
    image,
    yearOfPublishing,
    category,
    totalPages,
    rating,
  } = book;

  return (
    <div className="my-6">
      <div className="flex border-2 px-4 py-3 w-1/2 rounded-lg items-center gap-6">
        <div className="border px-7 py-12 bg-gray-200 round">
          <img src={image} alt="img" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-2">{bookName}</h2>
          <p>By : {author}</p>
          <div className="flex gap-4 mt-3">
            <h2 className="text-xl font-bold">Tag</h2>
            <button className="border-2 px-4 py-1 text-green-500 font-bold rounded-md bg-slate-200">
              #Youth
            </button>
            <button className="border-2 px-4 py-1 text-green-500 font-bold rounded-md bg-slate-200">
              #Identity
            </button>
            <h4 className="text-lg">Year of Publishing : {yearOfPublishing}</h4>
          </div>
          <div className="flex gap-3 items-center  mt-4">
            <h4 className="flex items-center gap-2">
              <LuUsers2 /> Publisher : {category}
            </h4>
            <h3 className="flex items-center gap-3">
              <RiPagesLine /> Page : {totalPages}
            </h3>
          </div>
          <br />
          <hr />
          <div className="flex gap-3 my-3">
            <button className="border-2 px-5 py-2 rounded-3xl font-medium text-blue-500 bg-blue-200 ">
              Category :{' '}
            </button>
            <button className="border-2 text-lg px-5 py-2 rounded-3xl font-medium bg-orange-100 text-orange-400">
              Rating : {rating}
            </button>
            <button className="border-2 text-lg px-5 py-2 rounded-3xl font-bold bg-green-500 text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadSingle;
