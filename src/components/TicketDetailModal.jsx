import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const TicketDetailModal = ({ ticket, open, onClose }) => {
  if (!ticket) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          backgroundColor: 'white',
          width: 400,
          margin: '100px auto',
          padding: 4,
          borderRadius: 2,
          boxShadow: 6,
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          Detalles del Ticket
        </Typography>
        <Typography mt={2}><strong>Tipo:</strong> {ticket.tipo}</Typography>
        <Typography><strong>Estado:</strong> {ticket.estado}</Typography>
        <Typography><strong>Descripción:</strong> {ticket.descripcion}</Typography>
        <Typography><strong>Usuario:</strong> {ticket.usuario}</Typography>
        <Typography mt={1} variant="caption" color="text.secondary">
          Creado: {new Date(ticket.fechaCreacion).toLocaleString()}
        </Typography>
      </Box>
    </Modal>
  );
};

export default TicketDetailModal;
