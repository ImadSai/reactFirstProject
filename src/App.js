import React from 'react';
import './App.css';
import ChronoMinuteur from './Views/ChronoMinuteur';
import Header from './Views/Header';
import SearchImages from './Views/SearchImages';
import Home from './Views/Home';
import UploadFile from './Views/UploadFile';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';

// Boostrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const isLoggedIn = function() {
  return true
}

/* function App */
const App = () => {

  return (
    <Router>
      {/* Navigation Bar */}
      <Header />

      {/* Router Switch */}
      <div className="container-fluid">
        <Switch>

          {/* Home Path */}
          <Route component={Home} path="/home" />

          {/* Chronometer and Timer Path */}
          <Route component={ChronoMinuteur} path="/ChronoMinuteur" />

          {/* Search Images Path */}
          <Route component={SearchImages} path="/searchImages" />

          {/* Upload File Path */}
          <Route path="/uploadFile" render={() => ( isLoggedIn() ? <UploadFile/> : <Redirect to="/home"/>)} />

          {/* Default Path */}
          <Router path="/">
            <Redirect exact from="/" to="/home" />
            <Home />
          </Router>

        </Switch>

      </div>

    </Router>

  );
}

export default App;
