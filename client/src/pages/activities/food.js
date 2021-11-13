import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

const rows: GridRowsProp = [
    { id: 1, col1: 'Jeremy', col2: 'No', col3: 'Yes'},
    { id: 2, col1: 'Alessa', col2: 'Yes', col3: 'Yes' },
    { id: 3, col1: 'Iyehn', col2: 'Yes', col3: 'Yes'},
  ];
  
  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Student', width: 150 },
    { field: 'col2', headerName: 'Breakfast', width: 150 },
    { field: 'col3', headerName: 'Lunch', width: 150 },
  ];

export default function Food() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Stack direction = "row" spacing={2}>
          </Stack>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
             Food Journal
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained"
              color = "secondary"
              startIcon={<FoodBankIcon/>}
              >Add Food</Button>
            </Stack>
            
            </Container>
            <DataGrid rows={rows} columns={columns} />
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          
        </Container>
      </main>
      
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          DevDayCare || Blossom Babies
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}