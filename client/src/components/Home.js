import * as React from "react";
import Image from '../assets/daycarephoto.jpeg';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function Home() {
  return (
    <React.Fragment>
     <Card sx={{ maxWidth: 345, maxHeight:310 }}>
        <CardMedia
          component="img"
          height="140"
          image={Image}
          alt="daycare photo"
        />
        <CardContent>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
