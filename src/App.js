import React from 'react';
import './App.css';
import Chrono from './Components/Chrono';
import About from './Components/About';
import Header from './Components/Header';
import SearchImages from './Components/SearchImages'
import { Switch, BrowserRouter as Router } from 'react-router-dom';

// Boostrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

/* function App */
const App = () =>  {

  let myObject = {
    titre: 'Conteur',
    value: 1
  };

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

          {/* Counter Path */}
          <Router path="/chrono">
            <h4> Chronometer </h4>
            <Chrono />
          </Router>

          {/* Search Images Path */}
          <Router path="/searchImages">
            <h4> Search  Images </h4>
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
