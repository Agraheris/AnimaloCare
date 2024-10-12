import { Form } from 'react-bootstrap';

function Incription() {
  return (
    <Form.Group>
      <Form.Control type='text' placeholder='Prénom'/>
      <Form.Control type='text' placeholder='Nom'/>
      <Form.Control type='mail' placeholder='Email'/>
      <Form.Control type='password' placeholder='Mot de passe'/>
      <Form.Control type='password' placeholder='Confirmer Mot de passe'/>
      <Form.Control type='text' placeholder='Numéro de téléphone'/>
      <Form.Control type='text' placeholder='Ville'/>
    </Form.Group>
  )
}

export default Incription