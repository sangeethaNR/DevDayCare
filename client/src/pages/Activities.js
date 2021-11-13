import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function Activities() {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Link as={Link} to="/profile">
              Profile
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link as={Link} to="/photos">
              Photos
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link as={Link} to="/dailyActivities">
              Daily Activities
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link as={Link} to="/food">
              Food
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link as={Link} to="/healthInfo">
              Health Information
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link as={Link} to="/notes">
              Notes
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link as={Link} to="/incidents">
              Incidents
            </Link>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default Activities;
