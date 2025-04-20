function createData(id, nombre, entidad, Estado, Fabricante, NoSerie, Tipo, Modelo, SO, Localizacion, UltimaAct, Procesador) {
    return { id, nombre, entidad, Estado, Fabricante, NoSerie, Tipo, Modelo, SO, Localizacion, UltimaAct, Procesador };
  }
  
  export const rows = [
    createData(1, 'PC gamer', 'Entidad 1', 'Activo', 'Fabricante A', '12345', 'Desktop', 'Modelo X', 'Windows 10', 'Oficina 1', '2023-01-01', 'Intel i7'),
    createData(2, 'Laptop', 'Entidad 2', 'Inactivo', 'Fabricante B', '67890', 'Laptop', 'Modelo Y', 'Ubuntu', 'Oficina 2', '2023-02-01', 'AMD Ryzen 5'),
    createData(3, 'Servidor', 'Entidad 3', 'Activo', 'Fabricante C', '11223', 'Server', 'Modelo Z', 'Windows Server', 'Data Center', '2023-03-01', 'Intel Xeon'),
  ];
  
  export const headCells = [
    { id: 'nombre', label: 'Nombre', disablePadding: true },
    { id: 'entidad', label: 'Entidad' },
    { id: 'Estado', label: 'Estado' },
    { id: 'Fabricante', label: 'Fabricante' },
    { id: 'NoSerie', label: 'No. Serie' },
    { id: 'Tipo', label: 'Tipo' },
    { id: 'Modelo', label: 'Modelo' },
    { id: 'SO', label: 'Sistema Operativo' },
    { id: 'Localizacion', label: 'Localización' },
    { id: 'UltimaAct', label: 'Última Actualización' },
    { id: 'Procesador', label: 'Procesador' },
  ];
  