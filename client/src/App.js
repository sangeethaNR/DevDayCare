import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import adminDashboard from "./pages/adminDashboard";
import teacherDashboard from "./pages/teacherDashboardPage";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Activities from "./pages/Activities";
import Profile from "./pages/activities/profile";
import Photos from "./pages/activities/photos";
import DailyActivities from "./pages/activities/dailyActivities";
import Food from "./pages/activities/food";
import AddMedication from "./pages/activities/addMedication";
import Notes from "./pages/activities/notes";
import Incidents from "./pages/activities/incidents";
import AddStudent from "./pages/addStudent";
import AddTeacher from "./pages/addTeacher";
import AddClassroom from "./pages/addClassroom";
import AddPhoto from "./pages/activities/addPhoto";
import AddFood from "./pages/activities/addFood";

import UserProvider from "./components/AppContext";
import Paperbase from "./dashboard";
// import AddMedication from "./pages/activities/addMedication";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Router>
          <>
              <Navbar  />
            <Switch>
              <Route exact path="/teacherDashboard" component={Paperbase} />
              <Route exact path="/" component={Home} />
              <Route exact path="/adminDashboard" component={adminDashboard} />
              <Route exact path="/addStudent" component={AddStudent} />
              <Route exact path="/addClassroom" component={AddClassroom} />
              <Route exact path="/addTeacher" component={AddTeacher} />
              <Route exact path="/activities/:itemId" component={Activities} />
              <Route exact path="/profile/:id" component={Profile} />
              <Route exact path="/photos/:itemId" component={Photos} />
              <Route exact path="/addPhotos/:itemId" component={AddPhoto} />
              <Route
                exact
                path="/dailyActivities/:itemId"
                component={DailyActivities}
              />
              <Route exact path="/food" component={Food} />
              <Route exact path="/addFood/:itemId" component={AddFood} />
              <Route exact path="/addMedication/:itemId" component={AddMedication} />
              <Route exact path="/notes/:itemId" component={Notes} />
              <Route exact path="/incidents/:itemId" component={Incidents} />
            </Switch>
            <Footer />
          </>
        </Router>
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
