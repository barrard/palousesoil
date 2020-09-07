import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home/HomePage.js'

function App() {
  return (
    <Router>
      {/* //Main Nav */}
      <div className='row flex_center'>
        <div className='col-sm-12 flex_center'>
          
        <h1>Palouse Soil</h1>
        </div>
      </div>


    <div className="App">
           <Route exact path='/' component={Home} />

    </div>
    </Router>

  );
}

export default App;
