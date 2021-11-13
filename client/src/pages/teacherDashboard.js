import React from "react";
import { Link } from "react-router-dom";

function teacherDashboard() {
  return (
    <React.Fragment>
      <Link as={Link} to="/activities">
        Activities
      </Link>
    </React.Fragment>
  );
}

export default teacherDashboard;
