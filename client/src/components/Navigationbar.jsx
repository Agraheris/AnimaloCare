import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Vérifie si le token est présent dans le localStorage lors du montage du composant
  useEffect(() => {
    const token = localStorage.getItem('auth'); // Remplace 'authToken' par le nom de ton token
    if (token) {
      setIsAuthenticated(true); // Si le token existe, l'utilisateur est authentifié
    }
  }, []);

  // Fonction de déconnexion (supprime le token)
  const handleLogout = () => {
    localStorage.removeItem('auth'); // Supprime le token du localStorage
    setIsAuthenticated(false); // Change l'état pour refléter la déconnexion
    window.location.href = '/'; // Redirige l'utilisateur après la déconnexion (facultatif)
  };

  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">AnimaloCare</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAuthenticated ? (
              <>
                {/* Liens visibles lorsque l'utilisateur est connecté */}
                <Nav.Link href="/profil">Mon Profil</Nav.Link>
                <Nav.Link href="/annonce">Poster une nouvelle annonces</Nav.Link>
                <Nav.Link onClick={handleLogout}>Déconnexion</Nav.Link>
              </>
            ) : (
              <>
                {/* Liens visibles lorsque l'utilisateur n'est pas connecté */}
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
