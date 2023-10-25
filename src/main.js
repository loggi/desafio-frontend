import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home';
import Order from './pages/order/';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/order/:trackingCode",
    element: <Order />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);