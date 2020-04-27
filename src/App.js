import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import About from './Components/About';
import Header from './Components/Header';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
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
            <About/>
          </Router>

        </Switch>

      </div>

    </Router>

  );
}

export default App;
