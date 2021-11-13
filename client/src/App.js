import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer'
import Home from './pages/Home';
import adminDashboard from "./pages/adminDashboard";
import teacherDashboard from "./pages/teacherDashboard";
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
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/adminDashboard' component={adminDashboard} />
          <Route exact path='/teacherDashboard' component={teacherDashboard} />
          <Route exact path='/activities' component={Activities}/>
          <Route exact path='/profile' component={Profile}/>
            <Route exact path='/photos' component={Photos}/>
            <Route exact path='/dailyActivities' component={DailyActivities} />
            <Route exact path='/food' component={Food} />
            <Route exact path='/healthInfo' component={HealthInfo} />
            <Route exact path='/notes' component={Notes} />
            <Route exact path='/incidents' component={Incidents} />
        </Switch>
        <Footer />
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;
