import { useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter, NavLink } from 'react-router-dom';

const NavBar = () => {
  const logoNavbar = './assest/logo-navbar.png';

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <li>
        <LinkRouter to="/">
          <img src={logoNavbar} />
        </LinkRouter>
      </li>
      <div
        className="navbar-menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink to="/authors">Autores</NavLink>
        </li>
        <li>
          <NavLink to="/genre">Generos</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <LinkRouter to="/search">Busqueda</LinkRouter>
        </li>
        <li>
          <LinkRouter to="/login">Login</LinkRouter>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
