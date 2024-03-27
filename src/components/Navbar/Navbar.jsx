import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
 return (
   <div>
     <div className="flex items-center justify-between fixed w-full h-12 z-10 lg:px-12  lg:my-6 shadow-sm pb-6 ">
       <div className="lg:text-3xl text-3xl font-bold text-green-500">
         <Link to="/">Book Vive</Link>
       </div>
       <div className="hidden lg:flex items-center gap-6 lg:text-xl ">
         <NavLink
           to="/"
           className={({ isActive }) =>
             isActive
               ? 'px-6 rounded-lg py-2 border-2 border-green-500 hover:text-white hover:bg-green-500 font-bold text-green-500'
               : 'px-5 py-2'
           }
         >
           Home
         </NavLink>

         <NavLink
           to="/listedbooks"
           className={({ isActive }) =>
             isActive
               ? 'px-5 py-2 rounded-lg border-2 border-green-500  hover:bg-green-500  hover:text-white  font-bold  text-green-500'
               : 'px-5 py-2'
           }
         >
           Listed Books
         </NavLink>

         <NavLink
           to="/pagestoread"
           className={({ isActive }) =>
             isActive
               ? 'px-5 py-2 rounded-lg border-2 border-green-500   hover:bg-green-500  hover:text-white text-green-500 font-bold'
               : 'px-5 py-2'
           }
         >
           Pages to Read
         </NavLink>
         <NavLink
           to="/explore"
           className={({ isActive }) =>
             isActive
               ? 'px-5 py-2 rounded-lg border-2 border-green-500   hover:bg-green-500  hover:text-white text-green-500 font-bold'
               : 'px-5 py-2'
           }
         >
           Explore
         </NavLink>
       
       </div>
       <div className="flex items-center lg:gap-4 gap-2 lg:text-xl">
         <NavLink className="lg:px-8 hover:bg-transparent border-2  px-4 py-3 hover:text-green-500 bg-green-400 font-bold hover:border-green-500 duration-500 text-white rounded-xl">
           Sign In
         </NavLink>
         <NavLink className="lg:px-8 px-4 py-3 bg-blue-300 font-bold hover:bg-transparent border-2 hover:text-blue-500 hover:border-blue-500 duration-700 text-white rounded-xl">
           Sign Up
         </NavLink>
       </div>
     </div>
   </div>
 );
};

export default Navbar;