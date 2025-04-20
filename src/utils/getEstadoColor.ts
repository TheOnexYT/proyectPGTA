export const getEstadoColor = (estado: string): string => {
    switch (estado.toLowerCase()) {
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
        return '#2196F3'; // azul por defecto
    }
  };
  