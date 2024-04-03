import toast from 'react-hot-toast';

export const getData = () => {
  let read = [];
  const storedBook = localStorage.getItem('read book');
  if (storedBook) {
    read = JSON.parse(storedBook);
  }
  return read;
};

export const saveData = read => {
  let readMore = getData();
  // const isExisted = readMore.find(r => r.bookId === readMore.bookId);
  const isExisted = readMore.find(R => R.bookId === read.bookId);
  if (isExisted) {
   toast.error('already done');
   return;
  }
  readMore.push(read);
  localStorage.setItem('read book', JSON.stringify(readMore));
  toast.success('successfully');
};

// wishlist section

export const getWishlist = () => {
  let wishlist = [];
  const storedWishList = localStorage.getItem('wishlist');
  if (storedWishList) {
    wishlist = JSON.parse(storedWishList);
  }
  return wishlist;
};

export const saveWishlist = wish => {
 let wishlistMore = getWishlist();
 const isExisted = wishlistMore.find(w => w.bookId === wish.bookId);
 if (isExisted) {
  toast.error('already added to WishList');
  return;
 }
 wishlistMore.push(wish);
 localStorage.setItem('wishlist', JSON.stringify(wishlistMore));
 toast.success('added successfully')
}