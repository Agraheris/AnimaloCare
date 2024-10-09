import propTypes from "prop-types"

function Cardcomponent({annoncement}) {

  return (
    <section>
      <h2>{annoncement.title}</h2>
      <p>{annoncement.pet_type}</p>
      <p>{annoncement.location}</p>
      <p>{annoncement.content}</p>
    </section>
  )
}

Cardcomponent.propTypes = {
  title : propTypes.string,
  pet_type : propTypes.number,
  location : propTypes.string,
  content : propTypes.string,
}.isRequired;

export default Cardcomponent