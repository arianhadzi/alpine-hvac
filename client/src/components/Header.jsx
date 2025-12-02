import "./Header.css";
import logo from "../assets/react.svg";

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">

        {/* left logo */}
        <div className="header-left">
          <a href="#home" className="header-logo">
            <img src={logo} alt="company logo" />
          </a>
        </div>

        {/* middle */}
        <nav className="header-nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#airconditioning">Air Conditioning</a>
          <a href="#heating">Heating</a>
        </nav>

        {/* right */}
        <div className="header-actions">
          <a href="#request-service" className="header-cta">
            Request Service
          </a>
        </div>

      </div>
    </header>
  );
}

export default Header;
