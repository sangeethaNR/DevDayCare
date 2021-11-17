import DayCare from '../assets/daycarephoto.jpeg'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Home() {
    return (
        <React.Fragment>
        <Card style={{backgroundColor:"#FAF9F6"}}>
        <CardContent style={{position:"absolute", top:"36%", left:"42%"}}>
          <Typography gutterBottom variant="h5" component="div"style={{color:"#ff758f", fontSize:"5rem", fontFamily:"Comic Sans Ms", fontWeight:"bold"}}>
            Learn. Grow. Love.
          </Typography>
          </CardContent>
          <CardMedia
          component="img"
          image={DayCare}
          alt="day care photo"
          height="500px"
        />
        <CardActions style={{position:"absolute", left:"75%", top:"1%"}} >
        <Link href="https://github.com/sangeethaNR/DevDayCare" size="small" style={{color:'#0096c7', fontSize:"2rem",fontFamily:"Comic Sans Ms", fontWeight:"bold", textDecoration:"none"}}>contact us</Link>
      </CardActions>
      </Card >
      <Card style={{backgroundColor:"#fae0e4", borderTop:"1rem solid #FAF9F6", borderBottom:"1rem solid #FAF9F6"}}>
      <CardContent style={{padding:"5rem"}}>
        <Typography gutterBottom variant="h5" component="div" style={{color:'#0096c7', fontSize:"2rem",fontFamily:"Comic Sans Ms", fontWeight:"bold"}}>
            About Us
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{color:'#0096c7', fontSize:"1.5rem",fontFamily:"Comic Sans Ms"}}>
          Blossom Babies is an application that allows your daycare to track its students and teachers with ease.  The teacher will gather data on the daily activities of each student and other pertinent information.  Our goal is to increase the data at daycares so students and teachers can thrive.
        </Typography>
        </CardContent>
      </Card>
      </React.Fragment>
    );
  }

export default Home;