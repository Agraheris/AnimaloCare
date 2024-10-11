import { useLoaderData } from "react-router-dom";

import Navbar from "../components/Navbar";
import Cardcomponent from "../components/Cardcomponent";

function Homepage() {
  const {annoncements} = useLoaderData();
  return (
    <>
      <Navbar />
      <div>
        {annoncements.map((annoncement) => (
          <Cardcomponent annoncement={annoncement} key={annoncement.id} />
        ))}
      </div>
    </>
  );
}

export default Homepage;
