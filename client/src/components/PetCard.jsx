import PropTypes from "prop-types";

function PetCard({ pet, user }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{pet.petName}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{pet.breed}</h6>
        <p className="card-text">Âge : {pet.age}</p>
        <p className="card-text">Informations : {pet.information}</p>
        <p className="card-text">
          Propriétaire : {user.firstName} {user.lastName}
        </p>
      </div>
    </div>
  );
}

PetCard.propTypes = {
  pet: PropTypes.shape({
    petName: PropTypes.string,
    breed: PropTypes.string,
    age: PropTypes.number,
    information: PropTypes.string,
  }).isRequired,

  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
};

export default PetCard;
