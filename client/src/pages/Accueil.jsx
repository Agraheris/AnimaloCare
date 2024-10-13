import { useLoaderData } from "react-router-dom";

import Navbar from "../components/Navbar";
import AnnoncementCard from "../components/AnnoncementCard";

function Accueil() {
  const { annoncements } = useLoaderData();
  return (
    <>
      <Navbar />
      <div>
        {annoncements.map((annoncement) => (
          <AnnoncementCard annoncement={annoncement} key={annoncement.id} />
        ))}
      </div>
    </>
  );
}

export default Accueil;
