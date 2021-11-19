import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
 
const cards = [1, 2, 3];

const theme = createTheme();
export default function Profile() {
  return (
    <ThemeProvider theme={theme}>
      <main style={{ border: "dotted pink 2vw", height: "100vh", padding:'2rem'}}>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              fontFamily="Comic Sans Ms"
              gutterBottom
            >
                 {/* Current Student Name + Profile */}
                 Student Profile
            </Typography>
          </Container>
        </Box>
        <Container  maxWidth="md" >
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '93%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '10%',
                    }}
                    image="https://i.pinimg.com/originals/de/f6/06/def6061b9679d31551040c506dfec8c8.jpg"
                    alt="child Photo"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" noWrap="false" style={{fontSize:"1rem", fontFamily:"Comic Sans Ms"}}>
                      Jane Doe                 
                      <br />
                      Birthdate: 02/28/2014
                      <br />
                      Allergy: Pine Nuts
                      <br />
                      Potty Trained: Yes
                      <br />
                      Class: Shark
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '93%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnU8HTonl-fPgwJnsnfdZ_oJ0v4Oifw0ZzfA&usqp=CAU"
                    alt="Parents Photo"
                  
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" style={{fontSize:"1rem", fontFamily:"Comic Sans Ms"}}>
                      John Doe
                      <br />
                      Relation: Father
                      <br />
                      Email: Jdoe@email.com
                      <br />
                      Cell: (619) 867-5309
                      <br />
                      Address: 123 Material Ct
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '93%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '10%',
                    }}
                    image="data:image/png;base64,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"
                    alt="In Case of Emergency"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" style={{fontSize:"1rem", fontFamily:"Comic Sans Ms"}}>
                      Emergency Contact
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      
      {/* End footer */}
    </ThemeProvider>
  );
}