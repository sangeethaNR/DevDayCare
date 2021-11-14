import * as React from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
 
// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const cards = [1, 2, 3];

const theme = createTheme();

export default function Photos() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="relative">
        <Toolbar>
          Change this Navbar for Blossom Babies || DevDayCare
        </Toolbar>
      </AppBar>
      <main>
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
             Student Photos ...
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained"
              color = "secondary"
              startIcon={<AddAPhotoIcon/>}
              >Add Photo</Button>
              <Button variant="contained"
              color = "secondary"
              >View/Sort
                <Select> 
                  <MenuItem>Day</MenuItem>
                  <MenuItem>Month</MenuItem>
                  <MenuItem>Year</MenuItem>
                </Select>
              </Button>
              {/* <FormControl>
                <InputLabel>View/Sort</InputLabel>
                <Select> 
                  <MenuItem>Day</MenuItem>
                  <MenuItem>Month</MenuItem>
                  <MenuItem>Year</MenuItem>
              </Select>
              </FormControl> */}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '10%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Date of Photo
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Add Footer from Blossom Babies || DevDayCare
        </Typography>
        {/* <Copyright /> */}
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}