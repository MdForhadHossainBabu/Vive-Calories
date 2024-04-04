import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const sideButton = (
    <div className="flex gap-2 px-5">
      <a className="border-2 px-6 font-semibold py-2 rounded-lg bg-green-400 text-white">
        Sign In
      </a>
      <a className="border-2 px-6 font-semibold py-2 rounded-lg bg-blue-400 text-white">
        Sign Up
      </a>
    </div>
  );

  const navLinks = (
    <div className="lg:flex gap-4 text-xl space-y-2   items-center">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-green-500  lg:px-8 font-bold hover:bg-green-500 hover:text-white border-green-500  lg:border-2'
              : 'lg:border-2 px-8'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listBooks"
          className={({ isActive }) =>
            isActive
              ? 'text-green-500  px-4 font-bold hover:bg-green-500 hover:text-white border-green-500  lg:border-2'
              : 'lg:border-2'
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/readPage"
          className={({ isActive }) =>
            isActive
              ? 'text-green-500  px-4 font-bold hover:bg-green-500 hover:text-white border-green-500  lg:border-2'
              : 'lg:border-2'
          }
        >
          Page of Read
        </NavLink>
      </li>
    </div>
  );

 return (
  <>
 
     <div className="navbar bg-base-200 flex items-center shadow-lg px-4 fixed z-10">
       <div className="navbar-start">
         <div className="dropdown">
           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth="2"
                 d="M4 6h16M4 12h8m-8 6h16"
               />
             </svg>
           </div>
           <ul
             tabIndex={0}
             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex items-center"
           >
             {navLinks}
           </ul>
         </div>
         <a className="btn btn-ghost text-3xl font-extrabold">Book Vive</a>
       </div>
       <div className="navbar-center hidden lg:flex">
         <ul className="menu menu-horizontal px-1">{navLinks}</ul>
       </div>
       <div className="navbar-end hidden lg:flex">{sideButton}</div>
   </div>
  </>
 );
};

export default Navbar;
