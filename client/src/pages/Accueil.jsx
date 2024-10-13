import { useLoaderData } from "react-router-dom";

import { Nav } from "react-bootstrap";
import Navbar from "../components/Navbar";
import AnnoncementCard from "../components/AnnoncementCard";

function Accueil() {
  const { annoncements } = useLoaderData();
  return (
    <>
      <Navbar />
      <div>
        {annoncements.map((annoncement) => (
          <Nav.Link key={annoncement.id} href={`/annonce/${annoncement.id}`}>
          <AnnoncementCard annoncement={annoncement}  />
          </Nav.Link>
        ))}
      </div>
    </>
  );
}

export default Accueil;
