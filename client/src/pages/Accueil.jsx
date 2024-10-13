import { useLoaderData } from "react-router-dom";

import { Nav } from "react-bootstrap";
import AnnoncementCard from "../components/AnnoncementCard";

function Accueil() {
  const { annoncements } = useLoaderData();
  return (
      <div>
        {annoncements.map((annoncement) => (
          <Nav.Link key={annoncement.id} href={`/annonce/${annoncement.id}`}>
          <AnnoncementCard annoncement={annoncement}  />
          </Nav.Link>
        ))}
      </div>
  );
}

export default Accueil;
