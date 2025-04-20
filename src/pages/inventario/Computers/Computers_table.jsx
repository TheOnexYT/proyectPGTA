import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TextField from '@mui/material/TextField';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

function createData(id, nombre, entidad, Estado, Fabricante, NoSerie, Tipo, Modelo, SO, Localizacion, UltimaAct, Procesador) {
  return { id, nombre, entidad, Estado, Fabricante, NoSerie, Tipo, Modelo, SO, Localizacion, UltimaAct, Procesador };
}


const rows = [
  createData(1, 'PC gamer', 'Entidad 1', 'Activo', 'Fabricante A', '12345', 'Desktop', 'Modelo X', 'Windows 10', 'Oficina 1', '2023-01-01', 'Intel i7'),
  createData(2, 'Laptop', 'Entidad 2', 'Inactivo', 'Fabricante B', '67890', 'Laptop', 'Modelo Y', 'Ubuntu', 'Oficina 2', '2023-02-01', 'AMD Ryzen 5'),
  createData(3, 'Servidor', 'Entidad 3', 'Activo', 'Fabricante C', '11223', 'Server', 'Modelo Z', 'Windows Server', 'Data Center', '2023-03-01', 'Intel Xeon'),
  createData(4, 'Workstation', 'Entidad 4', 'Mantenimiento', 'Fabricante D', '44556', 'Workstation', 'Modelo W', 'macOS', 'Oficina 3', '2023-04-01', 'Apple M1'),
  createData(5, 'PC de oficina', 'Entidad 5', 'Activo', 'Fabricante E', '78901', 'Desktop', 'Modelo V', 'Windows 11', 'Oficina 4', '2023-05-01', 'Intel i5'),
  createData(14, 'Laptop de trabajo', 'Entidad 6', 'Inactivo', 'Fabricante F', '23456', 'Laptop', 'Modelo U', 'Linux Mint', 'Oficina 5', '2023-06-01', 'Intel i3'),
  createData(1, 'PC gamer', 'Entidad 1', 'Activo', 'Fabricante A', '12345', 'Desktop', 'Modelo X', 'Windows 10', 'Oficina 1', '2023-01-01', 'Intel i7'),
  createData(2, 'Laptop', 'Entidad 2', 'Inactivo', 'Fabricante B', '67890', 'Laptop', 'Modelo Y', 'Ubuntu', 'Oficina 2', '2023-02-01', 'AMD Ryzen 5'),
  createData(3, 'Servidor', 'Entidad 3', 'Activo', 'Fabricante C', '11223', 'Server', 'Modelo Z', 'Windows Server', 'Data Center', '2023-03-01', 'Intel Xeon'),
  createData(4, 'Workstation', 'Entidad 4', 'Mantenimiento', 'Fabricante D', '44556', 'Workstation', 'Modelo W', 'macOS', 'Oficina 3', '2023-04-01', 'Apple M1'),
  createData(5, 'PC de oficina', 'Entidad 5', 'Activo', 'Fabricante E', '78901', 'Desktop', 'Modelo V', 'Windows 11', 'Oficina 4', '2023-05-01', 'Intel i5'),
  createData(6, 'Laptop de trabajo', 'Entidad 6', 'Inactivo', 'Fabricante F', '23456', 'Laptop', 'Modelo U', 'Linux Mint', 'Oficina 5', '2023-06-01', 'Intel i3'),

];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  { id: 'nombre', numeric: false, disablePadding: true, label: 'Nombre' },
  { id: 'entidad', numeric: false, disablePadding: false, label: 'Entidad' },
  { id: 'Estado', numeric: false, disablePadding: false, label: 'Estado' },
  { id: 'Fabricante', numeric: false, disablePadding: false, label: 'Fabricante' },
  { id: 'NoSerie', numeric: false, disablePadding: false, label: 'No. Serie' },
  { id: 'Tipo', numeric: false, disablePadding: false, label: 'Tipo' },
  { id: 'Modelo', numeric: false, disablePadding: false, label: 'Modelo' },
  { id: 'SO', numeric: false, disablePadding: false, label: 'Sistema Operativo' },
  { id: 'Localizacion', numeric: false, disablePadding: false, label: 'Localización' },
  { id: 'UltimaAct', numeric: false, disablePadding: false, label: 'Última Actualización' },
  { id: 'Procesador', numeric: false, disablePadding: false, label: 'Procesador' },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            slotProps={{ input: { 'aria-label': 'select all rows' } }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} seleccionado(s)
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Listado de Computadoras
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Eliminar">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filtrar lista">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function ComputersTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('nombre');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [filterText, setFilterText] = React.useState(''); // Estado para el filtro

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value); // Actualiza el texto del filtro
    setPage(0); // Reinicia la paginación al aplicar un filtro
  };

  // Filtra las filas según el texto ingresado
  const filteredRows = rows.filter((row) =>
    row.nombre.toLowerCase().includes(filterText.toLowerCase())
  );

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

  const visibleRows = filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        {/* Campo de texto para filtrar */}
        <Box sx={{ p: 2 }}>
          <TextField
            label="Filtrar por nombre"
            variant="outlined"
            fullWidth
            value={filterText}
            onChange={handleFilterChange}
          />
        </Box>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={filteredRows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={() => handleClick(row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        slotProps={{
                          input: { 'aria-labelledby': labelId },
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      {row.nombre}
                    </TableCell>
                    <TableCell align="left">{row.entidad}</TableCell>
                    <TableCell align="left">{row.Estado}</TableCell>
                    <TableCell align="left">{row.Fabricante}</TableCell>
                    <TableCell align="left">{row.NoSerie}</TableCell>
                    <TableCell align="left">{row.Tipo}</TableCell>
                    <TableCell align="left">{row.Modelo}</TableCell>
                    <TableCell align="left">{row.SO}</TableCell>
                    <TableCell align="left">{row.Localizacion}</TableCell>
                    <TableCell align="left">{row.UltimaAct}</TableCell>
                    <TableCell align="left">{row.Procesador}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={headCells.length + 1} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 30, 35, 50]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_, newPage) => handleChangePage(newPage)}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
