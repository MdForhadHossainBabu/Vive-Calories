import { Link } from "react-router-dom";

const ErrorPage = () => {
 return (
   <div className="mt-52">
     <div className="flex items-center text-center justify-center">
       <div className="flex items-center">
         <h2 className="text-7xl font-bold">
           <span className="text-red-500">404</span> /
         </h2>
         <h2 className="text-3xl ml-2">Page Not Found </h2>
       </div>
     </div>
     <div className="text-center mt-12">
       <Link to="/" className="border-2 px-14 py-3 text-xl font-bold text-white bg-green-400 rounded-lg shadow-xl drop-shadow-2xl :">
         Back to Home
       </Link>
     </div>
   </div>
 );
};

export default ErrorPage;