import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Incription from "./pages/Incription";
import Connection from "./pages/Connection";

import getAnnoncements from "./services/request";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    loader: async () => ({
      annoncements : await getAnnoncements()
    })
  },
{
  path: "/inscription",
  element: <Incription />,
},

{
  path: "/connection",
  element: <Connection />,
},


]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
