import { Link } from "react-router-dom";
import Books from "../Books/Books";


const MainHome = () => {
  return (
    <>
      <div className="lg:px-12 px-3">
        <div className="bg-slate-300 px-12 lg:py-0 rounded-lg h-[41rem]">
          <div className="gap-12 grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:py-52 py-32">
              <h1 className="lg:text-6xl text-3xl font-bold">
                Books to freshen up your bookshelf
              </h1>
              <div className="mt-12 lg:ml-24">
                <Link
                  className="px-12 py-3 bg-green-500 rounded-xl  text-white font-bold"
                  to="/listedbooks"
                >
                  View to List
                </Link>
              </div>
            </div>
            <div className="flex lg:px-  items-center lg:justify-center  lg:pt-20 sm:pb-12 pb-0 pl-16 lg:pl-0">
              <img className="lg:h-[32rem] lg:w-[24rem] " src="/pngwing 1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Books></Books>
    </>
  );
};

export default MainHome;