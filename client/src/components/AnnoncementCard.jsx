import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import usePetTypes from "../hooks/usePetTypes";


function AnnoncementCard({ annoncement }) {
  const petTypes = usePetTypes();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };
  
  return (

      
<Card>
  <Card.Body>
    <Card.Title>{annoncement.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-body-secondary">
      {petTypes.find(petType => petType.id === annoncement.petType)?.name}
    </Card.Subtitle>
    <Card.Text>{annoncement.content}</Card.Text>
    <Card.Text>{annoncement.location}</Card.Text>
    <Card.Text>{annoncement.price}€/heure</Card.Text>
    <Card.Text>{formatDate(annoncement.startDate)}</Card.Text>
    <Card.Text>{formatDate(annoncement.endDate)}</Card.Text>
    <Card.Text>
      {annoncement.firstName} {annoncement.lastName}
    </Card.Text>
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
    startDate : PropTypes.string,
    endDate : PropTypes.string,
  }).isRequired,
};

export default AnnoncementCard;
