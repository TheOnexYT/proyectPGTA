import React from 'react';
import { useAuthStore } from '../stores/useAuthStore';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";

import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar: React.FC = () => {
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
            <div className="container-fluid">
                {/* Logo + nombre app */}
                <div className="navbar-brand d-flex align-items-center gap-2">
                    <img src={logo} alt="Logo" height="40" />
                </div>

                {/* Collapse toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                {/* Contenido colapsable */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
                    {user && (
                        <ul className="navbar-nav d-flex align-items-center gap-3">
                            <li className="nav-item">
                                <span className="nav-link disabled">
                                    👤 {user.name}
                                </span>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
                                    Cerrar sesión
                                </button>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
