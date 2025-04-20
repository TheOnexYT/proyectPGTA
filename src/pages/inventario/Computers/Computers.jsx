import React from 'react';
import ComputersTable from './Computers_table';

export const Computers = () => {
  return (
    <section className="container py-5">
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


export default Computers