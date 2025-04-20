import React from 'react';
import ReusableTable from '../../../components/tabla/ReusableTable';
import { rows, headCells } from '../../../services/Computers/computersService';

export default function ComputersTable() {
  return <ReusableTable rows={rows} headCells={headCells} />;
}
