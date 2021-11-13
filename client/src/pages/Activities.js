import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
// add images to card

function Activities() {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card sx={{ maxWidth: 100 }}>
              <CardMedia
                component="img"
                height="140"
                image=""
                alt="profile image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Profile
                </Typography>
              </CardContent>
              <CardActions>
                <Link as={Link} to="/profile">
                  View
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ maxWidth: 100 }}>
              <CardMedia
                component="img"
                height="140"
                image=""
                alt="photos image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Photos
                </Typography>
              </CardContent>
              <CardActions>
                <Link as={Link} to="/photos">
                  Add
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ maxWidth: 100 }}>
              <CardMedia
                component="img"
                height="140"
                image=""
                alt="daily activities image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Daily Activities 
                </Typography>
              </CardContent>
              <CardActions>
                <Link as={Link} to="/dailyActivities">
                  Add 
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ maxWidth: 100 }}>
              <CardMedia
                component="img"
                height="140"
                image=""
                alt="food image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Food
                </Typography>
              </CardContent>
              <CardActions>
                <Link as={Link} to="/food">
                  Add
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ maxWidth: 100 }}>
              <CardMedia
                component="img"
                height="140"
                image=""
                alt="health info image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Health Information
                </Typography>
              </CardContent>
              <CardActions>
                <Link as={Link} to="/healthInfo">
                  Add 
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ maxWidth: 100 }}>
              <CardMedia
                component="img"
                height="140"
                image=""
                alt="notes mage"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Notes
                </Typography>
              </CardContent>
              <CardActions>
                <Link as={Link} to="/notes">
                  Add
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ maxWidth: 100 }}>
              <CardMedia
                component="img"
                height="140"
                image=""
                alt="incidents image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Incident Reports
                </Typography>
              </CardContent>
              <CardActions>
                <Link as={Link} to="/incidents">
                  Add
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default Activities;
