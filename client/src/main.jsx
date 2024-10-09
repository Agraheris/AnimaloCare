import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage";
import getAnnoncements from "./services/request";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    loader: async () => ({
      annoncements : await getAnnoncements()
    })
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
