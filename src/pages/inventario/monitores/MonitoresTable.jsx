import React from 'react';
import ReusableTable from '../../../components/tabla/ReusableTable';
import { rows, headCells } from '../../../services/monitores/monitoresService';

export default function MonitoresTable() {
  return <ReusableTable rows={rows} headCells={headCells} />;
}
