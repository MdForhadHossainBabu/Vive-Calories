import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import ErrorPage from './components/ErrorPage/ErrorPage'
import ListedBooks from './components/ListedBooks/ListedBooks'
import MainHome from './components/MainHome/MainHome'
import PageOfRead from './components/PageOfRead/PageOfRead'
import BookDetail from './components/BookDetail/BookDetail'
import ListedBook from './components/ListedBook/ListedBook'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <MainHome></MainHome>,
      },
      {
        path: '/listedbooks',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element:<ListedBooks></ListedBooks>
          },
        ]
      },
      {
        path: '/book/:id',
        element: <BookDetail></BookDetail>,
      },
      {
        path: '/pagestoread',
        loader:()=>fetch('/book.json'),
        element: <PageOfRead></PageOfRead>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>,
)
 