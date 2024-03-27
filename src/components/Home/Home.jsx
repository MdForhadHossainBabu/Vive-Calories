import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Home = () => {
 return (
  <div>
<div className="h-24"><Navbar></Navbar></div>
   <Outlet></Outlet>
  </div>
 );
};

export default Home;