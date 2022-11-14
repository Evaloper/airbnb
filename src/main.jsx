import React from 'react'
import ReactDOM from 'react-dom/client'
import Place from './Place'
import Page from "./App"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },

  {
    path: "/Place",
    element: <Place />,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
