import { useLoaderData } from "react-router-dom"

function Annoncement() {
  const { annoncement } = useLoaderData();
  console.info(annoncement.title)
  return (
    <div className="card" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">{annoncement.title}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">{annoncement.pet}</h6>
      <p className="card-text">{annoncement.content}</p>
      <p className="card-text">{annoncement.location}</p>
      <p className="card-text">{annoncement.price}€/heure</p>
    </div>
  </div>
  )
}

export default Annoncement