import { useEffect, useState } from "react";
import { getWishlist } from "../utils";
import SingleWishlist from "./SingleWishlist";

const Wishlist = () => {

  const [wishLists , setWishList] = useState([])
//  console.log(wishLists);

  useEffect(() => {
    const wantToWishList = getWishlist()
    setWishList(wantToWishList)
  },[])
 return (
  <div>
     {
       wishLists.map(wish => <SingleWishlist key={wish.bookId} wish={wish} ></SingleWishlist>)
     }
  </div>
 );
};

export default Wishlist;