import { Form } from 'react-bootstrap';

// import CardComponent from '../components/Cardcomponent';

function AnnoncementForm() {
  return (
    <>
    <Form.Group>
    <Form.Control type='text' placeholder="Titre de l'annonce"/>
    <Form.Control type='texte' placeholder='Ville'/>
    <Form.Control type='date'/>
    <Form.Control type='date'/>
    <Form.Control type='text' placeholder='Détail de votre annonce'/>
    <Form.Control type='price'/>
    <Form.Range/>
    </Form.Group>
    <p>Prévisualisation</p>
    { /* <CardComponent /> */ }
    <button type='submit'>Confirmer</button>
    </>
  )
}

export default AnnoncementForm