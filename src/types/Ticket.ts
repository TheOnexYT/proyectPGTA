// src/types/Ticket.ts
export interface Ticket {
  _id: string;
  usuario: string;
  tipo: string;
  descripcion: string;
  estado: 'nuevo' | 'en_proceso' | 'resuelto';
  fechaCreacion: string;
}

  