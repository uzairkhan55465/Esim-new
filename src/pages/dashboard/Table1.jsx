import React from 'react';
import { Card, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

// Generate random shop names
const generateRandomShop = () => {
  const shops = ['Shop 1', 'Shop 2', 'Shop 3', 'Shop 4', 'Shop 5'];
  const randomIndex = Math.floor(Math.random() * shops.length);
  return shops[randomIndex];
};

// Generate random times in AM/PM format
const generateRandomTime = () => {
  const hours = Math.floor(Math.random() * 12) + 1;
  const minutes = Math.floor(Math.random() * 60);
  const ampm = hours >= 12 ? 'PM' : 'AM';
  return `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
};

const Table1 = () => {
  // Sample data for Data Plan
  const rowsData = [
    { package: '2GB', time: generateRandomTime(), shop: generateRandomShop() },
    { package: '4GB', time: generateRandomTime(), shop: generateRandomShop() },
    { package: '5GB', time: generateRandomTime(), shop: generateRandomShop() },
    { package: '8GB', time: generateRandomTime(), shop: generateRandomShop() }
  ];

  return (
    <Card>
      <Typography variant='h5' className='m-4' style={{ backgroundColor: 'white', fontWeight: 'bold', padding: '10px' }}>
        Last 0 Sales
      </Typography>
      <TableContainer component={Paper} className='overflow-x-auto' style={{ backgroundColor: '#f0f0f0' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Data Plan</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Shop</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.package}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.shop}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default Table1;
