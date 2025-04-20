import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ajusta la ruta según tu estructura
import perfil from '../assets/logo.png'; // O el avatar por defecto

export default function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logAuth(); // tu método para cerrar sesión
    navigate('/'); // o "/login"
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 shadow-sm">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="Logo" width="120" />
      </a>

      <div className="ms-auto dropdown">
        <i
          className="bi bi-person-circle fs-3 text-dark"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        />
        <ul className="dropdown-menu dropdown-menu-end">
          <li><button className="dropdown-item">Perfil</button></li>
          <li><button className="dropdown-item">Configuración</button></li>
          <li><hr className="dropdown-divider" /></li>
          <li>
            <button className="dropdown-item text-danger" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
