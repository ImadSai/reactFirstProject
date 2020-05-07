import React from 'react';
import './App.css';
import ChronoMinuteur from './Views/ChronoMinuteur';
import Header from './Views/Header';
import SearchImages from './Views/SearchImages';
import Home from './Views/Home';
import UploadFile from './Views/UploadFile';
import { Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';

// Boostrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

/* function App */
const App = () =>  {

  return ( 
    <Router>
      {/* Navigation Bar */}
      <Header />

      {/* Router Switch */}
      <div className="container-fluid">
        <Switch>

          {/* Home Path */}
          <Router path="/home">
            <Home />
          </Router>

          {/* Chronometer and Timer Path */}
          <Router path="/ChronoMinuteur">
            <ChronoMinuteur />
          </Router>

          {/* Search Images Path */}
          <Router path="/searchImages">
            <SearchImages />
          </Router>

          {/* Upload File Path */}
          <Router path="/uploadFile">
            <UploadFile />
          </Router>

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
