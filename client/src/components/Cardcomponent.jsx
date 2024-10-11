import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardComponent({ annoncement }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{annoncement.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{annoncement.type_name}</h6>
        <p className="card-text">{annoncement.content}</p>
        <p className="card-text">{annoncement.location}</p>
        <p className="card-text">{annoncement.price}/heure</p>

      </div>
    </div>
  );
}

CardComponent.propTypes = {
  annoncement: PropTypes.shape({
    title: PropTypes.string,
    type_name: PropTypes.string,
    location: PropTypes.string,
    content: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CardComponent;
