import { Link } from "react-router-dom";
import SingleBooks from "../SingleBook/SingleBooks";

const Banner = () => {
  return (
    <div className="px-4">
      <div className="border-2 bg-slate-300 h-[40rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-12 px-1 lg:py-24 lg:pl-28">
          <div>
            <h2 className="text-5xl lg:py-12 lg:text-7xl font-bold">
              Books to freshen <span>up your bookshelf</span>
            </h2>
            <div className="items-center text-center mt-12">
              <Link to="listBooks" className=" px-12 py-2 rounded-lg font-bold text-white bg-green-400 ">
                View the list
              </Link>
            </div>
          </div>
          <div className="ml-12">
            <img
              className=" w-[15rem] py-12 lg:w-[20rem]"
              src="/book.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <SingleBooks></SingleBooks>
    </div>
  );
};

export default Banner;