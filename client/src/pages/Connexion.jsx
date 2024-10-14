import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../services/request";
import { useAuth } from "../hooks/AuthContext";
import "./Inscription.css";

function Connexion() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChangeEmail = (event) => {
    setUserData({ ...userData, email: event.target.value });
  };

  const handleChangePassword = (event) => {
    setUserData({ ...userData, password: event.target.value });
  };

  const handleSubmit = async () => {
    const result = await login(userData);
    setAuth(result.id);
    navigate(`/profil/${result.id}`);
  };

  return (
    <div className="connexion">
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="exemple@exemple.com"
            value={userData.email}
            onChange={handleChangeEmail}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="Mon mot de passe"
            value={userData.password}
            onChange={handleChangePassword}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleSubmit}>
          Se connecter
        </Button>
      </Form>
    </div>
  );
}

export default Connexion;
