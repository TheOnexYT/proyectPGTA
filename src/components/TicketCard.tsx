import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Ticket } from '../types/Ticket';
import { getEstadoColor } from '../utils/getEstadoColor'; // asegurate que el path sea correcto

interface Props {
  ticket: Ticket;
  onView: (ticket: Ticket) => void;
  onEdit: (ticket: Ticket) => void;
  onDelete: (id: string) => void;
}

const TicketCard: React.FC<Props> = ({ ticket, onView, onEdit, onDelete }) => {
  const colorEstado = getEstadoColor(ticket.estado);

  return (
    <Card
      onClick={() => onView(ticket)}
      sx={{
        maxWidth: 400,
        width: '100%',
        position: 'relative',
        boxShadow: 5,
        cursor: 'pointer',
        overflow: 'hidden',
        backgroundColor: '#fdfdfd',
        borderRadius: '12px',
        borderLeft: `6px solid ${colorEstado}`,
        '&:hover': {
          transform: 'scale(1.01)',
          transition: '0.2s ease-in-out',
        },
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            <span style={{ color: colorEstado, marginRight: 8 }}>●</span>
            {ticket.tipo.toUpperCase()}
          </Typography>
          <Box onClick={(e) => e.stopPropagation()}>
            <IconButton size="small" onClick={() => onEdit(ticket)}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" onClick={() => onDelete(ticket._id)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        <Divider sx={{ my: 1, borderStyle: 'dashed' }} />

        <Typography variant="body2" mb={1}>
          {ticket.descripcion}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          Estado: {ticket.estado.replace('_', ' ')}
          <br />
          Usuario: {ticket.usuario}
          <br />
          Fecha: {new Date(ticket.fechaCreacion).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TicketCard;
