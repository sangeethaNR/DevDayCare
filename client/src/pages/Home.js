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
        <Card style={{backgroundColor:"#FAF9F6"}}>
        <CardContent style={{position:"absolute", top:"10%", left:"45%"}}>
          <Typography gutterBottom variant="h5" component="div"style={{color:"#ff87ab", fontSize:"5rem", fontFamily:"Comic Sans Ms", fontWeight:"bold"}}>
            Learn. Grow. Love
          </Typography>
          </CardContent>
          <CardMedia
          component="img"
          image={DayCare}
          alt="day care photo"
          height="100%"
        />
        <CardActions style={{position:"absolute", left:"75%", top:".1%"}} >
        <Button size="small" style={{color:'#0096c7', fontSize:"2rem",fontFamily:"Comic Sans Ms", fontWeight:"bold"}}>contact us</Button>
      </CardActions>
      </Card>
    );
  }

export default Home;