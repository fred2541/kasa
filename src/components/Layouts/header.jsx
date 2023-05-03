import { Link, NavLink } from 'react-router-dom';
import logoKasa from 'src/assets/images/logo.jpg';



const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <img src={logoKasa} alt="Logo Kasa" />
        </Link>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
