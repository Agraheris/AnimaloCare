import { Nav } from 'react-bootstrap';

import Logo1 from "../assets/images/Logo 1.png";

import "../assets/style/Navbar.css";

function Navbar() {
  return (
    <nav>
      <img src={Logo1} alt="logo AnimaloCare" />
      <h1>Animalocare</h1>
      <section className="navButton">
        <Nav.Link href='/connection'>
        <button type="button"> Inscription </button>
        </Nav.Link>
        <Nav.Link href='/inscription'>
        <button type="button"> Connection </button>
        </Nav.Link>
      </section>
    </nav>
  );
}

export default Navbar;
