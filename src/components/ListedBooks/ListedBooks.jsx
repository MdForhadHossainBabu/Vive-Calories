import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {

 const [tabIndex, setTabIndex] = useState(0)
 return (
   <div className="mx-6">
     <div className="border py-4 bg-slate-300 text-center  rounded-lg">
       <h2 className="text-5xl font-bold">Book</h2>
     </div>
     <div className="text-center my-5 ">
       <button className="border-2 px-8 rounded-lg py-2 bg-green-400">
         <select className="bg-green-400 outline-none px-4" name="" id="">
           <option value="Fiction" disabled>
             Sort By
           </option>
           <option value="Fiction">Fiction</option>
           <option value="Fiction">Fiction</option>
           <option value="Fiction">Fiction</option>
         </select>
       </button>
     </div>

     {/* this is tabs point task */}
     <div className="mx-6">
       <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
         <Link
           to=""
           onClick={() => setTabIndex(0)}
           className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
             tabIndex === 0 ? 'border-2 border-b-0 ' : ' border-b'
           }  rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
         >
           <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round"
             strokeLinejoin="round"
             className="w-4 h-4"
           >
             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
           </svg>
           <span>Read</span>
         </Link>
         <Link
           to={`wishlist`}
           onClick={() => setTabIndex(1)}
           className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
             tabIndex === 1 ? 'border-2 border-b-0 ' : ' border-b'
           }  rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
         >
           <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round"
             strokeLinejoin="round"
             className="w-4 h-4"
           >
             <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
             <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
           </svg>
           <span>Wishlist</span>
         </Link>
       </div>
     </div>
   {/* this is tabs point task end */}
   <Outlet></Outlet>
   </div>
 );
};

export default ListedBooks;