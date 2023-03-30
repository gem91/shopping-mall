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
import ProtectedRouter from 'pages/ProtectedRouter';
import ErrorComponent from './Components/ErrorComponent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { 
        index: true, 
        path: '/', 
        element: <Home />,
        errorElement: <ErrorComponent />,
    },
      { path: '/products', element: <AllProducts /> },
      { path: '/products/new', element: (
        <ProtectedRouter requireAdmin={true} >
          <NewProdut />
        </ProtectedRouter>
      ) },
      { path: '/products/:id', element: <ProdeuctDetail /> },
      { path: '/carts', element: (
        <ProtectedRouter>
          <MyCart />
        </ProtectedRouter>
      ) },
    ],
    errorElement: <NotFound />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
