import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Incription from "./pages/Incription";
import Connection from "./pages/Connection";
import AnnoncementForm from "./pages/AnnoncementForm";
import Annoncement from "./pages/Annoncement";
import Profil from "./pages/Profil";
import InformationPerso from "./pages/InformationPerso";

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

{
  path: "/annonce",
  element: <AnnoncementForm />,
},

{
  path: "/annonce/:id",
  element: <Annoncement />,
},

{
  path: "/user/:id",
  element: <Profil />,
},

{
  path: "/user/:id/information",
  element: <InformationPerso />,
},

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
