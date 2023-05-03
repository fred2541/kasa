import { Link } from 'react-router-dom';
import logoKasa from 'src/assets/images/logo.jpg';



function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <img src={logoKasa} alt="Logo Kasa" />
        </Link>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
