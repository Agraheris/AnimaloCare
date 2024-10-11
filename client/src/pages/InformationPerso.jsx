import { Form } from 'react-bootstrap';

function InformationPerso() {
  return (
    <Form.Group>
    <Form.Control type='text' placeholder='Prénom'/>
    <Form.Control type='text' placeholder='Nom'/>
    <Form.Control type='mail' placeholder='Email'/>
    <Form.Control type='number' placeholder='Numéro de téléphone'/>
    <Form.Control type='text' placeholder='Ville'/>
  </Form.Group>
  )
}

export default InformationPerso