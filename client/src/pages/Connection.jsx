import { Form } from "react-bootstrap";

function Connection() {
  return (
    <Form.Group>
      <Form.Control type="mail" placeholder="Email" />
      <Form.Control type="password" placeholder="Mot de passe" />
    </Form.Group>
  );
}

export default Connection;
