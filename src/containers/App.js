import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import './App.scss';
import Cover from '../components/Cover/Cover'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><NavLink to="/about" exact>Quiénes somos</NavLink></li>
              <li><NavLink to="/art" exact>Artes</NavLink></li>
            </ul>
          </nav>
          <Route path="/" exact>
            <Cover pageNumber="01" title="¿Quienes Somos?" />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
