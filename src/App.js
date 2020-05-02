import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import About from './Components/About';
import Header from './Components/Header';
import SearchImages from './Components/SearchImages'
import { Switch, BrowserRouter as Router } from 'react-router-dom';

// Boostrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Font-Awesome
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

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
      <div className="container m-3">
        <Switch>

          {/* Home Path */}
          <Router path="/home">
            <h4> Home </h4>
          </Router>

          {/* Counter Path */}
          <Router path="/counter">
            <h4> Counter </h4>
            <Counter infos={myObject} image="images/bart.png" />
            <Counter infos={myObject}  image="images/omer.png" />
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
