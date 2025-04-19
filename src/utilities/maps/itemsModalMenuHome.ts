export const menuItems = [
    { 
        nombre: 'Inventario', 
        icono: 'bi-house', 
        tipo: 'modal', 
        subItems: [
            { nombre: 'Añadir usuario', icono: 'bi-person-plus' },
            { nombre: 'Ver usuarios', icono: 'bi-person-lines-fill' },
            { nombre: 'Modificar usuario', icono: 'bi-pencil' },
            { nombre: 'Computers', icono: 'bi-laptop' },
            { nombre: 'Monitores', icono: 'bi-display' },
            { nombre: 'Programas', icono: 'bi-file-earmark-code' },
            { nombre: 'Network Devices', icono: 'bi-router' },
            { nombre: 'Peripherals', icono: 'bi-usb-drive' },
            { nombre: 'Printers', icono: 'bi-printer' },
            { nombre: 'Consumibles', icono: 'bi-currency-dollar' },
            { nombre: 'Phones', icono: 'bi-phone' },
            { nombre: 'Racks', icono: 'bi-hdd' },
            { nombre: 'Enclosures', icono: 'bi-house-door' },
            { nombre: 'PDUs', icono: 'bi-plug' },
            { nombre: 'Passive Devices', icono: 'bi-toggle-off' },
            { nombre: 'Cables', icono: 'bi-plug' },
            { nombre: 'Tarjetas SIM', icono: 'bi-sim' },
            { nombre: 'Global', icono: 'bi-globe' }
        ]
        
    },
    { 
        nombre: 'Tickets', 
        icono: 'bi-ticket-detailed', 
        tipo: 'link', 
        url: '/tickets' 
    },
    { 
        nombre: 'Documentación', 
        icono: 'bi-file-earmark-richtext', 
        tipo: 'link', 
        url: '/documentacion' 
    },
    { 
        nombre: 'Gestión Usuarios', 
        icono: 'bi-person-gear',
        tipo: 'link', 
        url: '/informes' 
    },
    { 
        nombre: 'Informes', 
        icono: 'bi-info-circle', 
        tipo: 'link', 
        url: '/informes' 
    },
];
