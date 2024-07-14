import React from 'react';
import { Card, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const TableComponent = () => {
  const rowsData = [];

  return (
    <Card>
      <Typography variant='h5' className='mbe-4 m-4' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: '10px' }}>
        <span>
          <strong>Today Sales</strong>
        </span>
        <span>
          0
        </span>
      </Typography>
      <TableContainer component={Paper} className='overflow-x-auto' style={{ backgroundColor: '#f0f0f0' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Data Plan</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Growth</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.dataplan}</TableCell>
                <TableCell>{row.total}</TableCell>
                <TableCell>{row.growth}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default TableComponent;
