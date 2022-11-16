import React from 'react';
import ReactDOM from 'react-dom/client';
import Place from './Place';
import Page from "./App";
import Popup from './Connectwallet';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },

  {
    path: "/Place",
    element: <Place />,
  },

  {
    path: "/Connectwallet",
    element: <Popup />,
  },

  {
    path: "/index",
    element: <display />,
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
