import { useState } from 'react';
import { Ticket } from '../../types/Ticket'; // ajustá el path si cambia

export const useTickets = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const agregarTicket = (ticket: Omit<Ticket, '_id'>) => {
    const newTicket: Ticket = {
      _id: crypto.randomUUID(), // o Date.now().toString() si querés algo simple
      ...ticket,
    };
    setTickets((prev) => [...prev, newTicket]);
  };

  const eliminarTicket = (id: string) => {
    setTickets((prev) => prev.filter((ticket) => ticket._id !== id));
  };

  const editarTicket = (id: string, data: Omit<Ticket, '_id'>) => {
    setTickets((prev) =>
      prev.map((t) => (t._id === id ? { _id: id, ...data } : t))
    );
  };

  const getEstadoColor = (estado: string): string => {
    switch (estado) {
      case 'nuevo':
        return '#4CAF50'; // verde
      case 'en_proceso':
      case 'en curso (asignada)':
      case 'en curso (planificada)':
        return '#FFA500'; // naranja
      case 'en espera':
        return '#FF9800'; // ámbar
      case 'resueltas':
        return '#607D8B'; // gris azulado
      case 'cerrado':
        return '#000000'; // negro
      default:
        return '#2196F3'; // azul default
    }
  };
  

  return { tickets, agregarTicket, eliminarTicket,editarTicket, getEstadoColor };
};
