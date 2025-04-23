import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import logo from "../../assets/logo.png";

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const { handleLogin } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="vh-100 d-flex flex-column justify-content-start align-items-center pt-3 px-2">
      {/* Logo */}
      <div className="logo-container">
        <img
          src={logo}
          alt="ITNetGROUP"
          className="logo-img"
        />
      </div>

      {/* Card */}
      <div className="card p-5 shadowCard w-100" style={{ maxWidth: '400px' }}>
        <h4 className="text-center mb-4">Acceso con tu cuenta</h4>

        <form onSubmit={onSubmit}>
          <div className="form-group mb-4">
            <label className="form-label">Acceso</label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-4">
            <div className="d-flex justify-content-between">
              <label className="form-label">Contraseña</label>
            </div>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="d-flex justify-content-between">
              <a href="#" className="small text-decoration-none">¿Olvidó su contraseña?</a>
            </div>
          </div>

          <div className="form-check mb-4">
            <input
              type="checkbox"
              className="form-check-input"
              id="remember"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="remember">Recuérdame</label>
          </div>

          <button type="submit" className="btn custom-btn w-100 mt-3 text-white">
            Iniciar sesión
          </button>

        </form>
      </div>

      {/* Mensaje final con salto de línea */}
      <p className="support-text mt-4">
        Hola 👋, Estamos aquí para ayudarte con cualquier consulta o problema técnico que puedas tener.
        <br />
        Nuestro equipo de soporte está listo para brindarte asistencia rápida y efectiva.
      </p>
    </div>
  );
};

export default Login;
