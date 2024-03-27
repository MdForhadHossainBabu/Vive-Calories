import { useEffect, useState } from "react";
import ListedBooks from "../ListedBooks/ListedBooks";

const ListedBook = () => {


 const [data, setData] = useState([]);

 useEffect(() => {
  fetch('/book.json')
    .then(res => res.json())
    .then(data => setData(data));
 },[])
 return (
  <div>
   <h3 className="text-4xl">Hello world</h3>
   <div>
    {
     data.map(sData => <ListedBooks data={sData} key={sData.id}></ListedBooks>)
    }
   </div>
  </div>
 );
};

export default ListedBook;