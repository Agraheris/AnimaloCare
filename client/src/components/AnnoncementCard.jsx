import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import usePetTypes from "../hooks/usePetTypes";
import "../pages/Accueil.css";

function AnnoncementCard({ annoncement }) {
  const petTypes = usePetTypes();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <Card style={{ width: "18rem" }} className="card">
      <Card.Body>
        <Card.Title>{annoncement.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-body-secondary">
          {petTypes.find((petType) => petType.id === annoncement.petType)?.name}
        </Card.Subtitle>
        <Card.Text>{annoncement.content}</Card.Text>
        <Card.Text>{annoncement.location}</Card.Text>
        <Card.Text>{annoncement.price}€/heure</Card.Text>
        <Card.Text>{formatDate(annoncement.startDate)}</Card.Text>
        <Card.Text>{formatDate(annoncement.endDate)}</Card.Text>
        <Card.Text>
          {annoncement.firstName} {annoncement.lastName}
        </Card.Text>
        <Button href={`/annonce/${annoncement.id}`} variant="outline-primary">
          {" "}
          Voir l'annonce{" "}
        </Button>
      </Card.Body>
    </Card>
  );
}

AnnoncementCard.propTypes = {
  annoncement: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    petType: PropTypes.number,
    location: PropTypes.string,
    content: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    price: PropTypes.number,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }).isRequired,
};

export default AnnoncementCard;
