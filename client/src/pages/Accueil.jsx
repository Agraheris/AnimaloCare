import { useLoaderData } from "react-router-dom";
import "./Accueil.css";

import { Nav } from "react-bootstrap";
import AnnoncementCard from "../components/AnnoncementCard";

function Accueil() {
  const { annoncements } = useLoaderData();
  return (
    <div className="annoncements">
      {annoncements.map((annoncement) => (
        <Nav.Link key={annoncement.id} href={`/annonce/${annoncement.id}`}>
          <AnnoncementCard annoncement={annoncement} />
        </Nav.Link>
      ))}
    </div>
  );
}

export default Accueil;
