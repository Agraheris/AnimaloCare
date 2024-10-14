import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

function NavigationBar() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const handleLogout = () => {
    setAuth("");
    navigate("/connexion");
  };

  const handleConnection = () => {
    navigate("/connexion");
  };

  const handleInscription = () => {
    navigate("/inscription");
  };

  const handleProfil = () => {
    navigate(`/profil/${auth}`);
  };

  const handleAnnonce = () => {
    navigate("/annonce");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>AnimaloCare</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link onClick={handleHome}>Accueil</Nav.Link>
            {auth ? (
              <>
                <Nav.Link onClick={handleProfil}>Mon Profil</Nav.Link>
                <Nav.Link onClick={handleAnnonce}>
                  Poster une nouvelle annonces
                </Nav.Link>
                <Nav.Link onClick={handleLogout}>Déconnexion</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link onClick={handleInscription}>Inscription</Nav.Link>
                <Nav.Link onClick={handleConnection}>Se connecter</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
