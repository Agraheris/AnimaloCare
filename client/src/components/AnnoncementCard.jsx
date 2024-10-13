import PropTypes from "prop-types";
import usePetTypes from "../hooks/usePetTypes";

function AnnoncementCard({ annoncement }) {
  const petTypes = usePetTypes();
  
  return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{annoncement.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {petTypes.find(petType => petType.id === annoncement.petType)?.name}
          </h6>
          <p className="card-text">{annoncement.content}</p>
          <p className="card-text">{annoncement.location}</p>
          <p className="card-text">{annoncement.price}€/heure</p>
          <p className="card-date">{annoncement.startDate}</p>
          <p className="card-date">{annoncement.endDate}</p>
          <p className="card-text">
            {annoncement.firstName} {annoncement.lastName}
          </p>
        </div>
      </div>
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
