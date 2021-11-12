import DayCare from '../assets/daycarephoto.jpeg'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Home() {
    return (
        <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"style={{display:'flex', justifyContent: "center", color:"pink", fontSize:"5rem"}}>
            Blossom Babies
          </Typography>
          </CardContent>
          <CardMedia
          component="img"
          image={DayCare}
          alt="day care photo"
          style={{borderRadius:"3rem"}}
          height="350px"
        />
        <CardActions style={{display:"flex", justifyContent:"center"}} >
        <Button size="small" style={{color:'lightblue', fontSize:"2rem"}}>Contact Us</Button>
      </CardActions>
      </Card>
    );
  }

export default Home;