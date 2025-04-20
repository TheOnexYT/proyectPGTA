function createData(id, nombre, entidad, estado, fabricante, localizacion, tipo, modelo, ultimaAct, usuarioAlternativo) {
    return { id, nombre, entidad, estado, fabricante, localizacion, tipo, modelo, ultimaAct, usuarioAlternativo };
  }
  
  export const rows = [
    createData(1, 'Monitor Dell 24"', 'Departamento TI', 'Activo', 'Dell', 'Oficina Principal', 'LED', 'P2419H', '2023-11-05', 'usuario.ti01'),
    createData(2, 'Monitor Samsung Curvo', 'Recursos Humanos', 'Activo', 'Samsung', 'Sala RH', 'Curvo', 'C27F398', '2024-02-12', 'rh.curvo1'),
    createData(3, 'Monitor LG UltraWide', 'Marketing', 'Inactivo', 'LG', 'Oficina Creativa', 'UltraWide', '29WN600', '2024-01-23', 'creativo.lg29'),
    createData(4, 'Monitor HP 22"', 'Finanzas', 'Activo', 'HP', 'Contabilidad', 'LCD', '22f', '2023-10-15', 'finanzas.hp22'),
    createData(5, 'Monitor Acer 27"', 'Ingeniería', 'Activo', 'Acer', 'Laboratorio 2', 'LED', 'KA272', '2024-03-10', 'eng.acer27'),
  ];
  
  export const headCells = [
    { id: 'nombre', label: 'Nombre', disablePadding: true },
    { id: 'entidad', label: 'Entidad' },
    { id: 'estado', label: 'Estado' },
    { id: 'fabricante', label: 'Fabricantes' },
    { id: 'localizacion', label: 'Localizaciones' },
    { id: 'tipo', label: 'Tipo' },
    { id: 'modelo', label: 'Modelo' },
    { id: 'ultimaAct', label: 'Última actualización' },
    { id: 'usuarioAlternativo', label: 'Nombre de usuario alternativo' },
  ];
  