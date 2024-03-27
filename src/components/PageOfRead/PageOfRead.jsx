import { useLoaderData } from "react-router-dom";

const PageOfRead = () => {
 const chartData = useLoaderData()
 console.log(chartData);
 return (
  <div>
   <h2 className="text-5xl">This is page to read</h2>
  </div>
 );
};

export default PageOfRead;