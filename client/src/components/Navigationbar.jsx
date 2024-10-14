import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';


function NavigationBar() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const handleLogout = () => {
    setAuth("")
    navigate("/connexion")
  };

  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">AnimaloCare</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {auth ? (
              <>

                <Nav.Link href="/profil">Mon Profil</Nav.Link>
                <Nav.Link href="/annonce">Poster une nouvelle annonces</Nav.Link>
                <Nav.Link onClick={handleLogout}>Déconnexion</Nav.Link>
              </>
            ) : (
              <>

                <Nav.Link href="/inscription">Inscription</Nav.Link>
                <Nav.Link href="/connexion">Se connecter</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
