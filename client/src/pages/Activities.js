import * as React from "react";
import { Link } from "react-router-dom";

function Activities() {
  return (
    <React.Fragment>
      <Link as={Link} to="/profile">
        Profile
      </Link>
      <Link as={Link} to="/photos">
        Photos
      </Link>
      <Link as={Link} to="/dailyActivities">
        Daily Activities
      </Link>
      <Link as={Link} to="/food">
        Food
      </Link>
      <Link as={Link} to="/healthInfo">
        Health Information
      </Link>
      <Link as={Link} to="/notes">
        Notes
      </Link>
      <Link as={Link} to="/incidents">
        Incidents
      </Link>
    </React.Fragment>
  );
}

export default Activities;
