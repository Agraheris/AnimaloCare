import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Profil from "./pages/Profil";

import { getAnnoncement, getAnnoncements, getUser } from "./services/request";
import Accueil from "./pages/Accueil";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import CreationAnnonce from "./pages/CreationAnnonce";
import Annonce from "./pages/Annonce";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    loader: async () => ({
      annoncements: await getAnnoncements(),
    }),
  },
  {
    path: "/inscription",
    element: <Inscription />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/annonce",
    element: <CreationAnnonce />,
  },
  {
    path: "/annonce/:id",
    element: <Annonce />,
    loader: async ({ params }) => ({
      annoncement: await getAnnoncement(params.id),
    }),
  },
  {
    path: "/profil/:id",
    element: <Profil />,
    loader: async ({ params }) => ({
      user: await getUser(params.id),
    }),
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
