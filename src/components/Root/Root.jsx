import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
 return (
   <div>
     <div className="h-16 lg:h-[7rem]">
       <Navbar></Navbar>
     </div>
   
    <Outlet></Outlet>
   
   </div>
 );
};

export default Root;