import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";
import { getWishlist } from "../utils";

const PageOfRead = (props) => {

 
  const { fill, x, y, width, height } = props;
 const [pages, setPages] = useState([]);
 useEffect(() => {
  const pagesData = getWishlist()
  setPages(pagesData)
 }, [])
 
 console.log(pages);
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
 return (
   <div>
     <BarChart
       width={500}
       height={300}
       data={pages.totalPages}
       margin={{
         top: 20,
         right: 30,
         left: 20,
         bottom: 5,
       }}
     >
       <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey={pages.author} />
       <YAxis />
       <Bar
         dataKey={pages.totalPages}
         fill="#8884d8" shape={<PageOfRead/>}
         label={{ position: 'top' }}
       >
         {pages.map((entry, index) => (
           <Cell key={`cell-${index}`} fill={colors[index % 20]} />
         ))}
       </Bar>
     </BarChart>
   </div>
 );
};

export default PageOfRead;