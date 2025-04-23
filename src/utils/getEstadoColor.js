const estadoColors = {
  'nuevo': '#4CAF50', // verde
  'en_proceso': '#FFA500', // naranja
  'en curso (asignada)': '#FFA500', // naranja
  'en curso (planificada)': '#FFA500', // naranja
  'en espera': '#FF9800', // ámbar
  'resueltas': '#607D8B', // gris azulado
  'cerrado': '#000000', // negro
};

export const getEstadoColor = (estado) => {
  return estadoColors[estado.toLowerCase()] || '#2196F3'; // azul por defecto
};
