import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { addUser } from "../services/request";

function Inscription() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: '',
    firstName :'',
    lastName : '',
    password : '',
    phoneNumber : '',
    location : '',
  })

  const [confirmationPassword, setConfirmationPassword] = useState("")

  const handleChangeEmail = (event) => {
    setUserData({ ...userData, email: event.target.value });
  }

  const handleChangeFirstName = (event) => {
    setUserData({ ...userData, firstName: event.target.value });
  }

  const handleChangeLastName = (event) => {
    setUserData({ ...userData, lastName: event.target.value });
  }

  const handleChangePassword = (event) => {
    setUserData({ ...userData, password: event.target.value });
  }

  const handleChangeConfirmationPassword = (event) => {
    setConfirmationPassword( event.target.value );
  }

  const handleChangePhoneNumber = (event) => {
    setUserData({ ...userData, phoneNumber: event.target.value });
  }

  const handleChangeLocation = (event) => {
    setUserData({ ...userData, location: event.target.value });
  }

  const handleSubmit = async () => {
    await addUser(userData)
    navigate("/connexion")
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="exemple@exemple.com" value={userData.email} onChange={handleChangeEmail} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>Prénom</Form.Label>
        <Form.Control type="text" placeholder="John" value={userData.firstName} onChange={handleChangeFirstName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" placeholder="Doe" value={userData.lastName} onChange={handleChangeLastName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Mon mot de passe" value={userData.password} onChange={handleChangePassword}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="confirmationPassword">
        <Form.Label>Confirmation mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Mon mot de passe" value={confirmationPassword} onChange={handleChangeConfirmationPassword}/>
        {userData.password !== confirmationPassword ?
        <Form.Text className="text-danger">
          Votre mot de passe est invalide
        </Form.Text>
        : " "
        }
      </Form.Group>

      <Form.Group className="mb-3" controlId="phoneNumber">
        <Form.Label>Téléphone</Form.Label>
        <Form.Control type="tel" placeholder="06 12 34 56 78"  value={userData.phoneNumber} onChange={handleChangePhoneNumber}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="location">
        <Form.Label>Ville</Form.Label>
        <Form.Control type="text" placeholder="Paris" value={userData.location} onChange={handleChangeLocation} />
      </Form.Group>
      
      <Button variant="primary" type="button" onClick={handleSubmit}>
        S'inscrire
      </Button>
    </Form>
  );
}


export default Inscription;
