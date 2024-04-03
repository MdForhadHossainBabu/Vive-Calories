import toast from "react-hot-toast";

export const readData = () => {
 let read = [];
 const storedBook = localStorage.getItem('read');
 if (storedBook) {
  read = JSON.parse(storedBook);
 }
 return read;
}

export const saveBook = read => {
 let readMore = readData();
 // const isExisted = readMore.find(r => r.bookId === readMore.bookId);
 const isExisted = readMore.find(R => R.bookId === read.bookId)
 if (isExisted) {
  toast.error('already done');
 }
 readMore.push(read);
 localStorage.setItem('read book' , JSON.stringify(readMore))
 toast.success('successfully')
}






// wishlist section 

const wishlist = () => {
 let wishlist = [];
 const storedWishList = localStorage.getItem('wishlist');
 if (storedWishList) {
  wishlist = JSON.parse(storedWishList)
 }
 return wishlist;
}