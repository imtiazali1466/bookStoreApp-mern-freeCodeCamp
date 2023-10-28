import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import CreateBooks from './pages/CreateBooks.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import CreateBooks from './pages/CreateBooks.jsx';
import DeleteBook from './pages/DeleteBook.jsx';
import EditBook from './pages/EditBook.jsx';
import Home from './pages/Home.jsx';
import ShowBook from './pages/ShowBook.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/books/create",
    element: <CreateBooks/>
  },
  {
    path: "/books/details/:id",
    element: <ShowBook/>,
  },
  {
    path: "/books/edit/:id",
    element: <EditBook/>,
  },
  {
    path: "/books/delete/:id",
    element: <DeleteBook/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
