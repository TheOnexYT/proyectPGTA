import React, { useState } from 'react';
import { Box, Typography, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

import TicketModal from './TicketModal';
import TicketDetailModal from '../../components/TicketDetailModal';
import TicketCard from '../../components/TicketCard';
import { useTickets } from './useTickets';

const Tickets = () => {
  const navigate = useNavigate();
  const { tickets, agregarTicket, eliminarTicket, editarTicket } = useTickets();

  const [showModal, setShowModal] = useState(false);
  const [ticketEnEdicion, setTicketEnEdicion] = useState(null);
  const [detalleTicket, setDetalleTicket] = useState(null);

  const handleCrear = () => {
    setTicketEnEdicion(null);
    setShowModal(true);
  };

  const handleEditar = (ticket) => {
    setTicketEnEdicion(ticket);
    setShowModal(true);
  };

  const handleGuardar = (ticket) => {
    if (ticketEnEdicion && ticketEnEdicion._id === ticket._id) {
      return; // Si el ticket editado no ha cambiado, no hacemos nada.
    }

    if (ticketEnEdicion) {
      editarTicket(ticketEnEdicion._id, ticket);
    } else {
      agregarTicket(ticket);
    }
    setShowModal(false);
  };

  return (
    <Box sx={{ padding: 4 }}>
      {/* Botón de Volver con Bootstrap */}
      <div className="mb-3">
        <button
          className="btn btn-outline-secondary d-flex align-items-center gap-2"
          onClick={() => {
            // Fallback si no hay historial
            if (window.history.length > 2) {
              navigate(-1);
            } else {
              navigate('/');
            }
          }}
        >
          <i className="bi bi-arrow-left"></i> Volver
        </button>
      </div>

      {/* Título */}
      <Typography variant="h4" textAlign="center" fontWeight={700} gutterBottom>
        🎟️ Tickets
      </Typography>

      {/* Cards de tickets */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        {tickets.map((t) => (
          <TicketCard
            key={t._id}
            ticket={t}
            onView={(ticket) => setDetalleTicket(ticket)}
            onEdit={handleEditar}
            onDelete={eliminarTicket}
          />
        ))}
      </Box>

      {/* Botón flotante para crear ticket */}
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleCrear}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          boxShadow: 4,
        }}
      >
        <AddIcon />
      </Fab>

      {/* Modal de Crear/Editar */}
      <TicketModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleGuardar}
        ticket={ticketEnEdicion}
      />

      {/* Modal de Detalles */}
      <TicketDetailModal
        ticket={detalleTicket}
        open={!!detalleTicket}
        onClose={() => setDetalleTicket(null)}
      />
    </Box>
  );
};

export default Tickets;
