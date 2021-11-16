import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer'
import Home from './pages/Home';
import adminDashboard from "./pages/adminDashboard";
import teacherDashboard from "./pages/teacherDashboardPage";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Activities from './pages/Activities'
import Profile from './pages/activities/profile'
import Photos from './pages/activities/photos'
import DailyActivities from './pages/activities/dailyActivities'
import Food from './pages/activities/food'
import HealthInfo from './pages/activities/healthInfo'
import Notes from './pages/activities/notes'
import Incidents from './pages/activities/incidents'
import AddStudent from './pages/addStudent'
import AddTeacher from './pages/addTeacher'
import AddPhoto from "./pages/activities/addPhoto"
import AddFood from "./pages/activities/addFood"
import NoteHistory from "./pages/activities/noteHistory"
import IncidentHistory from "./pages/activities/incidentHistory"
import HealthHistory from "./pages/activities/healthHistory"
import DailyActivitiesHistory from "./pages/activities/activityHistory"

import UserProvider from './components/AppContext';
import { selectionSetMatchesResult } from "@apollo/client/cache/inmemory/helpers";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
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
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/adminDashboard' component={adminDashboard} />
          <Route exact path='/teacherDashboard' component={teacherDashboard} />
          <Route exact path='/addStudent' component={AddStudent} />
          <Route exact path='/addTeacher' component={AddTeacher} />
          <Route exact path='/activities/:itemId' component={Activities}/>
          <Route exact path='/profile' component={Profile}/>
            <Route exact path='/photos' component={Photos}/>
            <Route exact path='/addPhotos' component={AddPhoto} />
            <Route exact path='/dailyActivities' component={DailyActivities} />
            <Route exact path='/dailyActivitiesHistory' component={DailyActivitiesHistory} />
            <Route exact path='/food' component={Food} />
            <Route exact path='/addFood' component={AddFood} />
            <Route exact path='/healthInfo' component={HealthInfo} />
            <Route exact path='/healthHistory' component={HealthHistory} />
            <Route exact path='/notes' component={Notes} />
            <Route exact path='/noteHistory' component={NoteHistory} />
            <Route exact path='/incidents' component={Incidents} />
            <Route exact path='/incidentHistory' component={IncidentHistory} />
        </Switch>
        <Footer />
      </>
    </Router>
    </UserProvider>
    </ApolloProvider>
  );
}

export default App;
