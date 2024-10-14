import { useLoaderData } from "react-router-dom";
import "./Accueil.css";

import AnnoncementCard from "../components/AnnoncementCard";

function Accueil() {
  const { annoncements } = useLoaderData();
  return (
    <div className="annoncements">
      {annoncements.map((annoncement) => (
        <AnnoncementCard key={annoncement.id} annoncement={annoncement} />
      ))}
    </div>
  );
}

export default Accueil;
