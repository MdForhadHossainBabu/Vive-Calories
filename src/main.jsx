import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root'
import Banner from './components/Banner/Banner'
import ListedBooks from './components/ListedBooks/ListedBooks'
import BookDetails from './components/BookDetails/BookDetails'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Read from './components/Read/Read'
import Wishlist from './components/Wishlist/Wishlist'
import { Toaster } from 'react-hot-toast'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Banner></Banner>,
      },
      {
        path: '/listBooks',
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <Read />,
          },
          {
            path: 'wishlist',
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path: '/book/:bookId',
        loader: () => fetch(`/book.json`),
        element: <BookDetails></BookDetails>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}></RouterProvider>
    <Toaster/>
  </>,
)
 