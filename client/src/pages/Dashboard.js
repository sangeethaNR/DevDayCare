import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <Link as={Link} to="/activities">
      Activities
    </Link>
  );
}

export default Dashboard;
