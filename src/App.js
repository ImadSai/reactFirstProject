import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import { Switch, Link, BrowserRouter as Router } from 'react-router-dom';
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
      <nav className="navbar navbar-expand">

        <ul className="navbar-nav">

          <li className="nav-item">
            <Link to="/home" className="nav-link">Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/counter" className="nav-link">Counter</Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>

        </ul>

      </nav>

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

          {/* About Path */}
          <Router path="/about">
            <h4> About </h4>
          </Router>

        </Switch>

      </div>

    </Router>

  );
}

export default App;
