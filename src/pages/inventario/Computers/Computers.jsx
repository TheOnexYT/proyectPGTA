import React from 'react';
import { useNavigate } from 'react-router-dom';
import ComputersTable from './ComputersTable';

export const Computers = () => {
  const navigate = useNavigate();

  return (
    <section className="container py-5">
      {/* Botón de ir atrás */}
      <div className="mb-3">
        <button
          className="btn btn-outline-secondary d-flex align-items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <i className="bi bi-arrow-left"></i> Volver
        </button>
      </div>

      {/* Título de la sección */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">📊 Gestión de Equipos de Cómputo</h2>
        <p className="text-muted">Consulta, edita y organiza la información de los computadores registrados.</p>
      </div>

      {/* Card contenedora para estilo moderno */}
      <div className="card shadow-sm border-0 rounded-4">
        <div className="card-body">
          <ComputersTable />
        </div>
      </div>
    </section>
  );
};

export default Computers;
