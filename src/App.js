import React from 'react';
import './App.css';
import ChronoMinuteur from './Components/ChronoMinuteur';
import About from './Components/About';
import Header from './Components/Header';
import SearchImages from './Components/SearchImages'
import { Switch, BrowserRouter as Router } from 'react-router-dom';

// Boostrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

/* function App */
const App = () =>  {

  return ( 
    <Router>
      {/* Navigation Bar */}
      <Header/>

      {/* Router Switch */}
      <div className="container-fluid">
        <Switch>

          {/* Home Path */}
          <Router path="/home">
            <h4> Home </h4>
          </Router>

          {/* Chronometer and Timer Path */}
          <Router path="/ChronoMinuteur">
            <ChronoMinuteur />
          </Router>

          {/* Search Images Path */}
          <Router path="/searchImages">
            <SearchImages />
          </Router>"

          {/* About Path */}
          <Router path="/about">
            <About/>
          </Router>

        </Switch>

      </div>

    </Router>

  );
}

export default App;
