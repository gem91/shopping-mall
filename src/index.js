import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//conponents
import App from './App';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import AllProducts from 'pages/products/AllProducts';
import ProdeuctDetail from 'pages/products/ProdeuctDetail';
import NewProdut from 'pages/products/NewProduct';
import MyCart from 'pages/carts/MyCart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/products', element: <AllProducts /> },
      { path: '/products/new', element: <NewProdut /> },
      { path: '/products/:id', element: <ProdeuctDetail /> },
      { path: '/carts', element: <MyCart /> },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
