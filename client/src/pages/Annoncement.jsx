import { useLoaderData } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Annoncement() {
  const { annoncement } = useLoaderData();
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{annoncement.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {annoncement.pet}
        </h6>
        <p className="card-text">{annoncement.content}</p>
        <p className="card-text">{annoncement.location}</p>
        <p className="card-text">{annoncement.price}€/heure</p>
        <Nav.Link href={`/user/${annoncement.user_id}`}>
          <p className="card-text">
            {annoncement.firstName} {annoncement.lastName}
          </p>
        </Nav.Link>
      </div>
    </div>
  );
}

export default Annoncement;
