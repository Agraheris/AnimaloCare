import { Nav } from "react-bootstrap";

import Logo1 from "../assets/images/Logo 1.png";

import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <img src={Logo1} alt="logo AnimaloCare" />
      <h1>Animalocare</h1>
      <section className="navButton">
        <Nav.Link href="/inscription">
          <button type="button"> Inscription </button>
        </Nav.Link>
        <Nav.Link href="/connexion">
          <button type="button"> Connexion </button>
        </Nav.Link>
      </section>
    </nav>
  );
}

export default Navbar;
