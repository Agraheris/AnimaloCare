import Logo1 from "../assets/images/Logo 1.png";

import "../assets/style/Navbar.css";

function Navbar() {
  return (
    <nav>
      <img src={Logo1} alt="logo AnimaloCare" />
      <h1>Animalocare</h1>
      <section className="navButton">
        <button type="button"> Inscription </button>
        <button type="button"> Connection </button>
      </section>
    </nav>
  );
}

export default Navbar;
