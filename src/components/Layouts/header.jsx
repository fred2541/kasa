import { NavLink } from 'react-router-dom';
import logoKasa from 'src/assets/images/logo.jpg';



const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/">
          <img src={logoKasa} alt="Logo Kasa" />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
