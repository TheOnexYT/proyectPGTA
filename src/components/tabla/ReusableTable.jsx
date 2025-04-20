import {
    Box, Table, TableBody, TableCell, TableContainer, TableHead,
    TablePagination, TableRow, TableSortLabel, Toolbar, Typography,
    Paper, Checkbox, IconButton, Tooltip, TextField
  } from '@mui/material';
  import { alpha } from '@mui/material/styles';
  import DeleteIcon from '@mui/icons-material/Delete';
  import FilterListIcon from '@mui/icons-material/FilterList';
  import PropTypes from 'prop-types';
  import React from 'react';
  
  // HEAD DE LA TABLA
  function EnhancedTableHead({ onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, headCells }) {
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
              inputProps={{ 'aria-label': 'select all rows' }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align="left"
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  function EnhancedTableToolbar({ numSelected }) {
    return (
      <Toolbar sx={{
        pl: { sm: 2 }, pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}>
        {numSelected > 0 ? (
          <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
            {numSelected} seleccionado(s)
          </Typography>
        ) : (
          <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
            Listado de Computadoras
          </Typography>
        )}
        {numSelected > 0 ? (
          <Tooltip title="Eliminar">
            <IconButton><DeleteIcon /></IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filtrar lista">
            <IconButton><FilterListIcon /></IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  }
  
  export default function ReusableTable({ rows, headCells }) {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState(headCells[0].id);
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [filterText, setFilterText] = React.useState('');
  
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
  
    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelected = filteredRows.map((n) => n.id);
        setSelected(newSelected);
        return;
      }
      setSelected([]);
    };
  
    const handleClick = (id) => {
      const selectedIndex = selected.indexOf(id);
      let newSelected = [];
  
      if (selectedIndex === -1) {
        newSelected = [...selected, id];
      } else {
        newSelected = selected.filter((item) => item !== id);
      }
  
      setSelected(newSelected);
    };
  
    const handleChangePage = (event, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const handleFilterChange = (event) => {
      setFilterText(event.target.value);
      setPage(0);
    };
  
    function descendingComparator(a, b, orderBy) {
      if (b[orderBy] < a[orderBy]) return -1;
      if (b[orderBy] > a[orderBy]) return 1;
      return 0;
    }
  
    function getComparator(order, orderBy) {
      return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
    }
  
    const filteredRows = rows.filter((row) =>
      row.nombre.toLowerCase().includes(filterText.toLowerCase())
    );
  
    const visibleRows = filteredRows
      .sort(getComparator(order, orderBy))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  
    const isSelected = (id) => selected.indexOf(id) !== -1;
  
    return (
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
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
            <Table size="medium">
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={filteredRows.length}
                headCells={headCells}
              />
              <TableBody>
                {visibleRows.map((row) => {
                  const isItemSelected = isSelected(row.id);
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id + row.NoSerie}
                      selected={isItemSelected}
                      onClick={() => handleClick(row.id)}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" checked={isItemSelected} />
                      </TableCell>
                      {headCells.map((cell) => (
                        <TableCell key={cell.id}>{row[cell.id]}</TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={filteredRows.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    );
  }
  
  ReusableTable.propTypes = {
    rows: PropTypes.array.isRequired,
    headCells: PropTypes.array.isRequired,
  };
  